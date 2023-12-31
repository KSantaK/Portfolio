function Button({ onClick, children, className }) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
  
  export default Button;