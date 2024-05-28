import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from "react-router-dom";
import {getCookies , removeCookies} from"@coocse"

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userId = getCookies("user_id") || "";
  const navigate = useNavigate();

  // my code <---------------------------
 const logout = () => {
    removeCookies("access_token")
    removeCookies("refresh_token")
    removeCookies("user_id")
    navigate("/signin")
    handleClose()

 };

 const loginIn = () => {
    navigate("/signin")
    handleClose()
 };

 const loginUp = () => {
    navigate("/signup")
    handleClose()
 };

  //------------------------------------

  return (
    <div>

       <button 
       id="fade-button"
       aria-controls={open ? 'fade-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       onClick={handleClick}
       className='text-[18px]  text-slate-400 py-[10px] flex items-center gap-1 px-2 hover:text-slate-50 hover:bg-zinc-400  duration-500 rounded-md' 
       ><PersonIcon /> Kirish</button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
            userId ? 
            <div>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </div>
            : <div>
                <MenuItem onClick={loginIn}>Login In</MenuItem>
                <MenuItem onClick={loginUp}>Login Up</MenuItem>
            </div>
        }
      </Menu>
    </div>
  );
}
