import React from "react";
import Header from "../components/Header";
import Challenges from "../components/Challenges";

const ChallengePage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Challenges />
      </main>
    </React.Fragment>
  );
};

export default ChallengePage;
