function BtnCta({ type, href, children }) {
  let btnFormat;
  if (type === "primary")
    btnFormat = "bg-mainPurple text-white hover:bg-mediumPurple";
  if (type === "secondary")
    btnFormat =
      "bg-greyPurple text-mediumPurple hover:bg-white hover:-m-[1px] hover:border border-greyPurple";

  return (
    <a
      className={`${btnFormat} font-rubik text-sm px-4 py-2 rounded-lg transition duration-300 ease-in-out motion-safe md:text-base`}
      href={href}
    >
      {children}
    </a>
  );
}

export default BtnCta;
