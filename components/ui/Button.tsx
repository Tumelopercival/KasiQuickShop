interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={
        variant === "primary"
          ? "bg-yellow-400 text-black font-bold rounded-xl px-8 py-4 hover:bg-yellow-300 transition-all duration-300 w-full sm:w-auto"
          : "border border-white rounded-xl px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
      }
    >
      {children}
    </button>
  );
}