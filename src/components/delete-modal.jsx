import React from "react";

import { FaRegQuestionCircle } from "react-icons/fa";
const DeleteModal = ({ setDeleteModal }) => {
  return (
    <div>
      <div className="bg-white p-4 min-w-72 rounded-md text-center">
        <p className="text-red-400 flex  justify-center mb-2">
          <FaRegQuestionCircle className="w-24 h-24" />
        </p>
        <h5 className="text-xl mb-5 font-bold text-slate-500">
          Vous êtes sûr(e) de vouloir supprimer cet utilisateur ?
        </h5>

        <button
          className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
          onClick={() => setDeleteModal(false)}
        >
          Annuler
        </button>
        <button className="bg-green-500 px-7 py-2 ml-4 rounded-md text-md text-white font-semibold">
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
