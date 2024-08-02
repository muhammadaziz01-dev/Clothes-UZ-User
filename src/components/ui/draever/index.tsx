import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

import {getCookies , removeCookies} from "@coocse"

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  ///  moy function ------------------
  const logout = () => {
    removeCookies("access_token")
    removeCookies("refresh_token")
    removeCookies("user_id")
    navigate("/signin")

 };
 //------------------------------------


  const DrawerList = (
    <>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Asosiy" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <ListItem disablePadding
          onClick={() => {
            navigate("/cart");
          }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Savat" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("/like");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Saralanganlar" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {
            getCookies("user_id") ? 
            <ListItem  disablePadding  onClick={()=>{logout()}}>
              <ListItemButton>
                 <ListItemIcon>
                   <LogoutIcon  />
                 </ListItemIcon>
                 <ListItemText primary="Chiqish" />
               </ListItemButton>
            </ListItem> : 
            <ListItem  disablePadding  onClick={()=>{navigate("/signin")}}>
            <ListItemButton>
               <ListItemIcon>
                 <PersonIcon  />
               </ListItemIcon>
               <ListItemText primary="Kirish" />
             </ListItemButton>
          </ListItem>
          }
        </List>
      </Box>
    </>
  );

  return (
    <div>
      <IconButton aria-label="add to favorites" onClick={toggleDrawer(true)}>
        <FormatListBulletedIcon
          fontSize="medium"
          sx={{ color: "rgb(148 163 184)", width: 32, height: 32 }}
        />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
