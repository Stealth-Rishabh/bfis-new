/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./route/router";
import bg_img from "@/assets/images/webp/bg_img.webp";
import { useState } from "react";
import ContactFormModal from "./components/ContactFormModal";

// Layout Wrapper for Conditional Header and Footer
function Layout({ children }) {
  const location = useLocation();

  // Define paths where Header/Footer should NOT appear
  const hideHeaderFooterPaths = ["/admin", "/login"];

  // Check if the current path matches any of the paths to hide
  const shouldHideHeaderFooter = hideHeaderFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main>{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  console.log("handleCloseModal:", handleCloseModal);

  return (
    <HelmetProvider>
      <div
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <RouterProvider router={router} />
        <button onClick={handleOpenModal}>Contact Us</button>
        {isModalVisible && (
          <ContactFormModal
            isVisible={isModalVisible}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </HelmetProvider>
  );
};

export default App;
