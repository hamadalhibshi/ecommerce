import Footer from "./Footer";

const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-base-200 mt-10 px-10">
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Screen;
