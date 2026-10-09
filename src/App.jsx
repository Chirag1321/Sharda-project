import './App.css'
import { useLocation } from 'react-router-dom'
import About from './pages/About'
import OurStory from './pages/OurStory'
import OurRole from './pages/OurRole'
import VisionMission from './pages/VisionMission'
import UpdateDetail from './pages/UpdateDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Contact from './pages/Contact'
import Leadership from './pages/Leadership'
import WhatWeDo from './pages/WhatWeDo'
import LatestUpdates from './pages/LatestUpdates'
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import PageHeader from './components/PageHeader';

function App() {
  const location = useLocation();

  const getPageConfig = () => {
    switch (location.pathname) {
      case "/what-we-do": return { title: "What We Do", breadcrumb: [{label: "Home", link: "/"}, {label: "Our Work"}, {label: "What We Do"}] };
      case "/about": return { title: "About Sharda Welfare", breadcrumb: [{label: "Home", link: "/"}, {label: "About Us"}] };
      case "/our-story": return { title: "Our Story", breadcrumb: [{label: "Home", link: "/"}, {label: "Our Story"}] };
      case "/our-role": return { title: "Our Role", breadcrumb: [{label: "Home", link: "/"}, {label: "Our Role"}] };
      case "/vision-mission": return { title: "Vision & Mission", breadcrumb: [{label: "Home", link: "/"}, {label: "Vision & Mission"}] };
      case "/leadership": return { title: "Our Leadership", breadcrumb: [{label: "Home", link: "/"}, {label: "About Us"}, {label: "Our Leadership"}] };
      case "/latest-updates": return { title: "Latest Updates", breadcrumb: [{label: "Home", link: "/"}, {label: "Latest Updates"}] };
      case "/privacy-policy": return { title: "Privacy Policy", breadcrumb: [{label: "Home", link: "/"}, {label: "Privacy Policy"}] };
      case "/terms-of-service": return { title: "Terms of Service", breadcrumb: [{label: "Home", link: "/"}, {label: "Terms of Service"}] };
      case "/contact": return { title: "Contact Us", breadcrumb: [{label: "Home", link: "/"}, {label: "Contact"}] };
      default: return null;
    }
  };

  const renderPage = () => {
    if (location.pathname.startsWith("/latest-updates/") && location.pathname !== "/latest-updates") {
      return <UpdateDetail />;
    }

    switch (location.pathname) {
      case "/what-we-do": return <WhatWeDo />;
      case "/about": return <About />;
      case "/our-story": return <OurStory />;
      case "/our-role": return <OurRole />;
      case "/vision-mission": return <VisionMission />;
      case "/leadership": return <Leadership />;
      case "/latest-updates": return <LatestUpdates />;
      case "/privacy-policy": return <PrivacyPolicy />;
      case "/terms-of-service": return <TermsOfService />;
      case "/contact": return <Contact />;
      default: return <Home />;
    }
  };

  const pageConfig = getPageConfig();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        {pageConfig && <PageHeader title={pageConfig.title} breadcrumb={pageConfig.breadcrumb} />}
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App