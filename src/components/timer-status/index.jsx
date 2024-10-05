import "../../css/styles/timer-status/timer-status.css";
import optionSelected from "../../scripts/modal/option-select.js";

export default function TimerStatus() {

    optionSelected();

    return (
        <div className="timer-status-container">
            <button className="status selected">pomodoro</button>
            <button className="status ">short break</button>
            <button className="status ">long break</button>
        </div>
    )
}