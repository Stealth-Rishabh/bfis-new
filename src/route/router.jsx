import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import ScrollToTop from "../components/ScrollToTop";
import ProgramDetail from "../components/ProgramDetail";
import ContactUs from "../pages/contact-us";
import Root from "../components/layout/root";
import HomeOne from "../pages/home-1";
import Admission from "../pages/admission";
import Academics from "../pages/academicspage";
import Glimpse from "../pages/glimpse";
import EventsGallery from "../pages/events";
import ProgramPage from "../pages/ProgramPage";
import PoliciesPage from "@/pages/policies";
import WorkWithUs from "@/pages/workWithUs";
import CBSEDisclosure from "@/pages/cbseDisclosure";
import Newsletter from "@/pages/newsletter";
import Uniform from "@/pages/uniform";
import BookList from "@/pages/bookList";
import SportsPage from "../pages/SportsPage";
import AboutLayout from "../components/sections/abouts/AboutLayout";
import AboutMessage from "../components/sections/abouts/AboutMessage";
import AboutValues from "../components/sections/abouts/AboutValues";
import AboutSetUsApart from "../components/sections/abouts/AboutSetUsApart";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import LoginComponent from "@/admin/LoginComponent";
import AdminPanel from "@/admin/AdminPanel";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";
import ThankYou from "../pages/thankyou";
import NewsCoverage from "../pages/NewsCoverage";
import NewsCoverageForm from "@/admin/NewsCoverageForm";

// Sidebar links for About section
const aboutSidebarLinks = [
  { href: "/about/message", label: "Message" },
  { href: "/about/values", label: "Our Values" },
  { href: "/about/set-us-apart", label: "What Sets Us Apart" },
];

// Subjects (Import from ProgramPage if required)
import { subjects } from "../pages/ProgramPage";

// Create base configuration for both routers
const routerConfig = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_relativeSplat: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
  },
};

// Create and export the router
export const router = createBrowserRouter(
  [
    // Admin routes (without Header/Footer)
    {
      path: "/login",
      element: (
        <>
          <ScrollToTop />
          <LoginComponent />
        </>
      ),
    },
    {
      path: "/admin",
      element:
        localStorage.getItem("isAuthenticated") === "true" ? (
          <>
            <ScrollToTop />
            <AdminPanel />
          </>
        ) : (
          <Navigate to="/login" replace />
        ),
      children: [
        {
          path: "news-coverage",
          element: (
            <>
              <Helmet>
                <title>Admin - News Coverage</title>
              </Helmet>
              <NewsCoverageForm />
            </>
          ),
        },
      ],
    },

    // Main website routes (with Header/Footer)
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        // Home Route
        {
          path: "/",
          element: (
            <>
              <Helmet>
                <title>Brookfield International School - New Chandigarh</title>
                <meta
                  name="description"
                  content="Brookfield International School (BFIS) is the top international school in Mohali, Kurali, and Chandigarh, offering excellent education and a nurturing environment."
                />
              </Helmet>
              <HomeOne />
            </>
          ),
        },
        {
          path: "/home",
          element: <HomeOne />,
        },

        // About Section with Layout and Sidebar
        {
          path: "/about",
          element: (
            <>
              <Helmet>
                <title>About Us | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Learn about BFIS's vision, mission, and our commitment to providing quality education in Chandigarh. Discover what makes us unique."
                />
              </Helmet>
              <AboutLayout sidebarLinks={aboutSidebarLinks} />
            </>
          ),
          children: [
            { path: "", element: <Navigate to="message" replace /> },
            {
              path: "message",
              element: (
                <>
                  <Helmet>
                    <title>Message from BFIS</title>
                    <meta
                      name="description"
                      content="Explore Brookfield International School in Kurali, a top international school in Mohali, Chandigarh, and Kharar. Discover excellence in education for your child."
                    />
                  </Helmet>
                  <AboutMessage />
                </>
              ),
            },
            {
              path: "values",
              element: (
                <>
                  <Helmet>
                    <title>Values at BFIS</title>
                    <meta
                      name="description"
                      content="Discover the core values of Brookfield School, the top international school in Mohali, Kurali, and Chandigarh, offering world-class education and holistic growth."
                    />
                  </Helmet>
                  <AboutValues />
                </>
              ),
            },
            {
              path: "set-us-apart",
              element: (
                <>
                  <Helmet>
                    <title>
                      BFIS Differentiators: Excellence in Education and
                      Innovation
                    </title>
                    <meta
                      name="description"
                      content="Discover what makes BFIS unique. From innovative teaching methods to exceptional academic programs, learn why we're a leader in education."
                    />
                  </Helmet>
                  <AboutSetUsApart />
                </>
              ),
            },
          ],
        },

        // Academics Page Route
        {
          path: "/academics",
          element: (
            <>
              <Helmet>
                <title>Explore Academics – Excellence in Education</title>
                <meta
                  name="description"
                  content="Discover the comprehensive academic programs at BFIS, designed to nurture skills and foster excellence for students' holistic development and future success."
                />
              </Helmet>
              <Academics />
            </>
          ),
        },

        // glimpse Page
        {
          path: "/glimpse",
          element: (
            <>
              <Helmet>
                <title>State-of-the-Art Infrastructure at BFIS</title>
                <meta
                  name="description"
                  content="Explore the advanced Infrastructure at BFIS, designed to foster innovation, learning, and growth for students and faculty alike."
                />
              </Helmet>
              <Glimpse />
            </>
          ),
        },

        // Programs Route with Dynamic Subroute
        {
          path: "/program",
          element: (
            <>
              <Helmet>
                <title>
                  Explore Innovative Programs at BFIS | Shaping Future Leaders
                </title>
                <meta
                  name="description"
                  content="Discover diverse educational programs at BFIS designed to nurture leadership, creativity, and excellence for a successful future."
                />
              </Helmet>
              <ProgramPage />
            </>
          ),
        },
        {
          path: "/program/:programId",
          element: <ProgramDetail subjects={subjects} />,
        },

        // Other Pages
        {
          path: "/policies",
          element: (
            <>
              <Helmet>
                <title>School Policies | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Learn about BFIS's policies, guidelines, and procedures that ensure a safe and productive learning environment."
                />
              </Helmet>
              <PoliciesPage />
            </>
          ),
        },
        {
          path: "/work-with-us",
          element: (
            <>
              <Helmet>
                <title>Career Opportunities | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Join our team of dedicated educators. Explore current job openings and career opportunities at BFIS Chandigarh."
                />
              </Helmet>
              <WorkWithUs />
            </>
          ),
        },
        {
          path: "/cbse-disclosure",
          element: (
            <>
              <Helmet>
                <title>CBSE Mandatory Disclosure | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="View BFIS's CBSE mandatory disclosure documents and compliance information."
                />
              </Helmet>
              <CBSEDisclosure />
            </>
          ),
        },
        {
          path: "/newsletter",
          element: (
            <>
              <Helmet>
                <title>School Newsletter | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Stay updated with BFIS's latest news, events, and achievements through our regular newsletter."
                />
              </Helmet>
              <Newsletter />
            </>
          ),
        },
        {
          path: "/uniform",
          element: (
            <>
              <Helmet>
                <title>School Uniform | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Information about BFIS's school uniform policy and guidelines for students."
                />
              </Helmet>
              <Uniform />
            </>
          ),
        },
        {
          path: "/books",
          element: (
            <>
              <Helmet>
                <title>Book List | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Access the complete list of textbooks and learning materials required for different classes at BFIS."
                />
              </Helmet>
              <BookList />
            </>
          ),
        },
        {
          path: "/events",
          element: (
            <>
              <Helmet>
                <title>
                  Upcoming Events at BFIS - Join Our Engaging Programs
                </title>
                <meta
                  name="description"
                  content="Explore exciting upcoming events at BFIS. Join our informative workshops, seminars, and more. Stay updated on educational opportunities and professional growth."
                />
              </Helmet>
              <EventsGallery />
            </>
          ),
        },
        {
          path: "/sports",
          element: (
            <>
              <Helmet>
                <title>
                  Sports at BFIS - Excellence in Athletic Programs & Facilities
                </title>
                <meta
                  name="description"
                  content="Explore the world of sports at BFIS with top-tier facilities, training, and events aimed at fostering athletic excellence."
                />
              </Helmet>
              <SportsPage />
            </>
          ),
        },

        // Contact Us Page
        {
          path: "/contact-us",
          element: (
            <>
              <Helmet>
                <title>Contact Us - BFI School of Business & Management</title>
                <meta
                  name="description"
                  content="Get in touch with BFI School of Business & Management for inquiries, admissions, and more. Reach out today to learn more about our programs and services."
                />
              </Helmet>
              <ContactUs />
            </>
          ),
        },

        // Admission Page
        {
          path: "/admission",
          element: (
            <>
              <Helmet>
                <title>Admission Open at BFIS - Apply Now for 2025</title>
                <meta
                  name="description"
                  content="Explore admission opportunities at BFIS. Apply now for 2025 intake and secure your future with world-class education."
                />
              </Helmet>
              <Admission />
            </>
          ),
        },

        // Blog Route
        {
          path: "/blog",
          element: (
            <>
              <Helmet>
                <title>Blog | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Stay updated with the latest news, insights, and stories from Brookfield International School. Explore our educational blog for valuable content."
                />
              </Helmet>
              <Blog />
            </>
          ),
        },

        // Blog Details Route
        {
          path: "/blog/:blogId",
          element: (
            <>
              <Helmet>
                <title>Blog Post | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Read detailed insights and stories from Brookfield International School's blog."
                />
              </Helmet>
              <BlogDetails />
            </>
          ),
        },

        // Add the Thank You page route
        {
          path: "/thankyou",
          element: (
            <>
              <Helmet>
                <title>Thank You | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Thank you for your submission! We appreciate your support and will get back to you soon."
                />
              </Helmet>
              <ThankYou />
            </>
          ),
        },

        // News Coverage Route
        {
          path: "/news-coverage",
          element: (
            <>
              <Helmet>
                <title>News Coverage | BFIS</title>
                <meta
                  name="description"
                  content="Read the latest news and media coverage about Brookfield International School (BFIS), the best school in the Chandigarh region."
                />
              </Helmet>
              <NewsCoverage />
            </>
          ),
        },
      ],
    },
  ],
  routerConfig
);

// Option 2: HashRouter (as fallback if needed)
export const hashRouter = createHashRouter(
  [
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Root />
        </>
      ),
      children: [
        // Home Route
        {
          path: "/",
          element: <HomeOne />,
        },
        {
          path: "/home",
          element: <HomeOne />,
        },

        // About Section with Layout and Sidebar
        {
          path: "/about",
          element: <AboutLayout sidebarLinks={aboutSidebarLinks} />,
          children: [
            { path: "", element: <Navigate to="message" replace /> },
            {
              path: "message",
              element: <AboutMessage />,
            },
            {
              path: "values",
              element: <AboutValues />,
            },
            {
              path: "set-us-apart",
              element: <AboutSetUsApart />,
            },
          ],
        },

        // Academics Page Route
        {
          path: "/academics",
          element: <Academics />,
        },

        // glimpse Page
        {
          path: "/glimpse",
          element: <Glimpse />,
        },

        // Programs Route with Dynamic Subroute
        {
          path: "/program",
          element: <ProgramPage />,
        },
        {
          path: "/program/:id",
          element: <ProgramDetail subjects={subjects} />,
        },

        // Other Pages
        {
          path: "/policies",
          element: <PoliciesPage />,
        },
        {
          path: "/work-with-us",
          element: <WorkWithUs />,
        },
        {
          path: "/cbse-disclosure",
          element: <CBSEDisclosure />,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
        {
          path: "/uniform",
          element: <Uniform />,
        },
        {
          path: "/books",
          element: <BookList />,
        },
        {
          path: "/events",
          element: <EventsGallery />,
        },
        {
          path: "/sports",
          element: <SportsPage />,
        },

        // Contact Us Page
        {
          path: "/contact-us",
          element: <ContactUs />,
        },

        // Admission Page
        {
          path: "/admission",
          element: <Admission />,
        },

        // Blog Route
        {
          path: "/blog",
          element: (
            <>
              <Helmet>
                <title>Blog | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Stay updated with the latest news, insights, and stories from Brookfield International School. Explore our educational blog for valuable content."
                />
              </Helmet>
              <Blog />
            </>
          ),
        },

        // Blog Details Route
        {
          path: "/blog/:blogId",
          element: (
            <>
              <Helmet>
                <title>Blog Post | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Read detailed insights and stories from Brookfield International School's blog."
                />
              </Helmet>
              <BlogDetails />
            </>
          ),
        },

        // Login Route
        {
          path: "/login",
          element: <LoginComponent />,
        },

        // Admin Route
        {
          path: "/admin",
          element:
            localStorage.getItem("isAuthenticated") === "true" ? (
              <AdminPanel />
            ) : (
              <Navigate to="/login" replace />
            ),
        },

        // News Coverage Route
        {
          path: "/news-coverage",
          element: (
            <>
              <Helmet>
                <title>News Coverage | BFIS</title>
                <meta
                  name="description"
                  content="Read the latest news and media coverage about Brookfield International School (BFIS), the best school in the Chandigarh region."
                />
              </Helmet>
              <NewsCoverage />
            </>
          ),
        },

        // Catch-All Route for 404
        {
          path: "*",
          element: (
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h1>
          ),
        },
      ],
    },
  ],
  routerConfig
);
