const Textarea = ({ name, placeholder, value, onChange, rows = 4, ...props }) => {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="p-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    );
  };
  
  export { Textarea };
  