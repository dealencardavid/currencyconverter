function Card({ icon, title, children }) {
  return (
    <div className="bg-white max-w-xs rounded-xl shadow-lg px-3 py-6 flex flex-col gap-4 hover:-translate-y-2 hover:shadow-xl hover:outline  hover:outline-mainPurple transition-all ease-in-out duration-200 xl:flex-1">
      <span className="text-4xl text-mainPurple bg-lightGreyPurple w-fit p-2 rounded-full">
        {icon}
      </span>
      <div className="flex flex-col gap-3 w-60">
        <p className=" text-mediumPurple font-medium text-xl">{title}</p>
        <p className="text-darkPurple text-base font-thin leading-5">
          {children}
        </p>
      </div>
    </div>
  );
}

export default Card;
