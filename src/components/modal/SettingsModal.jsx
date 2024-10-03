import closeModal from "../../scripts/close-modal"
import applySettings from "../../scripts/apply-settings"
import '../../css/styles/modal/settings-modal.css'

export default function SettingsModal() {

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
                        <button className="selected">Aa</button>
                        <button>Aa</button>
                        <button>Aa</button>
                    </div>
                </section>

                <section className="settings-modal__color">
                    <h3>Color</h3>
                    <div className="options">
                        <button id="red"></button>
                        <button id="blue"></button>
                        <button id="purple"></button>
                    </div>
                </section>

                <div className="apply-area">
                    <button onClick={applySettings} className="settings-modal__apply">Apply</button>
                </div>

            </div>
        </div>
    )
}