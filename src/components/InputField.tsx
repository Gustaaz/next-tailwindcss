interface InputProps {
  label: string;
  inputName: string;
  type: "text" | "password" | "email";
  placeholder?: string;
  errors?: any;
  register?: any;
}
function InputField({
  label,
  inputName,
  type,
  placeholder,
  errors,
  register,
}: InputProps) {
  return (
    <>
      <div className="flex flex-col border-b border-blue-700 py-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={inputName}
        >
          {label}
        </label>
        <input
          name={inputName}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type={type}
          placeholder={placeholder}
          {...register}
        />
      </div>
      <div>
        {errors && (
          <p className="text-red-500 text-xs italic">{errors.message}</p>
        )}
      </div>
    </>
  );
}

export default InputField;
