import { createBrowserRouter, Navigate, useNavigate, useParams } from "react-router-dom";

import App from "../App";

import AllpodCast from "../pages/Home/PodCast/AllpodCast.tsx";
//home event all
import EventsPage from "../pages/Home/EventSection/ExploreMoreMain.tsx";
import GrandUsAdmissionDayPage from "../pages/Home/EventSection/Grandusadmissiondaypage.tsx";
import MarketingEventPage from "../pages/Home/EventSection/Marketingeventpage.tsx";
import RioCarnivalPage from "../pages/Home/EventSection/Riocarnivalpage .tsx";
//our service 
import DestinationMain from "../pages/Services/Destination-Country/DestinationPages.tsx";
import MigrationMain from "../pages/Services/Visa-Services/Migration-services/MigrationMain.tsx";
import Student from "../pages/Services/Visa-Services/Student-services/Student.tsx";
import Visitor from "../pages/Services/Visa-Services/Visitor-services/Visitor.tsx";
//Home Our services hubpages
import Airport from "../pages/Home/whySection/Components/ourServices/Airpot/Airpot.tsx";
import Counselling from "../pages/Home/whySection/Components/ourServices/Counselling/Counselling.tsx";
import Course from "../pages/Home/whySection/Components/ourServices/Course/Course.tsx";
import Departure from "../pages/Home/whySection/Components/ourServices/Departure/Departure.tsx";
import Instuation from "../pages/Home/whySection/Components/ourServices/Institutation/Instuation.tsx";
import Scholarship from "../pages/Home/whySection/Components/ourServices/Scholarship/Scholarship";
import Virtual from "../pages/Home/whySection/Components/ourServices/Virtual/Virtual";
import VisaApplication from "../pages/Home/whySection/Components/ourServices/VisaApplication/Application.tsx";
//main pages here import
//blog
import BlogMain from "../pages/Blog/BlogMain.tsx"
import Blog1 from "../pages/Blog/blog1.tsx";
import Blog2 from "../pages/Blog/blog2.tsx";
//gallery

//our services
import ServiceMain from "../pages/Services/ServceMainPage.tsx";
import Courses from "../pages/Services/EnglishTesting/EnglishTestMain.tsx";

//contactus

//find-us
import FindUsPage from "../pages/find-us/find-us.tsx";
//home
import HomeMain from "../pages/Home/HomeMain.tsx";
import WhyChooseUs from "../pages/Home/whySection/whyChooseExplore/pages/WhyChooseUs.tsx";
import WhyLearnMore from "../pages/Home/whySection/whyChooseExplore/pages/WhylearnMore.tsx";

// About Us pages
import CompanyProfilePage from "../pages/About/CompanyProfilePage.tsx";
import DirectorMessagePage from "../pages/About/DirectorMessagePage.tsx";
import AboutEventsPage from "../pages/About/AboutEventsPage.tsx";



function EventDetailRoute({
  pageComponent: PageComponent,
}: {
  pageComponent: React.ComponentType<{
    onNavigate: (pageName: string) => void;
  }>;
}) {
  const navigate = useNavigate();
  const handleNavigate = (pageName: string) => {
    switch (pageName) {
      case "events-list":
        navigate("/explore-event");
        break;
      case "grand-us-admission-day":
        navigate("/explore-event/grand-us-admission-day");
        break;
      case "rio-carnival-2026":
        navigate("/explore-event/rio-carnival-2026");
        break;
      case "marketing-event":
        navigate("/explore-event/marketing-event");
        break;
      default:
        navigate("/explore-event");
        break;
    }
  };

  return <PageComponent onNavigate={handleNavigate} />;
}

function BlogDetailWrapper() {
  const { id } = useParams<{ id: string }>();
  switch (id) {
    case "1":
      return <Blog1 />;
    case "2":
      return <Blog2 />;
    default:
      return (
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-red-600">Blog Post Not Found</h2>
          <p className="text-gray-600 mt-2">The blog post you are looking for does not exist.</p>
          <a href="/blog&news" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Blogs
          </a>
        </div>
      );
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
      //home our services
      {
        path: "why-choose",
        children: [
          {
            path: "scholarship",
            element: <Scholarship />,
          },
          {
            path: "counselling",
            element: <Counselling />,
          },
          {
            path: "course",
            element: <Course />,
          },
          {
            path: "institution",
            element: <Instuation />,
          },
          {
            path: "virtual",
            element: <Virtual />,
          },
          {
            path: "visa-application",
            element: <VisaApplication />,
          },
          {
            path: "departure",
            element: <Departure />,
          },
          {
            path: "airport",
            element: <Airport />,
          },
        ],
      },
      // Allpodcast
      {
        path: "all-podcast",
        element: <AllpodCast />,
      },
      // all event home
      {
        path: "explore-event",
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: "grand-us-admission-day",
            element: (
              <EventDetailRoute pageComponent={GrandUsAdmissionDayPage} />
            ),
          },
          {
            path: "rio-carnival-2026",
            element: <EventDetailRoute pageComponent={RioCarnivalPage} />,
          },
          {
            path: "marketing-event",
            element: <EventDetailRoute pageComponent={MarketingEventPage} />,
          },
        ],
      },
      {
        path: "why-choose-us",
        element: <WhyChooseUs />,
      },
      {
        path: "why-choose-us-learn/:slug",
        element: <WhyLearnMore />,
      },
      // about
      {
        path: "about",
        children: [
          {
            index: true,
            element: <CompanyProfilePage />,
          },
          {
            path: "company-profile",
            element: <CompanyProfilePage />,
          },
          {
            path: "company-profile/who-are-we",
            element: <CompanyProfilePage />,
          },
          {
            path: "director-message",
            element: <DirectorMessagePage />,
          },
          {
            path: "partners",
            element: <CompanyProfilePage />,
          },
          {
            path: "events",
            element: <AboutEventsPage />,
          },
          {
            path: "stories",
            element: <CompanyProfilePage />,
          },
        ],
      },
      // service main page
      {
        path: "services",
        children: [
          {
            index: true,
            element: <ServiceMain />,
          },
          // English test preparation — matches navbar hrefs
          {
            path: "english-test",
            children: [
              {
                index: true,
                element: <Courses />,
              },
              {
                path: "ielts",
                element: <Navigate to="/services/english-test#ielts" replace />,
              },
              {
                path: "pte",
                element: <Navigate to="/services/english-test#pte" replace />,
              },
              {
                path: "toefl",
                element: <Navigate to="/services/english-test#toefl" replace />,
              },
              {
                path: "gre",
                element: <Navigate to="/services/english-test#gre" replace />,
              },
            ],
          },
          {
            path: "destination-country",
            element: <DestinationMain />,
          },
          {
            path: "visa-service/migration-visa",
            element: <MigrationMain />,
          },
          {
            path: "visa-service/student-visa",
            element: <Student />,
          },
          {
            path: "visa-service/visitor-visa",
            element: <Visitor />,
          },
        ],
      },
      {
        path: "gallery",
        element: "",
      },
      {
        path: "blog&news",
        children: [
          {
            index: true,
            element: <BlogMain />,
          },
          {
            path: ":id",
            element: <BlogDetailWrapper />,
          },
        ],
      },
      {
        path: "find-us",
        element: <FindUsPage />,
      },
      {
        path: "contact-us",
        element: "",
      },
    ],
  },
]);

export default router;