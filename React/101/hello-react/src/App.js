import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";

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
            <User data={user} />
            <User data={user} />
            <User data={user} />
        </div>
    );
}

export default App;
