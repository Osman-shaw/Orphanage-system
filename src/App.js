import React from "react";
import "./App.css";
import{
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// the mistake i made was i could not import routes,routes,...
//  from react dom
// import Dashboard from "../src/Components/Dashboard";
// import AddDonor from "../src/pages/Donors/AddDonor";
// import ViewDonor from "../src/pages/Donors/ViewDonor";
// import AddOrphan from "../src/pages/OrphanCate/AddOrphan";
// import ViewOrphan from "../src/pages/OrphanCate/ViewOrphan";
// import Sponsor from "../src/pages/SponsorCat/Sponsor";
// import ViewSponsor from "../src/pages/SponsorCat/ViewSponsor";
// import AddGiftsent from "../src/pages/GiftSent/AddGiftSent";
// import ViewGiftSent from "../src/pages/GiftSent/ViewGiftSent";
// import AddFeedback from "../src/pages/Feed/AddFeedback";
// import ViewFeedback from "../src/pages/Feed/ViewFeedback";
// import Fundraising from "../src/pages/Report/Fundraising";
// import ViewFundraising from "../src/pages/Report/ViewFundraising";
// import Expenses from "../src/pages/Receipt/Expenses";
// import ViewExpenses from "../src/pages/Receipt/ViewExpenses";
// import Sidebar from "../src/Components/Sidebar";
//  i needed to import both sidebar and routes componet

import routes from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}
 
export default App;
