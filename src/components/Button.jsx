const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
};

export default Button;
