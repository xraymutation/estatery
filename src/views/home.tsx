import React from "react";
import Page from "../components/Page";
import Offer from "../components/Offer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
const HomeView = () => {
  return (
    <Page>
      <Hero />
      <Offer />
      <Testimonials />
    </Page>
  );
};

export default HomeView;
