import { IoRocket } from "react-icons/io5";
import { IoIosWoman } from "react-icons/io";
import { TiStopwatch } from "react-icons/ti";
import { FaLaptopCode, FaPaintBrush, FaRocket } from 'react-icons/fa'; // Importing icons


const cards = [
  {
    icon: <TiStopwatch />,
    title: "Real logo Real fast",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi? adipisicing elit. Minus, nisi? adipisicing elit. Minus, nisi?",
  },
  {
    icon: <IoIosWoman />,
    title: "Do it yourself and save",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi? adipisicing elit. Minus, nisi? adipisicing elit. Minus, nisi?",
  },
  {
    icon: <IoRocket />,
    title: "Get website ready to login",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi? adipisicing elit. Minus, nisi? adipisicing elit. Minus, nisi?",
  },
];


  const cardsData = [
  {
    id: 1,
    title: "Web Development",
    description: "We create responsive and high-performance websites to help your business stand out online.",
    icon: <FaLaptopCode size={40} color="#4CAF50" /> // Icon for Web Development
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Our design team crafts beautiful and user-friendly interfaces that improve user engagement.",
    icon: <FaPaintBrush size={40} color="#FF5733" /> // Icon for UI/UX Design
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "We provide digital marketing services that help increase your brand's visibility and drive sales.",
    icon: <FaRocket size={40} color="#FFC107" /> // Icon for Digital Marketing
  },
];

export { cards, cardsData};
