export const Button = ({selected = false, children}) => {
    return (
        <button
            className={selected ? "button-selected" : ""}>{children}</button>
  );
};