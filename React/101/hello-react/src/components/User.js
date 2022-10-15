function User({ data }) {
    console.log(data);
    return (
        <div>
            User
            <div>Isim:{data.name}</div>
            <div>Soyisim:{data.surname}</div>
            <div>Şehir:{data.city}</div>
            <div>Yaş:{data.age}</div>
            <hr />
        </div>
    );
}

export default User;
