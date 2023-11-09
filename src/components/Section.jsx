function Section({ children, bgColor, id }) {
  return (
    <section
      className={`${bgColor} flex flex-col items-center py-24 gap-8 sm:gap-12 md:gap-16`}
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;
