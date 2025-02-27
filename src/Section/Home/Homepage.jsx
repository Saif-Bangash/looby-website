import {
  AboutServices,
  Herolastsection,
  HeroReversesection,
  Herosection,
  Servicesection,
} from "./index";
import someImage from "../../assets/Heroavatar.jpg";

const Homepage = () => {
  return (
    <>
      <Herosection
        image={someImage}
        heading="Get a free consultation"
        text="We offer amazing consultation services for your business!"
        showInput={true}
      />

      <Servicesection />
      <HeroReversesection />
      <AboutServices />
      <Herolastsection />
    </>
  );
};

export default Homepage;
