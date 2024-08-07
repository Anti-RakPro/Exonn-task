import React from "react";
import styles from "./TabList.module.css";
import {Link, useLocation } from "react-router-dom";

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
}, ]
const tabs = [...obj]

interface Tab {
    routePath: string;
    // Add other properties if necessary
}

function TabList() {

    const location = useLocation();
    const currentUrl = location.pathname + location.search + location.hash;

    function tabStyle(tab:Tab){

        console.log('-->', currentUrl === tab.routePath? 'tab-item tab-item_active' : 'tab-items')
        return currentUrl === tab.routePath? 'tab-item_active' : ''
    }


    return <div className={styles["tab-row"]}>
        {tabs.map((tab) => {
            return (
                    <Link className={`${styles['tab-item']} ${tabStyle(tab)}`} key={tab.id} to={tab.routePath}> {tab.title}  </Link>
            )
        })}
    </div>
}
    export default TabList