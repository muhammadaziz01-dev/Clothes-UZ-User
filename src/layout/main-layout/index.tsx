import { Outlet } from "react-router-dom";
import "./style.scss";

function index() {
  return (
    <>
      <main>
        <div className="orginal-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default index;
