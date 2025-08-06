import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout.jsx";
import Home from "./Components/Home.jsx"
import MenuPage from "./Pages/MenuPage.jsx";
import OffersPage from "./Pages/OffersPage.jsx";
import DemoMenu from "./Pages/DemoMenu.jsx";
import AuthCallbackPage from "./Pages/AuthCallbackPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/auth-callback" element={<Layout><AuthCallbackPage/></Layout>} />
        <Route path="/menu" element={<Layout><MenuPage/></Layout>} />
        <Route path="/offers" element={<Layout><OffersPage/></Layout>} />
        <Route path="/dmenu" element={<Layout><DemoMenu/></Layout>} />
    </Routes>
  );
}

export default AppRoutes;