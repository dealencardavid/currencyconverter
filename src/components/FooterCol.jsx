function FooterCol({ children, title }) {
  return (
    <div className="text-center w-2/3 ">
      <p className="text-base font-semibold text-darkPurple">{title}</p>
      <div className="text-sm font-thin">{children}</div>
    </div>
  );
}

export default FooterCol;
