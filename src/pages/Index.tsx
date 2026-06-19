import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FacebookVideos from "@/components/home/FacebookVideos";
import Testimonials from "@/components/home/Testimonials";
import LocationInfo from "@/components/home/LocationInfo";
import VeteranOwned from "@/components/home/VeteranOwned";
import Hours from "@/components/home/Hours";

const Index = () => {
  return (
    <Layout>
      <Hero />
      {/* FacebookVideos section hidden - will be visible when video content is ready */}
      {/* <FacebookVideos /> */}
      {/* Testimonials section hidden - will be visible again when ready */}
      {/* <Testimonials /> */}
      <VeteranOwned />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Hours />
        </div>
      </section>
      <LocationInfo />
    </Layout>
  );
};

export default Index;
