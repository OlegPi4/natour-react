import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";

const Layout = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
