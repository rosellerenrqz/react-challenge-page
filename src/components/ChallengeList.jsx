import { motion } from "framer-motion";
import { useContext } from "react";
import { ChallengeContext } from "../store/challenge-context";

const ChallengeList = ({ challenge, onViewDetails, isExpanded }) => {
  const { updateChallengeHandler } = useContext(ChallengeContext);

  const formattedDate = new Date(challenge.deadline).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );

  const cancelHandler = () => {
    updateChallengeHandler(challenge.id, "failed");
  };

  const completeHandler = () => {
    updateChallengeHandler(challenge.id, "completed");
  };

  return (
    <li className="mw-[90%] my-8 flex w-full list-none flex-col gap-4 p-0">
      <article className="w-full px-5">
        <header className="flex items-start gap-4">
          <div className="w-full">
            <h2 className="my-2 mt-0 text-xl text-gray-300">
              {challenge.title}
            </h2>
            <p className="mt-0 text-xs text-gray-100">
              Complete until {formattedDate}
            </p>

            <p className="flex justify-end gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", duration: 0.1 }}
                onClick={cancelHandler}
                className="border-none bg-transparent p-0 text-red-500 hover:text-red-400 active:text-red-300"
              >
                Mark as failed
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", duration: 0.1 }}
                onClick={completeHandler}
                className="border-none bg-transparent p-0 text-blue-500 hover:text-blue-400 active:text-blue-300"
              >
                Mark as completed
              </motion.button>
            </p>
          </div>
        </header>
        <div>
          <p>
            <button
              onClick={onViewDetails}
              className="border-none bg-transparent p-0 text-blue-500"
            >
              View Details{" "}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="ml-1 inline-block text-sm"
              >
                &#9650;
              </motion.span>
            </button>
          </p>

          {isExpanded && (
            <div>
              <p className="m-0 text-gray-200">{challenge.description}</p>
            </div>
          )}
        </div>
      </article>
    </li>
  );
};

export default ChallengeList;
