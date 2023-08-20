// import React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Divider from  '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import logo from '../assets/me.png'
// import Typography from '@mui/material/Typography'
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';
// import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
// import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
// import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
// import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
// import AddIcon from '@mui/icons-material/Add';
// import PreviewIcon from '@mui/icons-material/Preview';
// import ChevronRight from "@mui/icons-material/ChevronRight";
// import ChevronLeft from '@mui/icons-material/ChevronLeft';
// // import Dashboard from './Dashboard'
// import { Link } from 'react-router-dom'


// const drawerWidth = 240;

//  function Sidebar() {
//   const [selected, setSelected] = React.useState({});
//   const [user, setUser] = React.useState(false);
//   const [orphan, setOrphan] = React.useState(false);
//   const [sponsor, setSponsor] = React.useState(false);
//   const [donor, setDonor] = React.useState(false);
//   const [giftsent, setGiftsent] = React.useState(false);
//   const [fundraising, setFundraising] = React.useState(false);
//   const [feedback, setFeedback] = React.useState(false);
//   const [Receipt, setReceipt] = React.useState(false);


 
//      const mainLogo = {
//           height:'80px',
//           width:'50px',
//           marginLeft: '20px'
//         }
//   return (
//     <>
//     {/* <Dashboard/> */}
//     <Box sx=''>
//       <CssBaseline />
//       <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {width: drawerWidth,  boxSizing: 'border-box', }, }} variant="permanent"   anchor="left" >
//         <Divider />
//         <img style={mainLogo}src = {logo} alt='main-logo' />  
//            <Typography className='name'>Shaw-life</Typography>
//        <List>
//         {[{ id: 0, name: "User" }].map((text, index) => (
//           <ListItemButton>
//           <ListItem 
//             key={text}
//             onClick={() => {
//               setUser(!user);
//             }}
//           >
//             <ListItemIcon onClick={() => {
//                return setSelected((prev) => text); }}>
//                <AccountCircleOutlinedIcon />
//             </ListItemIcon>

//             <ListItemText primary={text.name} />
//             {user ? <ChevronRight /> : <ChevronLeft />}
            
//           </ListItem>
//           </ListItemButton>
//         ))}

//         {user && (
//           <>
//              <Divider />
//           </>
//         )}
//       </List>
//         <Divider />
//         <List>
//           {[{ id: 1, name: "orphan" }].map((text, index) => (
//             <ListItemButton>
//             <ListItem 
//               key={text}
//               onClick={() => {
//                 setOrphan(!orphan);
//               }}
//             >
//               <ListItemIcon onClick={() => {
//                return setSelected((prev) => text); }}>
//                 <EscalatorWarningOutlinedIcon/>
//                </ListItemIcon>
  
//               <ListItemText primary={text.name} />
//               {selected.id && orphan ? <ChevronRight /> : <ChevronLeft />}
//             </ListItem>
//             </ListItemButton>
//           ))}
  
//           {orphan && (
//             <>
//             <List>
//                 <Divider />  
//                 <Link to={'addorphan'} style={{textDecoration:"none"}}>
//                 <ListItemButton>
//                 <ListItemIcon>
//                   <AddIcon/>
//                   {/* <AddOrphan/> */}
//                   <Typography>Add orphan</Typography>
//                   </ListItemIcon>
//                 </ListItemButton> 
//                 </Link>
//               </List>
//               <List>
//               <Link to={'vieworphan'} style={{textDecoration:"none" , textAlign:"center"}} >
            
//                 <Divider />  
//                 <ListItemButton>
//                 <ListItemIcon>
//                   <PreviewIcon/>
//                   {/* <ViewOrphan/> */}
//                   <Typography>View orphan</Typography>
//                   </ListItemIcon>
//                 </ListItemButton> 
//                 </Link>
//                </List>
//               </>
//           )}
//         </List>
//         <Divider />
//          <List>
//           {[{ id: 2, name: "sponsor" }].map((text, index) => (
//             <ListItemButton>
//            <ListItem 
//              key={text}
//              onClick={() => {
//                setSponsor(!sponsor);
//              }}
//            >
//              <ListItemIcon onClick={() => {
//                return setSelected((prev) => text); }}>
//               < AccountBalanceOutlinedIcon />
//              </ListItemIcon>
 
//              <ListItemText primary={text.name} />
//              {selected.id && sponsor ? <ChevronRight /> : <ChevronLeft />}
//            </ListItem>
//            </ListItemButton>
//          ))}
 
//          {sponsor && (
//             <>
//             <List>
//               <Link to={'sponsor'} style={{textDecoration:"none", textAlign:"center"}}>
            
//                 <Divider />  
//                 <ListItemButton>
//                 <ListItemIcon>
//                   <AddIcon/>
//                   {/* <Sponsor/> */}
//                   <Typography>Add sponsor</Typography>
//                   </ListItemIcon>
//                 </ListItemButton> 
//                 </Link>
//               </List>
//               <List>
//               <Link to={'viewsponsor'} style={{textDecoration:"none" , textAlign:"center"}}  >
            
//                 <Divider />  
//                 <ListItemButton>
//                 <ListItemIcon>
//                   <PreviewIcon/>
//                   {/* <ViewSponsor/> */}
//                   <Typography>View sponsor</Typography>
//                   </ListItemIcon>
//                 </ListItemButton> 
//                 </Link>
//                </List>
//            </>
//          )}
//        </List>
//        <Divider />
//        <List>
//         {[{ id: 3, name: "donor" }].map((text, index) => (
//           <ListItemButton>
//           <ListItem 
//             key={text}
//             onClick={() => {
//               setDonor(!donor);
//             }}
//           >
//             <ListItemIcon onClick={() => {
//                return setSelected((prev) => text); }}>
//              < CurrencyExchangeOutlinedIcon />
//             </ListItemIcon>

//             <ListItemText primary={text.name} />
//             {selected.id && donor ? <ChevronRight /> : <ChevronLeft />}
//           </ListItem>
//           </ListItemButton>
//         ))}

//         {donor && (
//             <>
//              <List>
//               <Link to={'adddonor'} style={{textDecoration:"none", textAlign:"center"}}>
           
//                 <Divider />  
//                 <ListItemButton>
//                 <ListItemIcon>
//                   <AddIcon/>
//                   <Typography>Add donor</Typography>
//                   </ListItemIcon>
//                 </ListItemButton> 
//                 </Link>
//               </List>
//               <List>
//               <Link to={'viewdonor'} style={{textDecoration:"none" , textAlign:"center"}}>
             
//                 <Divider />  
//                 <ListItemButton>
//                 <ListItemIcon>
//                   <PreviewIcon/>
//                   <Typography>View donor</Typography>
//                   </ListItemIcon>
//                 </ListItemButton> 
//                 </Link>
//                </List>
//            </>
//         )}
//       </List>
//       <Divider />
//       <List>
//       {[{ id: 4, name: "giftsent" }].map((text, index) => (
//         <ListItemButton>
//         <ListItem 
//           key={text}
//           onClick={() => {
//             setGiftsent(!giftsent);
//           }}
//         >
//           <ListItemIcon onClick={() => {
//                return setSelected((prev) => text); }}>
//            < CreditScoreOutlinedIcon />
//           </ListItemIcon>

//           <ListItemText primary={text.name} />
//           {selected.id && giftsent ? <ChevronRight /> : <ChevronLeft />}
//         </ListItem>
//         </ListItemButton>
//       ))}

//       {giftsent && (
//         <>
//         <List>
//           <Link to={'addgiftsent'} style={{textDecoration:"none", textAlign:"center"}}>
         
//             <Divider />  
//             <ListItemButton>
//             <ListItemIcon>
//               <AddIcon/>
//               <Typography>Add giftsent</Typography>
//               </ListItemIcon>
//             </ListItemButton> 
//             </Link>
//           </List>
//           <List>
//           <Link to={'viewgiftsent'} style={{textDecoration:"none" , textAlign:"center"}}  >
        
//             <Divider />  
//             <ListItemButton>
//             <ListItemIcon>
//               <PreviewIcon/>
//               <Typography>View giftsent</Typography>
//               </ListItemIcon>
//             </ListItemButton> 
//             </Link>
//            </List>
//        </>
//       )}
//     </List>
//     <Divider />
// <List>
// {[{ id: 5, name: "fundraising" }].map((text, index) => (
//   <ListItemButton>
//   <ListItem 
//     key={text}
//     onClick={() => {
//       setFundraising(!fundraising);
//     }}
//   >
//     <ListItemIcon onClick={() => {
//      return setSelected((prev) => text); }}>
//      < SourceOutlinedIcon />
//     </ListItemIcon>

//     <ListItemText primary={text.name} />
//     {selected.id && fundraising ? <ChevronRight /> : <ChevronLeft />}
//   </ListItem>
//   </ListItemButton>
// ))}

// {fundraising && (
//    <>
//    <List>
//      <Link to={'fundraising'} style={{textDecoration:"none", textAlign:"center"}}>
  
//        <Divider />  
//        <ListItemButton>
//        <ListItemIcon>
//          <AddIcon/>
//          <Typography>Add fund-scheme</Typography>
//          </ListItemIcon>
//        </ListItemButton> 
//        </Link>
//      </List>
//      <List>
//      <Link to={'viewfundraising'} style={{textDecoration:"none" , textAlign:"center"}}>
   
//        <Divider />  
//        <ListItemButton>
//        <ListItemIcon>
//          <PreviewIcon/>
//          <Typography>View fund-scheme</Typography>
//          </ListItemIcon>
//        </ListItemButton> 
//        </Link>
//       </List>
//   </>
// )}
// </List>
// <Divider />
// <List>
//       {[{ id: 6, name: "feedback" }].map((text, index) => (
//         <ListItemButton>
//         <ListItem 
//           key={text}
//           onClick={() => {
//             setFeedback(!feedback);
//           }}
//         >
//           <ListItemIcon onClick={() => {
//                return setSelected((prev) => text); }}>
//              <ContactPhoneIcon/>
//           </ListItemIcon>

//           <ListItemText primary={text.name} />
//           {selected.id && feedback ? <ChevronRight /> : <ChevronLeft />}
//         </ListItem>
//         </ListItemButton>
//       ))}

//       {feedback && (
//          <>
//          <List>
//            <Link to={'addfeedback'} style={{textDecoration:"none", textAlign:"center"}}>
        
//              <Divider />  
//              <ListItemButton>
//              <ListItemIcon>
//                <AddIcon/>
//                <Typography>send feedback</Typography>
//                </ListItemIcon>
//              </ListItemButton> 
//              </Link>
//            </List>
//            <List>
//            <Link to={'viewfeedback'} style={{textDecoration:"none" , textAlign:"center"}}>
        
//              <Divider />  
//              <ListItemButton>
//              <ListItemIcon>
//                <PreviewIcon/>
//                <Typography>View feedback</Typography>
//                </ListItemIcon>
//              </ListItemButton> 
//              </Link>
//             </List>
//         </>
//       )}
//     </List>
//     <Divider />
// <List>
// {[{ id: 7, name: "receipt" }].map((text, index) => (
//   <ListItemButton>
//   <ListItem 
//     key={text}
//     onClick={() => {
//       setReceipt(!Receipt);
//     }}
//   >
//     <ListItemIcon onClick={() => {
//                return setSelected((prev) => text); }}>
//      < ReceiptOutlinedIcon />
//     </ListItemIcon>

//     <ListItemText primary={text.name} />
//     {selected.id && Receipt ? <ChevronRight /> : <ChevronLeft />}
//   </ListItem>
//   </ListItemButton>
// ))}

// {Receipt && (
//    <>
//    <List>
//      <Link to={'expenses'} style={{textDecoration:"none", textAlign:"center"}}>
   
//        <Divider />  
//        <ListItemButton>
//        <ListItemIcon>
//          <AddIcon/>
//          <Typography>expenses</Typography>
//          </ListItemIcon>
//        </ListItemButton> 
//        </Link>
//      </List>
//      <List>
//      <Link to={'viewexpenses'} style={{textDecoration:"none" , textAlign:"center"}} >
   
//        <Divider />  
//        <ListItemButton>
//        <ListItemIcon>
//          <PreviewIcon/>
//          <Typography>View expenses</Typography>
//          </ListItemIcon>
//        </ListItemButton> 
//        </Link>
//       </List>
//   </>
// )}
// </List>
//  </Drawer>
//  </Box>
// </>

//   );
// }

// export default Sidebar;



 

 

 

//   const handleLogout = () => {
//     // Add your logout logic here
//     handleMenuClose();
//   };

 
/* <CssBaseline/>
<div className={Header}>
  <nav className='container'>
   <Header>
      <Typography>
       Orphanage Management system
      </Typography>
      <Tooltip title='logout'>
      <Button>
      <LogoutIcon/>
     </Button>
    </Tooltip>
   </Header>
   </nav>
//   </div> */
   
  
// const Header = styled.div`
//    display:flex;
//    align-items: center;
//    justify-content:space-around;
//    padding-top:40px;
