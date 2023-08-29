import React from "react";

const Tab = ({ isSelected, onSelect, badgeCaption, children }) => {
  return (
    <li className="mx-5">
      <button>{badgeCaption}</button>
      {isSelected && <div className="rounded-md border border-blue-300"></div>}
    </li>
  );
};

export default ChallengeTab = ({
  selectedType,
  onSelectType,
  challenges,
  children,
}) => {
  return (
    <>
      <menu className="flex justify-start px-5 sm:justify-between md:justify-between">
        <Tab>Active</Tab>
        <Tab>Completed</Tab>
        <Tab>Failed</Tab>
      </menu>
      <div>{children}</div>
    </>
  );
};
