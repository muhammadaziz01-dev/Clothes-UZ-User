import { Outlet } from "react-router-dom"
import "./style.scss"

function index() {
  return <>
  <main>
    <Outlet />
  </main>
  </>
}

export default index