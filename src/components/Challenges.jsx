import { useContext, useState } from "react";

import { ChallengeContext } from "../store/challenge-context";
import { ChallengeTab } from "../components/ChallengeTab";
import ChallengeList from "../components/ChallengeList";
import { motion, AnimatePresence } from "framer-motion";

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

  const displayedChallenges = filteredChanges[selectedType];

  return (
    <div className="mx-auto w-[35rem] rounded-md bg-slate-700 py-5">
      <ChallengeTab
        challenges={filteredChanges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        <AnimatePresence mode="wait">
          {displayedChallenges.length > 0 && (
            <motion.ol exit={{ y: -30, oapcity: 0 }} key="list">
              <AnimatePresence>
                {displayedChallenges.map((challenge) => (
                  <ChallengeList
                    // layout //to animate once a new challenge is being added
                    key={challenge.id}
                    challenge={challenge}
                    onViewDetails={() => handleViewDetails(challenge.id)}
                    isExpanded={expanded === challenge.id}
                  />
                ))}
              </AnimatePresence>
            </motion.ol>
          )}

          {displayedChallenges.length === 0 && (
            <motion.p
              key="fallback"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-10 text-center text-lg text-white"
            >
              No challenges found.
            </motion.p>
          )}
        </AnimatePresence>
      </ChallengeTab>
    </div>
  );
};

export default Challenges;
