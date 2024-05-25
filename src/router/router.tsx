import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import {SignIn , SignUp , Error , Home } from "@pages"
import {MainLayout} from "@layut"
// import {Asosiy , Buyurtmalar , SMSMarketing , Mijozlar , Xizmatlar ,Sozlamalar} from "@pages"

const index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route path="" element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Error />} />
            </Route>
            <Route path="*" element={<Error />} />
            
          </Route>
        )
      );
      return <RouterProvider router={router} />;
}

export default index;