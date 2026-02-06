import { useState } from 'react';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id}>
      {(provided) => (
        <div
          className="taskCard"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="taskCardTitleAndDeleteButtonArea">
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  );
};
