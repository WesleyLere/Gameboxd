const router = require('express').Router();
const { Rating, Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/',  async (req, res) => {
  try {
    // store data comeback from the front end and user_id
    const ratingRequestData = {
      comment: req.body.comment,
      rating: req.body.rating,
      user_id: req.session.user_id,
    }
    // find the game that appId = game_id(from the front-end)
    const gameData = await Game.findOne({
      where: {
        appId: req.body.game_id,
      }
    })
    // if gameData is null, create a new game, then create a new rating
    if(!gameData) {
      const createGame = await Game.create({
        appId: req.body.game_id
      })
      const createRating = await Rating.create({
        ...ratingRequestData,
        game_id: createGame.id,
      })
      res.status(200).json({message: `Create a new rating for the game with id: ${createRating.game_id}`})
      // otherwise, create a new rating with the gameData's id
    } else {
      const createRating = await Rating.create({
        ...ratingRequestData,
        game_id: gameData.id,
      })
      res.status(200).json({message: `Create a new rating for the game with id: ${createRating.game_id}`})
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateRating = await Rating.update({
      where: {
        id: req.body.id
      }
    })
    if (!updateRating) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Successfully update Rating'});
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteRating = await Rating.destroy({
      where: {
        id: req.body.id
      }
    })
    if (!updateRating) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }
    res.status(200).json({message: "Successfully delete Rating"})
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
