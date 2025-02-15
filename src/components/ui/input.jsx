const Input = ({ type = "text", name, placeholder, value, onChange, ...props }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    );
  };
  
  export { Input };
  