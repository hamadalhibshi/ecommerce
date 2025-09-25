import Footer from "./Footer";

const Screen = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-base-200 pt-15 ${className}`}
    >
      <div className="flex-1 px-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Screen;
