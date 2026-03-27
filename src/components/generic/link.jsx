



export function Link({ classes, url, children }) {
  return (
    <a
      ref={url}
      className={`rounded-xl flex items-center justify-center font-bold ${classes}`}
    >
      {children}
    </a>
  );
}