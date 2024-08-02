import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import {SignIn , SignUp , Error , Home , SingleProduct , Like , CategoryPage , Cart} from "@pages"
import {MainLayout} from "@layut"

const index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route path="" element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/category/:name" element={<CategoryPage />} />
                <Route path="/like" element={<Like />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
            </Route>
            <Route path="*" element={<Error />} />
            
          </Route>
        )
      );
      return <RouterProvider router={router} />;
}

export default index;