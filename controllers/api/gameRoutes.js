const router = require('express').Router();
const { Game, User, UserGame } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
  try {
    // Find the game where appId = :id
    const gameData = await Game.findOne({
      where: {
        appId: req.params.id
      }
    })
    // If gameData is null, create a new game and userGame
    if(!gameData) {
      const createGame = await Game.create({
        appId: req.params.id
      })
      const createUserGame = await UserGame.create({
        user_id: req.session.user_id,
        game_id: createGame.id,
      })
      res.status(200).json({message: `Create the ${req.params.id} game`})
      // otherwise only create a new userGame
    } else {
      const UserGameData = await UserGame.findAll({
        where: {
          user_id: req.session.user_id,
          game_id: gameData.id,
        }
      })
      // If the userGame is not yet created in userGame, create a new one, else do nothing
      if(UserGameData.length === 0) {
        const createUserGame = await UserGame.create({
          user_id: req.session.user_id,
          game_id: gameData.id,
        })
        res.status(200).json({message: `Add ${req.params.id} game to user's list`})
      } else {
        res.status(404).json({message: 'The game is already on your list'})
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;