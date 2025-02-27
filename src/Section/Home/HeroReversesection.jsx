import Herosection from "./Herosection";
import BannerImage from "../../assets/3d-businessman.jpg";
const HeroReversesection = () => {
  return (
    <section>
      <Herosection
        reverse={true}
        image={BannerImage}
        heading="Lunch Your Website Faster"
        text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, modi!"
      />
      {/* Only passing reverse prop here */}
    </section>
  );
};

export default HeroReversesection;
