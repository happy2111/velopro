import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Products from "./components/Products";  // Теперь он всегда в `Layout`
import Subscribe from "./components/Subscribe";
import TopSale from "./components/TopSale";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Products />  {/* Теперь список велосипедов всегда показывается на главной */}
      <Subscribe />
      <TopSale />
      <Footer />
      <Outlet /> {/* Здесь будут рендериться другие страницы (например, BikeDetails) */}
    </>
  );
}

export default Layout;
