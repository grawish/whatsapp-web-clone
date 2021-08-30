import './style/App.scss';
import Left from "./Components/left";
import Right from "./Components/right";
import {useState} from "react";

function App() {
    const [user,setUser] = useState('-1');
    return (
        <div className="app">
            <Left/>
            <Right/>
        </div>
    );
}

export default App;

