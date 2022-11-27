import React from 'react';
import "./style.css";
import Button from "./Button"

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Hello World</h1>
            <Button title="App Store" />
            <Button title="play Store" />
            <Button />
            {/*<button className="button"> click me</button>*/}
        </div>
    )
}

export default App;