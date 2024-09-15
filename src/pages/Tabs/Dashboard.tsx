import React, {useCallback, useState} from "react";
import {Route, useLocation} from 'react-router-dom';
import {Droppable, Draggable, DragDropContext} from 'react-beautiful-dnd';

// fake data generator
const getItems = (count: number) =>
    Array.from({length: count}, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`
    }));
const fakeDataInitial = getItems(10)


function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}

function Dashboard() {

    const location = useLocation();
    const currentUrl = location.pathname + location.search + location.hash;

    const [fakeData, setItems] = useState(fakeDataInitial);

    const onDragEnd = React.useCallback(
        (result) => {
            console.log(result)
            if (!result.destination) {
                return;
            }
            if (result.source.index === result.destination.index) {
                return;
            }

            // void setItems
            setItems((items) =>
                reorder(items, result.source.index, result.destination.index)
            );
        },
        [setItems]
    );


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <div>Dashboard</div>
                <div>{currentUrl}</div>
                <Droppable droppableId={'tabs'}>
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {fakeData.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
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
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>

    )
}

export default Dashboard