
function Button({ onClick=false, text, type, style }) {
  return onClick ? (
    <button onClick={onClick} type={type} className={`m-1 btn ${style}`}>
      {text}
    </button>
  ) : (
    <button type={type} className={`btn ${style}`}>
      {text}
    </button>
  );
}

export default Button;