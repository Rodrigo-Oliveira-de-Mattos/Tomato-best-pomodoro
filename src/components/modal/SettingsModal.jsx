import closeModal from "../../scripts/modal/close-modal.js"
import applySettings from "../../scripts/modal/apply-settings.js"
import optionSelect from "../../scripts/modal/option-select.js"
import { useEffect } from "react"
import '../../css/styles/modal/index.css'

export default function SettingsModal() {

    useEffect(() => {
        optionSelect();
    }, [])

    return (
        <div className="background-modal hidden" id="modal">
            <div className="settings-modal">
                <section className="settings-modal__header">
                    <h2>Settings</h2>
                    <button onClick={closeModal}>x</button>
                    {/* mudar esse X */}
                </section>

                <section className="settings-modal__time">
                    <h3>Time (MINUTES)</h3>
                    <div className="settings-modal__time--inputs">
                        <div>
                            <p>pomodoro</p>
                            <input type="number" name="" id="" />
                        </div>
                        <div>
                            <p>short break</p>
                            <input type="number" name="" id="" />
                        </div>
                        <div>
                            <p>long break</p>
                            <input type="number" name="" id="" />
                        </div>
                    </div>
                </section>

                <section className="settings-modal__font">
                    <h3>Font</h3>
                    <div className="options">
                        <button className="option-font">Aa</button>
                        <button className="option-font">Aa</button>
                        <button className="option-font">Aa</button>
                    </div>
                </section>

                <section className="settings-modal__color">
                    <h3>Color</h3>
                    <div className="options">
                        <button id="red" className="option-color"></button>
                        <button id="blue" className="option-color"></button>
                        <button id="purple" className="option-color"></button>
                    </div>
                </section>

                <div className="apply-area">
                    <button onClick={applySettings} className="settings-modal__apply">Apply</button>
                </div>

            </div>
        </div>
    )
}