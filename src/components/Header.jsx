import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewChallenge from "./NewChallenge";

const Header = () => {
  const [creatingNewChallenge, setCreatingNewChallenge] = useState(false);

  const doneCreatingChallengeHandler = () => {
    setCreatingNewChallenge(false);
  };

  const startNewChallengeHandler = () => {
    setCreatingNewChallenge(true);
  };

  return (
    <React.Fragment>
      <AnimatePresence>
        {creatingNewChallenge && (
          <NewChallenge onDone={doneCreatingChallengeHandler} />
        )}
      </AnimatePresence>

      <header className="mx-auto flex w-[20rem] justify-between py-20 text-white md:w-[35rem] lg:w-[50rem]">
        <h1 className="text-xl font-bold text-blue-400 md:text-2xl">
          Your Challenges
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", duration: 0.3 }}
          onClick={startNewChallengeHandler}
          className="rounded-md bg-blue-400 px-3 py-2 text-sm font-medium hover:bg-blue-300"
        >
          Add Challenge
        </motion.button>
      </header>
    </React.Fragment>
  );
};

export default Header;
