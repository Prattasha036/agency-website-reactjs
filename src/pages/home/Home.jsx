import React from "react";
import HeroSection from "./HeroSection";
import ToolsSection from "./ToolsSection";
import CompanyLogos from "./CompanyLogos";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Blogs from "../blogs/Blogs";
import TeamSection from "./TeamSection";
import Pricing from "./Pricing";
import FAQs from "./FAQs";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ToolsSection></ToolsSection>
      <CompanyLogos></CompanyLogos>
      <Services></Services>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <TeamSection></TeamSection>
      <Pricing></Pricing>
      <FAQs></FAQs>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
