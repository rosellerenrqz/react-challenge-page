import { createContext, useState } from "react";

const ChallengeContext = createContext({
  challenges: [],
  addChallengeHandler: () => {},
  updateChallengeHandler: () => {},
});

const ChallengeContextProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);

  const addChallengeHandler = (challenge) => {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString },
      ...prevChallenges,
    ]);
  };

  const deleteChallengeHandler = (challengeId) => {
    setChallenges((prevChallenges) => {
      prevChallenges.filter((challenge) => challenge.id !== challengeId);
    });
  };

  const updateChallengeHandler = (challengeId, newStatus) => {
    setChallenges((prevChallenges) => {
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      });
    });
  };

  const challengeContext = {
    challenges,
    addChallengeHandler,
    deleteChallengeHandler,
    updateChallengeHandler,
  };

  return <ChallengeContext.Provider>{children}</ChallengeContext.Provider>;
};
