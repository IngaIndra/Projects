export const ButtonLink = ({ children, ...otherProps }) => {
  return (
    <span
      {...otherProps}
      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      {children}
    </span>
  );
};
