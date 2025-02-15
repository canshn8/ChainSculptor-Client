const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`py-2 px-4 rounded-lg ${className} hover:bg-blue-600 focus:outline-none`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export { Button };
  