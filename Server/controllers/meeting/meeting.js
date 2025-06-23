const Meeting = require('../../model/schema/meeting');
const mongoose = require('mongoose');

const add = async (req, res) => {
  try {
    const meeting = new Meeting(req.body);
    await meeting.save();
    res.status(201).json(meeting);
  } catch (error) {
    res.status(500).json({ error: 'Error creating meeting', details: error });
  }
};

const index = async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.status(200).json(meetings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meetings', details: error });
  }
};

const view = async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id);

    if (!meeting) return res.status(404).json({ message: 'Meeting not found' });
    res.status(200).json(meeting);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meeting', details: error });
  }
};

const deleteData = async (req, res) => {
  try {
    await Meeting.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting meeting', details: error });
  }
};

module.exports = { add, index, view, deleteData };