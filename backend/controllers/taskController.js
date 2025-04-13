const Task = require('../models/Task');

// Create task
exports.createTask = async (req, res) => {
  try {
    console.log('➡️ createTask called with body:', req.body); // ✅ Debug log
    const task = new Task({ ...req.body, userId: req.userId });
    await task.save();
    res.status(201).json({ task });
  } catch (err) {
    console.error('❌ Task creation error:', err); // 🔴 Show error
    res.status(500).json({ message: 'Failed to create task' });
  }
};

// Get user's tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
};
