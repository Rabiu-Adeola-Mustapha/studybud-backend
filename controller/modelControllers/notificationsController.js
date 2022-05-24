const Notifications = require("../../models/notifications.model");

const getAllNotifications = async (req, res) => {

  try {

    res.send("Getting All notificatiio");
    const notifications = await Notifications.find();

    res.status(200).json(notifications);

  } catch (error) {

    res.status(400).json(error.msg);
    
  };

};
const getSingleNotification = async (req, res) => {

  try {
    res.send("Getting a single notification");
    const notificationId = req.params.notificationId;

    const notification = await Notifications.findById(notificationId);

    if (!notification)
      return res.status(400).json({ msg: " Assesment Not Found" });

    // res.status(200).json(notification);
  } catch (error) {
    res.status(400).json(error.msg);
  }
};

const createNotification = async (req, res) => {};

const deleteNotification = async (req, res) => {

  try {

    const notificationId = req.params.assementId;
    let notification = await Notifications.findById(assementId);

    if (!notification)
      return res.status(400).json({ msg: " Notification Not Found" });

    await Assesment.remove(assesment);

    res.status(200).json("Notification Deleted Succesfully");

  } catch (error) {
    res.status(400).json(error.msg);
  };

};
const updateNotification = async (req, res) => {};



module.exports = {
    getAllNotifications,
    getSingleNotification,
    createNotification,
    deleteNotification,
    updateNotification
}
