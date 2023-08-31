import React, { useContext } from "react";
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
      <article className="w-full">
        <header className="flex items-start gap-4">
          <div className="w-full">
            <h2 className="mt-0 text-xl text-gray-500">{challenge.title}</h2>
            <p className="mt-0 text-xs">Complete until {formattedDate}</p>

            <p className="flex content-end gap-4">
              <button
                onClick={cancelHandler}
                className="border-none bg-blue-500 bg-transparent p-0 text-inherit"
              >
                Mark as failed
              </button>
              <button
                onClick={completeHandler}
                className="border-none bg-blue-500 bg-transparent p-0 text-inherit"
              >
                Mark as completed
              </button>
            </p>
          </div>
        </header>
        <div>
          <p>
            <button
              onClick={onViewDetails}
              className="border-none bg-blue-500 bg-transparent p-0 text-inherit"
            >
              View Details{" "}
              <span className="ml-1 inline-block text-sm">&#9650;</span>
            </button>
          </p>

          {isExpanded && (
            <div>
              <p className="m-0">{challenge.description}</p>
            </div>
          )}
        </div>
      </article>
    </li>
  );
};

export default ChallengeList;
