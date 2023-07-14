import React from 'react';
import './App.css';
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Dashboard from '../src/Components/Dashboard'
import AddDonor from '../src/pages/Donors/AddDonor'
import ViewDonor from '../src/pages/Donors/ViewDonor';
import AddOrphan from '../src/pages/OrphanCate/AddOrphan';
import ViewOrphan from '../src/pages/OrphanCate/ViewOrphan';
import Sponsor from    '../src/pages/SponsorCat/Sponsor'
import ViewSponsor from '../src/pages/SponsorCat/ViewSponsor'
import AddGiftsent from '../src/pages/GiftSent/AddGiftSent'
import ViewGiftSent from '../src/pages/GiftSent/ViewGiftSent';
import AddFeedback from '../src/pages/Feed/AddFeedback';
import ViewFeedback from '../src/pages/Feed/ViewFeedback';
import Fundraising from '../src/pages/Report/Fundraising';
import ViewFundraising from '../src/pages/Report/ViewFundraising';
import Expenses from '../src/pages/Receipt/Expenses';
import ViewExpenses from '../src/pages/Receipt/ViewExpenses'
import Sidebar from '../src/Components/Sidebar'


 const routes = createBrowserRouter([{
  path: "/",
  element: <Sidebar/>,
  children: [
    {
      path: "/dashboard", 
      element: <Dashboard/>
    },
    {
      path: "/addorphan",
      element: <AddOrphan/>
    }
  ]
}])


export default routes


// function App() {
//   return (
//     <>
//       <Sidebar/>
//       <Routes>
//       <Route path = "/"  element={ <Dashboard/>} />
//       <Route path = "addorphan"   element={<AddOrphan/>} />
//       <Route path = "vieworphan"  element={<ViewOrphan/>}/>
//       <Route path = "sponsor"   element={<Sponsor/>} />
//       <Route path = "viewsponsor"  element={<ViewSponsor/>} />
//       <Route path = "adddonor"  element={ <AddDonor />} />
//       <Route path = "viewdonor"  element={<ViewDonor/>} />
//       <Route path = "addgiftsent"  element={<AddGiftsent/> } />
//       <Route path = "viewgiftsent"  element={<ViewGiftSent/>} />
//       <Route path = "fundraising"  element={ <Fundraising/>} />
//       <Route path = "viewfundraising" element={<ViewFundraising/> } />
//       <Route path = "addfeedback"  element={ <AddFeedback/>} />
//       <Route path = "viewfeedback"  element= {<ViewFeedback />} />
//       <Route path = "expenses"   element={< Expenses/> } />
//       <Route path = "viewexpenses"  element={<ViewExpenses/>} />
//      </Routes> 
//     </>
//   );
// }

// export default App;
