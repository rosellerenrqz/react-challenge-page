import { useState } from "react";
import ChallengeTab from "../components/ChallengeTab";
import ChallengeList from "../components/ChallengeList";

const Challenges = () => {
  const [selectedType, setSelectedType] = useState("active");
  const [expanded, setExpanded] = useState(null);

  const handleSelectType = (newType) => {
    setSelectedType(newType);
  };

  const handleViewDetails = (id) => {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  };

  return (
    <div className="mx-auto w-[35rem] rounded-md bg-gray-200 py-5">
      <ChallengeTab></ChallengeTab>
    </div>
  );
};

export default Challenges;
