import PropTypes from "prop-types";
function User({ title, name, surname, age, city }) {
    return (
        <div>
            <strong>{title}</strong>
            <div>Isim:{name}</div>
            <div>Soyisim:{surname}</div>
            <div>Şehir:{city}</div>
            <div>Yaş:{age}</div>
            <hr />
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    title: PropTypes.string,
};

User.defaultProps = {
    title: "Kişi",
};

export default User;
