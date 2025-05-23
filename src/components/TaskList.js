import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onComplete }) {
  if (!tasks.length) return <p>No tasks added yet.</p>;

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
