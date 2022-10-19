import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
    useEffect(() => {
        console.log("Deyisiklik");
    });
    useEffect(() => {
        console.log("Component mount edildi");
    }, []);
    useEffect(() => {
        console.log("Count State deyisdi");
    }, [count]);

    useEffect(() => {
        console.log("Amount State deyisdi");
    }, [amount]);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + amount)}>Artır</button>
            <hr />
            <div>Artirma: +{amount}</div>
            <button onClick={() => setAmount(1)}>+1</button>
            <button onClick={() => setAmount(3)}>+3</button>
            <button onClick={() => setAmount(10)}>+10</button>
        </div>
    );
}

export default Counter;
