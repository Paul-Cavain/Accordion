import { useState } from "react";
import Accordion from "./Accordion";

const accordionItems = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    description:
      "Most of chairs are assebmled near the emergency door left of the store of which it is very easy to move them in and out whenever the time and number of labour.",
  },
  {
    id: 2,
    title: "How long do i have to return my chair?",
    description:
      "No please use them as much as you can untill the event is almost done but what to consider is careness on them from rains and demage, because they not full mine.",
  },
  {
    id: 3,
    title: "Do you shit to countires outside the EU?",
    description:
      "Ofcourse not just because transport cost are very high compared to what we got in return but also it is hard to have an assurance about their safeness during the transpotations, s please try to find the best one near your location.",
  },
  {
    id: 4,
    title: "At what price did you buy them and where?",
    description:
      "I got them for about $47590 last year (2024) at Mrumbani plumber center in South Africa and i used $270 for fast and careness airways transportation to Dodoma city in my stores.",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    setIsOpen((prevId) => (prevId === id ? false : id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Accordion
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        accordionItems={accordionItems}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
