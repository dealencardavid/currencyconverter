function SectionHeading({ tag, title, position }) {
  return (
    <div
      className={`${position} flex flex-col gap-2 w-11/12 max-w-6xl  md:mx-auto`}
    >
      <p className="uppercase  text-mediumPurple font-semibold text-base md:text-xl">
        {tag}
      </p>
      <h2 className="font-rubik text-darkPurple text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
