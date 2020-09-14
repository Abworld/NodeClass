const express = require("express");
const router = express.Router();

const Subscriber = require("../models/subscribers");

const getSubscriber = async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.subscriber = subscriber;
  next();
};
//Getting all
router.get("/", async (req, res) => {
  try {
    const subscriber = await Subscriber.find();
    res.json(subscriber);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Getting One
router.get("/:id", getSubscriber, async (req, res) => {
  //res.send(`<h2>${req.params.id}</h2>`);
  res.json(res.subscriber); // gives exact subscribers
});
//Creating one
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannels: req.body.subscriberToChannels,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Updating One
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscriberToChannels != null) {
    res.subscriber.subscriberToChannels = req.body.subscriberToChannels;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json(updatedSubscriber) + console.log("successful");
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});
//Dleting One
router.delete(
  "/:id",
  getSubscriber,
  async (req, res) => {
    try {
      await res.subscriber.remove();
      res.json({ message: "Deleted Subscriber" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async function getSubscriber(req, res, next) {
    let subscriber;
    try {
      subscriber = await Subscriber.findById(req.params.id);
      if (subscriber == null) {
        return res.status(404).json({ message: "cannot find subscriber" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.subscriber = subscriber;
    next();
  }
);
//delete new
// router.delete("/:id", (req, res, next) => {
//   Subscriber.deleteOne({ _id: req.params.id }, (err, result) => {
//     if (err) {
//       return res.status(500).json({ msg: err.message });
//     } else {
//       res.json({ msg: "subscriber successfully deleted" });
//     }
//   });
// });
module.exports = router;
