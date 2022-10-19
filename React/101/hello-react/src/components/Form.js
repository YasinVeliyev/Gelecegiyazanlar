import React, { useState, useEffect } from "react";

function Form() {
    const [name, setName] = useState("Ali");
    const [surname, setSurname] = useState("Mehmet");
    const [gender, setCinsiyyet] = useState("Erkek");
    const [form, setForm] = useState({ name: "", surname: "", gender: "" });
    const handleChange = (event) => {
        console.log(event);
        setForm({
            ...form,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    
    return (
        <div>
            <form>
                <label htmlFor="name">Isim</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Isim"
                    value={form.name}
                    onChange={handleChange}
                />

                <label htmlFor="surname">Isim</label>
                <input
                    type="text"
                    name="surname"
                    placeholder="Soyad"
                    value={form.surname}
                    onChange={handleChange}
                />
                <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                >
                    <option value="Erkek">Erkek</option>
                    <option value="Kadin">Kadin</option>
                </select>
            </form>
            <br />
            <div>
                <table border="1" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Cinsiyyet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{form.name}</td>
                            <td>{form.surname}</td>
                            <td>{form.gender}</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    );
}

export default Form;
