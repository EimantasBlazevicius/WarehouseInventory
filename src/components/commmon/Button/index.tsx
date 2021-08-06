export interface ButtonProps {
  type: string;
  text: string;
}

function handleButtonClick(type: string) {
  alert(type);
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  const buttonClasses = "ms-1 btn btn-" + type;
  return (
    <button className={buttonClasses} onClick={() => handleButtonClick(type)}>
      {text}
    </button>
  );
};

export default Button;
