import React, {useCallback} from "react";
import { useLocation } from 'react-router-dom';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function Dashboard(){

    const location = useLocation();
    const currentUrl = location.pathname + location.search + location.hash;

    return(
        <div>
            <div>Dashboard</div>
            <div>{currentUrl}</div>
            {/*<DragDropContext onDragEnd={onDragEnd}>*/}
            {/*    <Droppable droppableId={'tabs'}>*/}
            {/*        {(provided)=>{*/}
            {/*            <div {...provided.droppableProps} ref={provided.innerRef}>*/}
            {/*                <Draggable draggableId={'123'} index={1}>*/}
            {/*                    <div>1</div>*/}
            {/*                </Draggable>*/}
            {/*                <Draggable draggableId={'123'} index={2}>*/}
            {/*                    <div>2</div>*/}
            {/*                </Draggable>*/}
            {/*                <Draggable draggableId={'123'} index={3}>*/}
            {/*                    <div>3</div>*/}
            {/*                </Draggable>*/}
            {/*            </div>*/}
            {/*        }}*/}
            {/*    </Droppable>*/}
            {/*</DragDropContext>*/}
            
        </div>
    )
}

export default Dashboard