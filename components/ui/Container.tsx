interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-[1600px]
        mx-auto
        px-5
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
}