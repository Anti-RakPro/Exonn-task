import React, {useCallback} from "react";
import {Route, useLocation} from 'react-router-dom';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

// fake data generator
const getItems = (count: number) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`
    }));
const fakeData = getItems(10)

function Dashboard() {

    const location = useLocation();
    const currentUrl = location.pathname + location.search + location.hash;

    return (
        <div>
            <div>Dashboard</div>
            <div>{currentUrl}</div>
            <Droppable droppableId={'tabs'}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {fakeData.map((item, index)=>(
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}

                    >
                        {item.content}
                    </div>
                )}
                    </Draggable>
                    ))}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default Dashboard