import { Outlet, useLocation } from "react-router-dom";
import AboutSidebar from "@/components/sections/abouts/AboutSidebar";
import BannerWithBreadcrumbs from "@/components/sections/abouts/BannerWithBreadcrumbs";
import FooterTop from "@/components/footertop";

const AboutLayout = ({ sidebarLinks }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define breadcrumbs based on path
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/about/message", label: "Message" },
  ];

  // Define About Dropdown Links
  const aboutLinks = [
    { href: "/about/message", label: "Message" },
    { href: "/about/values", label: "Our Values" },
    { href: "/about/set-us-apart", label: "What Sets Us Apart" },
  ];

  // Determine title based on the current path
  const title = currentPath.includes("/values")
    ? "Our Values"
    : currentPath.includes("/set-us-apart")
    ? "What Sets Us Apart"
    : "Message";

  return (
    <div>
      {/* Banner with Breadcrumbs */}
      <BannerWithBreadcrumbs
        title={title}
        breadcrumbs={breadcrumbs}
        aboutLinks={aboutLinks}
      />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
        {/* Content Area for Subpages */}
        <div className="col-span-1 lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <Outlet />
        </div>

        {/* Sidebar for About Pages */}
        <AboutSidebar sidebarLinks={sidebarLinks} />
      </div>
      {/* Footer Top Section */}
      <FooterTop />
    </div>
  );
};

export default AboutLayout;
