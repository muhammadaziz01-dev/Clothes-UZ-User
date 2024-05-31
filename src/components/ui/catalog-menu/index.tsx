import * as React from 'react';
// import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect , useState  } from 'react';
import { useNavigate } from 'react-router-dom';

import useCategoryStore from "@stor-category"

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate()
  const { getCategoryName, categoryName , } = useCategoryStore()
const [params ] = useState({page:1, limit:100})

  useEffect(()=>{
    getCategoryName(params)
  },[])

  const changeCategory = (e:any) => {
    // console.log(e.target.innerText);
    navigate(`/category/${e.target.innerText}`)
    handleClose()
  }


  return (
    <div>
      {/* <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <button 
       className='text-[18px]  text-slate-400 py-[6px] flex items-center gap-1 px-2 hover:text-slate-50 hover:bg-zinc-400 duration-500 rounded-md   '
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}> 
                 <MenuIcon fontSize="large" /> Katalog
        </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
            style: {
              width: '100vw',
            //   height: '100vh',
              marginTop: '52px',
              marginLeft: '0px',
              paddingTop : "20px",
              paddingBottom : "20px",
            },
          }}
      >
        <div className='grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-10'>{
           categoryName.length && categoryName?.map((el, index) => {
              return <div key={index} className=' flex items-center'>
                <MenuItem  onClick={(e)=>{changeCategory(e)}}>{el.category_name}</MenuItem>
              </div>
            })
  
        }
        </div>
      </Menu>
    </div>
  );
}
