

// StyledButton.jsx
export function StyledButton({ classes, onClickEvent, children }) {
  return (
    <button
      onClick={onClickEvent}
      className={`rounded-xl flex items-center justify-center font-bold ${classes}`}
    >
      {children}
    </button>
  );
}
