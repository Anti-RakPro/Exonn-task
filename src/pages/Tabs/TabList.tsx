import React from "react";
import styles from "./TabList.module.css";
import {Link, useLocation } from "react-router-dom";
// import classnames from 'classnames';

const obj = [{
    id: '',
    title: 'Dashboard',
    routePath: '/dashboard',
    // routeElement: {Dashboard},
    isOpened: false,
},{
    id: '',
    title: 'Dashboard2',
    routePath: '/dashboard2',
    // routeElement: {Dashboard},
    isOpened: false,
},{
    id: '',
    title: 'Dashboard3',
    routePath: '/dashboard3',
    // routeElement: {Dashboard},
    isOpened: false,
},{
    id: '',
    title: 'Dashboard4',
    routePath: '/dashboard4',
    // routeElement: {Dashboard},
    isOpened: false,
},{
    id: '',
    title: 'Dashboard5',
    routePath: '/dashboard5',
    // routeElement: {Dashboard},
    isOpened: false,
},{
    id: '',
    title: 'Dashboard6',
    routePath: '/dashboard6',
    // routeElement: {Dashboard},
    isOpened: false,
},{
    id: '',
    title: 'Dashboard7',
    routePath: '/dashboard7',
    // routeElement: {Dashboard},
    isOpened: false,
},{
    id: '',
    title: 'Dashboard8',
    routePath: '/dashboard8',
    // routeElement: {Dashboard},
    isOpened: false,
}, ]
const tabs = [...obj]

// interface Tab {
//     routePath: string;
//     // Add other properties if necessary
// }

function TabList() {

    const location = useLocation();
    const currentUrl = location.pathname + location.search + location.hash;

    // function tabStyle(tab:Tab){
    //
    //     console.log('-->', currentUrl === tab.routePath? 'tab-item tab-item_active' : 'tab-items')
    //     return currentUrl === tab.routePath? styles['tab-item_active'] : ''
    // }

    function tabStyle (tab: any) {
        return `${styles["tab-item"]} ${currentUrl === tab.routePath? styles['tab-item_active'] : ''}`
    }

    // const linkStyle = classnames ('tab-item', {
    //     'tab-item_active' : currentUrl === tab.routePath
    // })


    return <div className={styles["tab-row"]}>
        {tabs.map((tab) => {
            return (
                    <Link className={tabStyle(tab)} key={tab.id} to={tab.routePath}> {tab.title}  </Link>
            )
        })}
    </div>
}
    export default TabList