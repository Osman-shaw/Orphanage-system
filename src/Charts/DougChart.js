import { Doughnut } from "react-chartjs-2"
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';

// import PersonIcon from '@mui/icons-material/Person';

import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";


import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DougChart = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
labels: ['Orphan', 'Expenses', 'feedback']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Expenses',
      value: 63,
      icon: EscalatorWarningOutlinedIcon,
      color: '#3F51B5'
    },
    {
      title: 'Orphan',
      value: 15,
      icon: AccountBalanceOutlinedIcon,
      color: '#E53935'
    },
    {
      title: 'Donor',
      value: 23,
      icon: CurrencyExchangeOutlinedIcon ,
      color: '#FB8C00'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Orphanage mananagement system" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
           </Box>
           </CardContent>
        </Card>

    );
    };


    export default DougChart;