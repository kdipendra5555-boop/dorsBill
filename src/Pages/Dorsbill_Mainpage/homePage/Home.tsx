import AIHelpSection from "../../../Components/Dorsbill_Mainpage/LandingPage/AIHelpSection";
import CompanySection from "../../../Components/Dorsbill_Mainpage/LandingPage/CompanySection";
import FeaturesStrip from "../../../Components/Dorsbill_Mainpage/LandingPage/FeaturesStrip";
import Footer from "../../../Components/Dorsbill_Mainpage/LandingPage/Footer";
import ForWhom from "../../../Components/Dorsbill_Mainpage/LandingPage/ForWhom";
import Hero from "../../../Components/Dorsbill_Mainpage/LandingPage/Hero";
import TemplateCategoriesMarquee from "../../../Components/Dorsbill_Mainpage/LandingPage/TemplateCategoriesMarquee";
import Testimonials from "../../../Components/Dorsbill_Mainpage/LandingPage/Testimonials";
import Navbar from "../Navbar/Navbar";


export default function Home() {
  return (
    <>
<Navbar/>
<Hero/>
<FeaturesStrip/>
<TemplateCategoriesMarquee/>
<AIHelpSection/>
<ForWhom/>
<Testimonials/>
<CompanySection/>
<Footer/>

    </>
  );
}


