import React from "react";
import { FaUserTie, FaWindowClose } from "react-icons/fa";

const FormModal = ({ setModal }) => {
  return (
    <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
      <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
        <div className="w-full flex justify-center text-gray-600 mb-3">
          <FaUserTie className="w-24 h-24 " />
        </div>

        <label
          htmlFor="name"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Nom
        </label>
        <input
          id="name"
          className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          placeholder="Salim"
        />

        <label
          htmlFor="firstName"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Prénom
        </label>
        <input
          id="firstName"
          className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          placeholder="Ousmane"
        />
        <label
          htmlFor="email"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          placeholder="Moussa@gmail.com"
        />
        <label
          htmlFor="genre"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Genre
        </label>
        <select
          id="genre"
          className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        >
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>
        <label
          htmlFor="country"
          className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
        >
          Pays
        </label>
        <select
          id="country"
          className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        >
          <option value="Maroc">Maroc</option>
          <option value="Mali">Mali</option>
          <option value="Niger">Niger</option>
          <option value="Mauritanie">Mauritanie</option>
        </select>

        <div className="flex items-center justify-start w-full">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
            Envoyer
          </button>
        </div>
        <button
          className=" absolute top-0 right-0 mt-4 mr-5 text-red-500 text-2xl transition duration-150 ease-in-out rounded  focus:outline-none focus:ring-none"
          onClick={() => setModal(false)}
        >
          <FaWindowClose />
        </button>
      </div>
    </div>
  );
};

export default FormModal;
