import React from "react";
import Header from "../components/Header";
import Challenges from "../components/Challenges";
import Footer from "../components/Footer";
import { ChallengeContextProvider } from "../store/challenge-context";

const ChallengePage = () => {
  return (
    <ChallengeContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
      <Footer />
    </ChallengeContextProvider>
  );
};

export default ChallengePage;
