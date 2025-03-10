import { ReactNode, useEffect, useRef, useState } from "react";

const FilterDropdown = ({
  children,
  title,
  lefIcon,
  rightIcon,
  withChevron,
}: {
  children: ReactNode;
  title: string;
  lefIcon?: ReactNode;
  rightIcon?: ReactNode;
  withChevron?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropdownRef.current &&
        !dropdownRef?.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-nowrap items-center px-4 py-2 bg-neutralWhite rounded-lg shadow-md text-primary500 gap-2 flex-row"
      >
        {lefIcon}
        {title}
        {rightIcon}
        {withChevron && (
          <svg
            className={`ml-2 w-4 h-4 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </button>

      {/* Filter Panel */}
      {isOpen && (
        <div className="absolute mt-2 w-96 bg-neutralModalBackground text-white rounded-lg shadow-lg p-4 z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
