import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./style.scss";

function index() {
  return (
    <>
      <main>
        <ToastContainer />
        <div className="orginal-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default index;
