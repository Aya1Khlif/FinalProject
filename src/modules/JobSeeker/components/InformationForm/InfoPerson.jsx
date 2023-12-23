import "./InformationForm.css";
const InfoPerson = ({ name, edit, isUpdated, fun, title, type }) => {
  return (
    <div className="rn-info-person">
      {isUpdated ? (
        <div className="rn-enter-info">
          <label>{title}</label>
          {edit ? (
            <input type={type} value={name} onChange={fun} />
          ) : (
            isUpdated && <p>{name}</p>
          )}
        </div>
      ) : (
        <div className="rn-enter-info">
          <label>{title}</label>
          <p> {name}</p>
        </div>
      )}
    </div>
  );
};

export default InfoPerson;
