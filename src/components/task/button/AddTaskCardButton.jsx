import React from 'react';
import { v4 as uuid } from 'uuid';
import { TaskCard } from '../TaskCard';

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
