import React, { useState } from "react";

function Form() {
    const [name, setName] = useState("Ali");
    const [surname, setSurname] = useState("Mehmet");
    const [cinsiyyet, setCinsiyyet] = useState("Erkek");
    return (
        <div>
            <form>
                <label htmlFor="name">Isim</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Isim"
                    value={name}
                    onChange={(event) => {
                        setName(event.currentTarget.value);
                    }}
                />

                <label htmlFor="surname">Isim</label>
                <input
                    type="text"
                    name="surname"
                    placeholder="Soyad"
                    value={surname}
                    onChange={(event) => {
                        setSurname(event.currentTarget.value);
                    }}
                />
                <select
                    value={cinsiyyet}
                    onChange={(event) => {
                        setCinsiyyet(event.currentTarget.value);
                    }}
                >
                    <option value="Erkek">Erkek</option>
                    <option value="Kadin">Kadin</option>
                </select>
            </form>
            <br />
            <div>
                <span>
                    {name} {surname} bir {cinsiyyet}-dir
                </span>
            </div>
        </div>
    );
}

export default Form;
