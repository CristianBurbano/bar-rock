import Header from "./header/header";
import Footer from "./footer/footer";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
