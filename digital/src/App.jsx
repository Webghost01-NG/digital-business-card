import { useState } from "react"
import Card from "./components/Card"

function App() {

const [darkMode,setDarkMode] = useState(true)

function toggleTheme(){
setDarkMode(prev => !prev)
}

return (
<div className={darkMode ? "app dark" : "app light"}>

<button className="theme-toggle" onClick={toggleTheme}>
{darkMode ? "☀️" : "🌙"}
</button>

<Card />

</div>
)

}

export default App