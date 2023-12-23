import "./ButtonLanguge.css";

const ButtonLanguge = () => {
  return (
    <div className="rn-group-languge">
      <button>
        <span className="rn-arabic-btn">AR</span>
        </button>
        <button>
        <span className="rn-english-btn">En</span>
        </button>
      {/* <button className="rn-english-btn">EN</button> */}
    </div>
  );
};

export default ButtonLanguge;
