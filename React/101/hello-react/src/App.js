import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import Counter from "./components/Counter";
import UseStateObject from "./components/UseStateObject";
import UseStateArray from "./components/useStateArray";

const name = "Yasin";
let surname = "Vəliyev";
const fullname = "Yasin Vəliyev";
const isLoggedIn = false;
const user = { name: "Yasin", city: "Tovuz", age: 30, surname: "Veliyev" };

function App() {
    return (
        <div>
            <Header />
            {isLoggedIn ? `Merhaba ${name} ${surname}` : <Login />}
            <User
                title="Erkekd"
                name="Yasin"
                age={30}
                surname="Veliyev"
                city="Tovuz"
            />
            <Counter />
            <UseStateObject />
            <UseStateArray />
        </div>
    );
}

export default App;
