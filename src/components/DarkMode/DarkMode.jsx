import { useEffect, useState } from 'react'
import styles from './darkMode.module.css'

export default function DarkMode() {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        let ignore = false
        const selectedTheme = localStorage.getItem('selectedTheme')
        if (selectedTheme !== null && !ignore) {
            setToggle(selectedTheme === 'dark')
            document
                .querySelector('html')
                .setAttribute('data-theme', selectedTheme)
        }
        return () => {
            ignore = true
        }
    }, [])

    function setTheme() {
        const theme = document.querySelector('html').getAttribute('data-theme')
        if (theme === 'dark') {
            document.querySelector('html').setAttribute('data-theme', 'light')
            if (theme !== 'light')
                localStorage.setItem('selectedTheme', 'light')
        } else {
            document.querySelector('html').setAttribute('data-theme', 'dark')
            if (theme !== 'dark') localStorage.setItem('selectedTheme', 'dark')
        }
        setToggle(!toggle)
    }

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    className={styles['checkbox']}
                    id="checkbox"
                    onChange={setTheme}
                    checked={toggle}
                />
                <label htmlFor="checkbox" className={styles['checkbox-label']}>
                    {/* <i className={`fas ${styles['fa-moon']}`}></i>
                    <i className={`fas ${styles['fa-sun']}`}></i> */}
                    <span className={styles['ball']}></span>
                </label>
            </div>
        </>
    )
}
