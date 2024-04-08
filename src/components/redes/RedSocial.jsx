const RedSocial = ({ href, children }) => {
  return (
    <>
      <a
        className="icono-red"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </>
  );
};

export default RedSocial;
