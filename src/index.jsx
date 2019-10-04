import React from "react";
import ReactDOM from "react-dom";
import './main.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                Hello React, Webpack 4 & Babel 7!
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));