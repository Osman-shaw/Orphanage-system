import React,{useState} from 'react';
import Card from "../Components/Card";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DougChart from "../Charts/DougChart"
import LineChart from "../Charts/LineChart"

function Dashboard () {

  const [eventHeader, setEventHeader] =  React.useState([
    {
      id: 1,
      text: "sad",
      date: "2023/08/18",
    },
    {
      id: 2,
      text: "happy",
      date: "2022/07/28",
    },
    {
      id: 3,
      text: "makeup",
      date: "2020/11/4",
    },

  ]);


  const rows = eventHeader.map(({ id, text, date }) => {

    return { id, text, date };

  });

  return (
      <div className='main__container'>
      <Paper className='main__paper' elevation={3}>
      <div className='main__container_card'>

        <Card
         count=" 20"
         title="Orphans"
         Icon={< EscalatorWarningOutlinedIcon/>}
         cn=""
        
        />

        <Card
           count="10"
           title="  Donors"
           Icon={< AccountBalanceOutlinedIcon/>}
           cn=""
          
        
        />

        <Card
           count="5"
           title="sponsors"
           Icon={< CurrencyExchangeOutlinedIcon/>}
           cn="" 
        
        />

         <Card
            count="30"
            title="expenses"
            Icon={< ReceiptOutlinedIcon />}
            cn=""
         
         />
      </div>
     </Paper>
    <Container>
    <div className='Line__chart'>
    <LineChart sx={{ height: '50%' }} className="root-chart"/>
    </div>
    <div className="dough__chart">
    <DougChart sx={{ height: '50%' }} className="root-chart"/>
    </div>
    </Container>
    </div>
      
  );
}

export default Dashboard;
 


