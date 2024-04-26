import { Outlet } from "react-router-dom";
import Navbar from "../Component/Header/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="lg:min-h-[calc(100vh-345px)] md:lg:min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
