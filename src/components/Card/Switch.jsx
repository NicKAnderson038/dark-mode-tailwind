import './switch.css'

export default function Switch({ toggle, setTheme }) {
    return (
        <label>
            <input
                type="checkbox"
                role="switch"
                className="light-dark"
                onChange={setTheme}
                checked={toggle}
            />
        </label>
    )
}
