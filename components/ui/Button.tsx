interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-yellow-400 text-black font-bold rounded-xl px-8 py-4 hover:bg-yellow-300 transition-all duration-300 w-full sm:w-auto",

    secondary:
      "bg-zinc-800 text-white font-bold rounded-xl px-8 py-4 hover:bg-zinc-700 transition-all duration-300 w-full sm:w-auto",

    outline:
      "border border-white text-white font-bold rounded-xl px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto",
  };

  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}