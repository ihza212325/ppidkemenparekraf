function ButtonFilter({
  onClick,
  buttonType,
  title,
}: {
  onClick: () => void;
  buttonType: "active" | "inactive";
  title: String;
}) {
  return (
    <button
      onClick={onClick}
      className={`py-2 my-2 px-2 flex flex-row w-full rounded-md justify-center ${
        buttonType === "active" ? "bg-btnNav " : "text-grayBody"
      } `}
    >
      <p
        style={{ textTransform: "capitalize" }}
        className={`font-primary text-sm text-nowrap ${
          buttonType === "active" ? "text-neutralWhite " : "text-grayDisable"
        }  capitalize`}
      >
        {title}
      </p>
    </button>
  );
}

export default ButtonFilter;
