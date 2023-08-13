import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Components/Dashboard";
import AddOrphan from "../pages/OrphanCate/AddOrphan";
import ViewOrphan from '../pages/OrphanCate/ViewOrphan';
import AddDonor from "../pages/Donors/AddDonor";
import ViewDonor from '../pages/Donors/ViewDonor';
import Sponsor from "../pages/SponsorCat/Sponsor";
import ViewSponsor from '../pages/SponsorCat/ViewSponsor'
import AddGiftsent from '../pages/GiftSent/AddGiftSent'
import ViewGiftSent from '../pages/GiftSent/ViewGiftSent';
import AddFeedback from '../pages/Feed/AddFeedback';
import ViewFeedback from '../pages/Feed/ViewFeedback';
import Fundraising from '../pages/Report/Fundraising';
import ViewFundraising from '../pages/Report/ViewFundraising';
import Expenses from '../pages/Receipt/Expenses';
import ViewExpenses from '../pages/Receipt/ViewExpenses'
import AddUser from '../pages/Users/AddUser';
import ViewUser from '../pages/Users/ViewUser';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
     
      {
        path:"/adduser",
        element:< AddUser/>
      },

      {
        path:"/viewuser",
        element:<ViewUser/>
      },

      {
        path: "/addorphan",
        element: <AddOrphan />,
      },

      {
        path: "/vieworphan",
        element: <ViewOrphan/>
      },

      {
        path: "/sponsor",
        element: <Sponsor/>
      },

      {
        path: "/viewsponsor",
        element: <ViewSponsor/>
      },

      {
        path: "/donors",
        element: <AddDonor />,
      },

      {
        path: "/viewdonor",
        element: <ViewDonor/>
      },
    
  
      {
        path: "/addgiftsent",
        element: <AddGiftsent/>
      },
      {
        path: "/viewgiftsent",
        element: <ViewGiftSent/>
      },
      {
        path: "/addfeedback",
        element: <AddFeedback/>
      },
      {
        path: "/viewfeedback",
        element: <ViewFeedback/>
      },
      {
        path: "/fundraising",
        element: <Fundraising/>
      },
      {
        path: "/viewfundraising",
        element: <ViewFundraising/>
      },
      {
        path: "/expenses",
        element: <Expenses/>
      },
  
      {
        path: "/viewexpenses",
        element: <ViewExpenses/>
      }

    ],

    errorElement: <p> The page you requested was not found </p>,
  },
]);

export default routes;
