import React, { useState } from "react";

function UseStateObject() {
    const [user, setUser] = useState({ name: "Yasin", surname: "Veliyev" });
    return (
        <div>
            <h2>User</h2>
            {user.name} {user.surname}
            <div>
                <button onClick={() => setUser({ ...user, name: "Asim" })}>
                    Ismi deyistir
                </button>
                <button onClick={() => setUser({ ...user, surname: "Eliyev" })}>
                    Soyismi deyistir
                </button>
            </div>
        </div>
    );
}

export default UseStateObject;
