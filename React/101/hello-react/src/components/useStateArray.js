import React, { useState } from "react";

function UseStateArray() {
    const [colors, setColors] = useState(["Kırmızı", "Yeşil", "Mavi"]);
    const handleClick = () => {
        setColors([...colors, "Gri"]);
    };
    return (
        <div>
            <h2>Renkler</h2>
            {colors.map((color, i) => {
                return <div key={i}>{color}</div>;
            })}

            <button onClick={handleClick}>Ekle</button>
        </div>
    );
}

export default UseStateArray;
