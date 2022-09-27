import useDarkSide from "@hooks/useDarkSide"
import { Fragment, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const Switcher = () => {
    const [colorTheme, setTheme] = useDarkSide()
    const [darkSide, setDarkSide] = useState(false)
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <Fragment>
            <DarkModeSwitch
                className={colorTheme === "light" ? "bg-primary-pressed" : "bg-neutral-10"}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={32}
            />
        </Fragment>
    )
}

export default Switcher