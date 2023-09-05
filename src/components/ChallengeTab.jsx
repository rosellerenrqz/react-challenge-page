import Badge from "./Badge";
import { motion } from "framer-motion";

const Tab = ({ isSelected, onSelect, badgeCaption, children }) => {
  return (
    <li className="mx-5">
      <button
        className={`${isSelected ? "flex text-blue-500" : "flex text-white"}`}
        onClick={onSelect}
      >
        {children}
        {/*adding key to retrigger the badge animation*/}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {isSelected && (
        <motion.div
          layoutId="tab-indicator"
          className="mt-2 border border-blue-500"
        ></motion.div>
      )}
    </li>
  );
};

export const ChallengeTab = ({
  selectedType,
  onSelectType,
  challenges,
  children,
}) => {
  return (
    <>
      <menu className="flex justify-start px-5 sm:justify-between md:justify-between">
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
};
