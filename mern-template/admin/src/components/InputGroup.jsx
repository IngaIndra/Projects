import { nanoid } from "nanoid";

export const InputGroup = ({
  label = "",
  type = "text",
  placeholder = "",
  required = false,
  value = "",
  onChange = (e) => {},
}) => {
  const id = nanoid();
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        defaultValue={value}
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
