import { useContext, useState } from "react";
import { ChallengeContext } from "../store/challenge-context";
import { ChallengeTab } from "../components/ChallengeTab";
import ChallengeList from "../components/ChallengeList";

const Challenges = () => {
  const { challenges } = useContext(ChallengeContext);
  const [selectedType, setSelectedType] = useState("active");
  const [expanded, setExpanded] = useState(null);

  console.log(challenges, "challenges");

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

  const filteredChanges = {
    active: challenges.filter((challenge) => challenge.status === "active"),
    completed: challenges.filter(
      (challenge) => challenge.status === "completed",
    ),
    failed: challenges.filter((challenge) => challenge.status === "failed"),
  };

  // console.log(filteredChanges, "fc");

  const displayedChallenges = filteredChanges[selectedType];

  return (
    <div className="mx-auto w-[35rem] rounded-md bg-gray-700 py-5">
      <ChallengeTab
        challenges={filteredChanges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        {displayedChallenges.length > 0 && (
          <ol>
            {displayedChallenges.map((challenge) => (
              <ChallengeList
                key={challenge.id}
                challenge={challenge}
                onViewDetails={() => handleViewDetails(challenge.id)}
                isExpanded={expanded === challenge.id}
              />
            ))}
          </ol>
        )}

        {displayedChallenges.length === 0 && (
          <p className="mt-10 text-center text-white">No challenges found.</p>
        )}
      </ChallengeTab>
    </div>
  );
};

export default Challenges;
