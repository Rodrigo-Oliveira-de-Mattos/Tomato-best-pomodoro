import openModal from "../../scripts/modal/open-modal.js"

export default function SettingsButton() {
    return (
        <div className="settings-button">
            <button className="gear-button" id="open-button" onClick={openModal}>⚙️</button>
            {/* colocar um icon */}
        </div>
    )
}