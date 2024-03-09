/* eslint-disable react/prop-types */
import './switch.css'

/**
 * @param {Object} param
 * @param {Boolean} param.toggle
 * @param {Function} param.setTheme
 */
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
