import { useEffect, useState } from 'react'
import Switch from '../Card/Switch'
import styles from './darkMode.module.css'

export default function DarkMode() {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        let ignore = false
        if (!ignore) {
            const selectedTheme = localStorage.getItem('selectedTheme')
            setToggle(selectedTheme !== 'dark')
            document
                .querySelector('html')
                .setAttribute('data-theme', selectedTheme)
        }
        return () => {
            ignore = true
        }
    }, [])

    function setTheme() {
        if (!toggle) {
            document.querySelector('html').setAttribute('data-theme', 'light')
            localStorage.setItem('selectedTheme', 'light')
        } else {
            document.querySelector('html').setAttribute('data-theme', 'dark')
            localStorage.setItem('selectedTheme', 'dark')
        }
        setToggle(!toggle)
    }

    return (
        <>
            <div>
                <Switch setTheme={setTheme} toggle={toggle} />
                {/* <input
                    type="checkbox"
                    className={styles['checkbox']}
                    id="checkbox"
                    onChange={setTheme}
                    checked={toggle}
                />
                <label htmlFor="checkbox" className={styles['checkbox-label']}>
                    <span className={styles['ball']}></span>
                </label> */}
            </div>
        </>
    )
}
