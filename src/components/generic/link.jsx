



export function Link({ classes, url, children, pdf }) {
  return (
    <a
      href={url}
      className={`rounded-xl flex items-center justify-center font-bold ${classes}`}
      download={pdf}
    >
      {children}
    </a>
  );
}