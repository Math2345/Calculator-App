import "./Button.css";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

const Button = ({ children, handleClick }) => {
  return (
    <div
      className={`button-wrapper ${!isOperator(children) && "operator"}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default Button;
