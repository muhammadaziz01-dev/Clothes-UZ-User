import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

import "./style.scss";
import {DeshbardMenu} from "@ui"
import Logo from "../../assets/imgs/logo.png"; //4060844f2c8a41669a1da3764a4aed2f.png
const index = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <div className="orginal-container">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4 ">
              <img
               onClick={()=>{navigate("/")}}
                src={Logo}
                alt="Logo"
                className="h-[70px] w-[200px] object-cover object-center"
              />
              {/* <button className="text-[18px] hover:shadow-md duration-200 active:shadow-none  text-slate-400 py-[10px] px-3 border rounded-md ">
                <MenuIcon /> <span>Katalog</span>
              </button> */}
              <div className=" relative w-[500px]  rounded-md h-[48px]">
                <input
                  type="text"
                  className="w-full h-full rounded-md bg-transparent  outline-none pl-3  pr-14 text-[16px] text-slate-500 border"
                  placeholder="Mahsulotlar izlash"
                />
                <button className=" absolute right-0 top-0 text-slate-100 rounded-r-md py-[11px] px-3 bg-gray-500">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-5">
            <DeshbardMenu /> 
            <button onClick={()=>{navigate("/like")}} className='text-[18px]  text-slate-400 py-[10px]  flex items-center gap-1 px-2 hover:text-slate-50 hover:bg-zinc-400 duration-500 rounded-md  '><FavoriteBorderIcon /> Saralanganlar</button>
            <button className='text-[18px]  text-slate-400 py-[10px] flex items-center gap-1 px-2 hover:text-slate-50 hover:bg-zinc-400 duration-500 rounded-md   '><ShoppingCartIcon  /> Savat</button>
            </div>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default index;
