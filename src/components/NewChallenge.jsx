import { useContext, useRef } from "react";
import { ChallengeContext } from "../store/challenge-context";
import Modal from "../UI/Modal";

const NewChallenge = ({ onDone }) => {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const { addChallengeHandler } = useContext(ChallengeContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
    };

    // console.log(challenge, "challenge");

    if (
      challenge.title.trim() === "" ||
      challenge.description.trim() === "" ||
      challenge.deadline.trim() === ""
    ) {
      return;
    }

    onDone();
    console.log(addChallengeHandler(challenge));
    addChallengeHandler(challenge);
  };

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={submitHandler}>
        <p className="my-2">
          <label htmlFor="title" className="mb-1 block font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            ref={title}
            className="block w-full rounded-md border p-1"
          />
        </p>

        <p>
          <label htmlFor="description" className="mb-1 block font-medium">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            ref={description}
            className="block w-full rounded-md border p-1"
          ></textarea>
        </p>

        <p>
          <label htmlFor="deadline" className="mb-1 block font-medium">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            ref={deadline}
            className="block w-full rounded-md border p-1"
          />
        </p>

        <p className="mt-4 flex justify-start gap-1 sm:justify-end">
          <button
            type="button"
            onClick={onDone}
            className="mx-1 font-medium text-red-500 hover:text-red-400 active:text-red-300"
          >
            Cancel
          </button>
          <button className="mx-1 rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-400 active:bg-blue-300">
            Add Challenge
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default NewChallenge;
