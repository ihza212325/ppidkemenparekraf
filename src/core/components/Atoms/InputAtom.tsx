import { ReactNode } from "react";

function InputAtom({
  value,
  type,
  name,
  disabled = false,
  title,
  onChangeText,
  leftIcon,
}: {
  value: string | number | readonly string[] | undefined;
  type: React.HTMLInputTypeAttribute;
  name: string;
  title?: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  onChangeText: ({ name, value }: any) => void;
}) {
  return (
    <section className="font-primary bg-textPrimary  space-y-2 w-80">
      {title && <h1 className="capitalize text-neutralWhite">{title}</h1>}
      <div className="border rounded-md flex flex-row  bg-neutralWhite h-auto items-center">
        {leftIcon && <div className="mx-2">{leftIcon}</div>}
        <input
          value={value}
          name={name}
          disabled={disabled}
          type={type}
          placeholder={"type" + " " + name}
          onChange={(e) => onChangeText({ name: name, value: e.target.value })}
          className="w-full rounded-lg px-4 py-2  bg-neutralWhite  placeholder-grayBody text-neutralBlack focus:border-0"
        />
      </div>
    </section>
  );
}

export default InputAtom;
