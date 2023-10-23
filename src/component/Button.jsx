const Button = ({ children, custom, handleClick, type }) => {
  return (
    <button
      type={type || "button"}
      className={`${custom} px-4  bg-Secondary-200 sm:px-6 py-2 shadow-sm capitalize transition-all duration-200 rounded-sm ease-in-out`}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export default Button;
