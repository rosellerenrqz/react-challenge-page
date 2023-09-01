import React from "react";
import Header from "../components/Header";
import Challenges from "../components/Challenges";
import { ChallengeContextProvider } from "../store/challenge-context";

const ChallengePage = () => {
  return (
    <ChallengeContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengeContextProvider>
  );
};

export default ChallengePage;
