import React from "react";
import styles from "./Main.module.css"
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Tabs/Dashboard";
import TabList from "../Tabs/TabList";


function Main() {
    return (<div className={styles["main-grid"]}>
        <div className={styles["side-bar"]}>Side bar</div>
        <div className={styles["header"]}>Header</div>
        <div className={styles["main-block"]}>
            <TabList/>
            <div className={styles["main-display"]}>
                <Routes>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                </Routes>
            </div>
        </div>
    </div>)
}
export default Main;