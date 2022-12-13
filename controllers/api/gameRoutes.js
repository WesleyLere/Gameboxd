const router = require('express').Router();
const { Game, User, UserGame } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.findOne({
      where: {
        appId: req.params.id
      }
    })
    if(!gameData) {
      const createGame = await Game.create({
        appId: req.params.id
      })
      const createUserGame = await UserGame.create({
        user_id: req.session.user_id,
        game_id: createGame.id,
      })
      res.status(200).json({message: `Create the ${req.params.id} game`})
    } else {
      const UserGameData = await UserGame.findAll({
        where: {
          user_id: 1,
          game_id: gameData.id,
        }
      })
      if(UserGameData.length === 0) {
        const createUserGame = await UserGame.create({
          user_id: req.session.user_id,
          game_id: gameData.id,
        })
      }
      res.status(200).json({message: `Add ${req.params.id} game to user's list`})
    }
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;