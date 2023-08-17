import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../assets/me.png";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import  AddIcon from "@mui/icons-material/Add";
// import PreviewIcon from "@mui/icons-material/Preview";
// import ChevronRight from "@mui/icons-material/ChevronRi



import { Link, Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {

  const [openedMenus, setOpendedMenus] = useState([])

  const navigate = useNavigate()

  const isMenuOpened = (itemIndex) => {
return openedMenus.indexOf(itemIndex) !== -1
  }

  const onOpenMenu = (itemIndex) => {
    const isOpenedAlready = isMenuOpened(itemIndex)

    console.log(isOpenedAlready)

    if(isOpenedAlready) {
     return  setOpendedMenus(prev => {
      return prev.filter( i => i !== itemIndex)
     })
    }

    setOpendedMenus([...openedMenus, itemIndex])


  }

  

  const mainLogo = {
    height: "80px",
    width: "50px",
    marginLeft: "20px",
  };

  const menuItem = [
    {
      label: "User",
      icon: <AccountCircleOutlinedIcon />,
      children: [
        {
          label: "user",
          path: "/adduser",
          icon:<AddIcon/>,
        },
      ],
    },

    {
      label: "Orphan",
      icon:< EscalatorWarningOutlinedIcon/>,
       children: [
        {
          label: "Orphan",
          icon: <AddIcon/>,
          path: "/addorphan",
      
        },
      ],
    },
    {
      label: "Donor",
      icon:<AccountBalanceOutlinedIcon/>,
       children: [
        {
          label: "Donor",
          path:  "/adddonor",
          icon:<AddIcon/>,
        },
      ],
    },
    {
      label: "Sponsor",
      icon:< CurrencyExchangeOutlinedIcon/>,
       children: [
        {
          label: "Sponsor",
          path: "/sponsor",
          icon:<AddIcon/>,
        },
      ],
    },
    {
      label: "giftsent",
      icon:< CreditScoreOutlinedIcon />,
       children: [
        {
          label: "giftsent",
          path: "/addgiftsent",
          icon:<AddIcon/>,
        },
      ],
    },
    {
      label: "feedback",
      icon:<ContactPhoneIcon/>,
       children: [
        {
          label: "feedback",
          path: "/addfeedback",
          icon:<AddIcon/>,
        },
      ],
    },
    {
      label: "funding",
      icon:< SourceOutlinedIcon/>,
       children: [
        {
          label: "fund",
          path: "/fundraising",
          icon:<AddIcon/>,
        },
      ],
    },
    {
      label: "Receipt",
      icon:<ReceiptOutlinedIcon/>,
       path:"/receipts", 
    

    },
  ];

  return (
    <div>
      <Box>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "18%",
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <img style={mainLogo} src={logo} alt="main-logo" />
          <Typography className="name"> CSDF </Typography>
          <List>
            {menuItem.map((item, index) => {
              return (
                <>
                <ListItem key={index}   
                onClick={() => {
                  if(item.path){
                   return navigate(item.path)  // navigate to item.path
                  }
                    
                  onOpenMenu(index)
                   }}>
                  <ListItemButton>
                    <ListItemIcon 
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                   
                    
                  </ListItemButton>
                </ListItem>
                { isMenuOpened(index)  && 
                        item.children &&
                          item.children.map((child, _index) => {
                            return (
                              <Link to={child.path} key={_index} style={{textDecoration:"none"}}>
                                <ListItem>
                                   <ListItemButton>
                                     <ListItemIcon primary={child.icon}>
                                    <ListItemText primary={child.label} />
                                    </ListItemIcon>
                                  </ListItemButton>
                                </ListItem>
                              </Link>
                            );
                          })}
                </>
              );
            })}
          </List>
        </Drawer>
        <Outlet />
      </Box>
    </div>
  );
}

export default Sidebar;
