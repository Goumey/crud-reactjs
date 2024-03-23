import React from "react";

import { MdClose } from "react-icons/md";

const ViewUser = ({ setViewModal }) => {
  return (
    <div className="bg-black p-4 max-w-72 mx-auto mt-3 rounded-md flex items-center gap-4 relative">
      <img
        src="https://api.dicebear.com/8.x/initials/svg?seed=Simon"
        alt="avatar"
        className="w-16 h-16 rounded-full"
      />
      <div className=" flex gap-2">
        <p className="text-gray-500">Simon</p>
        <p className="text-gray-500">Ousmane</p>
      </div>
      <button
        className="text-red-500 absolute top-1 right-1"
        onClick={() => setViewModal(false)}
      >
        <MdClose className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ViewUser;
