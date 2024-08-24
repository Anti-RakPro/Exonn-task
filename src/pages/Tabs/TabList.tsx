import React from "react";
import styles from "./TabList.module.css";
import {Link, useLocation} from "react-router-dom";
import {Scrollbars} from 'react-custom-scrollbars-2'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const obj = [
    {
    id: '',
    title: 'Dashboard',
    routePath: '/dashboard',
    // routeElement: {Dashboard},
    isOpened: false,
}, {
    id: '',
    title: 'Dashboard2',
    routePath: '/dashboard2',
    // routeElement: {Dashboard},
    isOpened: false,
}, {
    id: '',
    title: 'Dashboard3',
    routePath: '/dashboard3',
    // routeElement: {Dashboard},
    isOpened: false,
}, {
    id: '',
    title: 'Dashboard4',
    routePath: '/dashboard4',
    // routeElement: {Dashboard},
    isOpened: false,
}, {
    id: '',
    title: 'Dashboard5',
    routePath: '/dashboard5',
    // routeElement: {Dashboard},
    isOpened: false,
}, {
    id: '',
    title: 'Dashboard6',
    routePath: '/dashboard6',
    // routeElement: {Dashboard},
    isOpened: false,
}, {
    id: '',
    title: 'Dashboard7',
    routePath: '/dashboard7',
    // routeElement: {Dashboard},
    isOpened: false,
}, {
    id: '',
    title: 'Dashboard8',
    routePath: '/dashboard8',
    // routeElement: {Dashboard},
    isOpened: false,
},]
const tabs = [...obj]

// interface Tab {
//     routePath: string;
//     // Add other properties if necessary
// }

function TabList() {

    const location = useLocation();
    const currentUrl = location.pathname + location.search + location.hash;

    function tabStyle(tab: any) {
        return `${styles["tab-item"]} ${currentUrl === tab.routePath ? styles['tab-item_active'] : ''}`
    }

    return <div className={styles["tab-row"]}>
        <Scrollbars
            hideTracksWhenNotNeeded={true}
            renderTrackHorizontal={props => <div {...props} className={styles["track-horizontal"]}/>}
            renderTrackVertical={props => <div {...props} className={styles["track-vertical"]}/>}
            renderThumbHorizontal={props => <div {...props} className={styles["thumb-horizontal"]}/>}
            renderThumbVertical={props => <div {...props} className={styles["thumb-vertical"]}/>}
            renderView={props => <div {...props} className={styles["view"]}/>}
        >
            {tabs.map((tab) => {
                return (
                    <Link className={tabStyle(tab)} key={tab.id} to={tab.routePath}> {tab.title}  </Link>
                )
            })}
        </Scrollbars>
    </div>
}

export default TabList