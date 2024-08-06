import React from "react";
import styles from "./Main.module.css"


function Main() {
    return (<div className={styles["main-grid"]}>
        <div className={styles["main-grid_left-side"]} >Side bar</div>
        <div className={styles["main-grid_right-side"]}>
            <div>Header</div>
            <div className={styles["main-block"]}></div>

        </div>
    </div>)

}

export default Main;