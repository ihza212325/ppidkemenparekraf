import { ReactNode } from "react";

function ButtonAtoms({
  onClick,
  buttonType,
  title,
  icon,
  className = "",
}: {
  onClick: () => void;
  buttonType: "blue" | "red" | "transparent";
  title: String;
  icon?: ReactNode;
  className?: string;
  withRadius?: {
    // borderRadius: number;
    borderColor: string;
    borderWidth: number;
  };
}) {
  let obj = {
    blue: "bg-secondary500",
    red: "bg-dangerText",
    transparent: "",
  };
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 flex flex-row gap-3 justify-center items-center ${obj[buttonType]} rounded-md ${className}`}
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

export default ButtonAtoms;
