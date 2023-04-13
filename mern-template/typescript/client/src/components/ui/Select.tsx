import { nanoid } from "nanoid";
import { ChangeEvent, FC } from "react";
import { twMerge } from "tailwind-merge";

interface SelectProps {
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  itemValue: string;
  itemLabel: string;
}

export const Select: FC<SelectProps> = ({
  value,
  onChange,
  className,
  items,
  itemLabel,
  itemValue,
}) => {
  const baseClass = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `;

  return (
    <select
      value={value}
      onChange={onChange}
      className={twMerge(baseClass, className)}
    >
      {items.map((item) => (
        <option key={nanoid()} value={item[itemValue]}>
          {item[itemLabel]}
        </option>
      ))}
    </select>
  );
};