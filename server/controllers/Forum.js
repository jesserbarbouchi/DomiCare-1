const QuestAns = require("../models/Question&Answers");

module.exports = {
  create_One: async (req, res, next) => {
    const { owner,
      title,
      content,
      likesCount,
      comments,
      type} =
      req.body;
    try {
      const Quest = await QuestAns.create({
        owner,
        title,
        content,
        likesCount,
        comments,
        type
      });

      res.status(200).json(Quest);
    } catch (error) {
      next(error);
    }
  },
  find_All: async (req, res, next) => {
    try {
      const Quests = await QuestAns.find({}).sort({createdAt: -1}).exec();
         
      res.status(200).json(Quests);
    } catch (error) {
      next(error);
    }
  },
  find_One: async (req, res, next) => {
    console.log("event/events ",req.body)
    try {
      const eventsFound = await QuestAns.find({ city: req.body.city });
      console.log(eventsFound)
      res.status(200).json(eventsFound);
    } catch (error) {
      next(error);
    }
  },
  update_One: async (req, res, next) => {
    console.log("request", req.body);
    try {
      const event = await QuestAns.findByIdAndUpdate(
        { _id: req.body._id },
        { $push: { comments: req.body.comment } },
        { new: true }
      );
      res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  },
  remove_One: async (req, res, next) => {
    console.log('deletepost',req.body)
    try {
      const removedEvent = await QuestAns.delete({_id: req.body._id});
      res.status(200).json(removedEvent);
    } catch (error) {
      next(error);
    }
  },
  delete_comment: async (req, res, next) => {
   
    try {
      const removedComment = await QuestAns.findOneAndUpdate({_id:req.body._id}, {$pull : {comments:req.body.comment}});
      res.status(200).json(removedComment);
    } catch (error) {
      next(error);
    }
  }
};
