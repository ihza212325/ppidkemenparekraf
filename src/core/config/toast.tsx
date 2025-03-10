import { Info, X } from "lucide-react";
import { toast, ToastContentProps } from "react-toastify";

export function Toast1({
  desc,
  type,
}: {
  desc: string;
  type: "success" | "warning" | "danger";
}) {
  let obj = {
    success: "#00B844",
    warning: "#FFA500",
    danger: "#FF0000",
  };
  function OsxLike({ closeToast }: ToastContentProps) {
    return (
      <div className="">
        <button
          className="rounded-full absolute top-[-8px] left-[-6px] opacity-0 group-hover:opacity-100 transition-opacity  shadow-inner shadow-zinc-400 bg-zinc-700/70  size-5 grid place-items-center border border-zinc-400"
          onClick={closeToast}
        >
          <X className="text-neutralWhite" size={8} />
        </button>
        <div className="flex flex-row gap-6">
          <Info className="text-neutralWhite" />
          <p>{desc}</p>
        </div>
      </div>
    );
  }
  return toast(OsxLike, {
    style: { backgroundColor: obj[type] },
    className: `backdrop-blur-lg shadow-inner shadow-zinc-600 border border-neutralContentBackground/20 rounded-2xl text-white overflow-visible group`,
    closeButton: false,
    hideProgressBar: true,
    autoClose: 500,
  });
}
