const router = require('express').Router();
const { Rating } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const rating = await Rating.create({
      ...req.body,
      user_id: req.session.user,
    })
    res.status(200)
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
