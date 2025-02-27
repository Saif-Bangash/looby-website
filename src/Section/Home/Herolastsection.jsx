import Herosection from "./Herosection";
import grouppeople from "../../assets/group-people.jpg";

const Herolastsection = () => {
  return (
    <Herosection
      image={grouppeople}
      heading="Our Team"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, quae. It’s time to get noticed with a unique logo design for your brand."
      showInput={false}  
    />
  );
};

export default Herolastsection;
