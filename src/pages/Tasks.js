import React, { useEffect, useState } from 'react';
import { getTasks, addTask, deleteTask, completeTask } from '../services/taskService';
import '../styles.css';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data.tasks || []);
  };

  const handleAddTask = async () => {
    if (!title || !dueDate || !dueTime) return alert('Fill all fields');
    const newTask = { title, description, date: dueDate, time: dueTime };
    const added = await addTask(newTask);
    if (added) {
      setTitle('');
      setDescription('');
      setDueDate('');
      setDueTime('');
      fetchTasks();
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleComplete = async (id) => {
    await completeTask(id);
    fetchTasks();
  };

  return (
    <div className="task-container">
      <h1 className="main-title">TaskMaster – To-Do List</h1>
      <div className="task-form">
        <input placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <input type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} />
        <button className="primary-button" onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className={`task-item ${task.completed ? 'done' : ''}`}>
            <div>
              <strong>{task.title}</strong>
              <div className="task-desc">{task.description}</div>
              <div>{task.date} at {task.time}</div>
            </div>
            <div className="task-buttons">
              <button onClick={() => handleComplete(task._id)}>Mark Done</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
