import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";

const DropItem = styled.div`
  width: 80%;
  height: 60px;
  background-color: blue;
  margin: 20px;
  border-radius: 20px;
`;

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <DropItem></DropItem>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
