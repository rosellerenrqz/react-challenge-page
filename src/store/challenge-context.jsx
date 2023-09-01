import { createContext, useState } from "react";

export const ChallengeContext = createContext({
  challenges: [],
  addChallengeHandler: () => {},
  updateChallengeHandler: () => {},
});

export const ChallengeContextProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);

  const addChallengeHandler = (challenge) => {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: "active" },
      ...prevChallenges,
    ]);
  };

  const deleteChallenge = (challengeId) => {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId),
    );
  };

  const updateChallengeHandler = (challengeId, newStatus) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      }),
    );
  };

  const challengeContext = {
    challenges,
    addChallengeHandler,
    deleteChallenge,
    updateChallengeHandler,
  };

  return (
    <ChallengeContext.Provider value={challengeContext}>
      {children}
    </ChallengeContext.Provider>
  );
};
