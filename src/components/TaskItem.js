import React from 'react';

function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      <div>
        <h3>{task.title}</h3>
        {task.desc && <p>{task.desc}</p>}
        {(task.date || task.time) && (
          <p><strong>Due:</strong> {task.date} {task.time}</p>
        )}
      </div>
      <div className="task-actions">
        <button onClick={() => onComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
