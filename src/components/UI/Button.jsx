function Button({ className, text, children, onClick }) {
  return (
    <button
      className={`${className} button-text flex items-center gap-2`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
