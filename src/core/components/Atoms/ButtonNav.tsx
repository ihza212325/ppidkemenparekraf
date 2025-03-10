function ButtonNav({
  onClick,
  buttonType,
  title,
  icon,
}: {
  onClick: () => void;
  buttonType: "active" | "inactive";
  title: String;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-3 my-3 flex flex-row w-full gap-4 rounded-xl  ${
        buttonType === "active"
          ? "bg-btnNav text-neutralWhite"
          : "bg-bgBase text-neutralWhite"
      } `}
    >
      {icon}
      <p
        style={{ textTransform: "capitalize" }}
        className="font-primary text-base text-white capitalize"
      >
        {title}
      </p>
    </button>
  );
}

export default ButtonNav;
