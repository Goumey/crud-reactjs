import React, { useState } from "react";
import Table from "../components/table";
import { FaSearch } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import FormModal from "../components/form-modal";
import DeleteModal from "../components/delete-modal";
import ViewUser from "../components/view-user";
import EditeModal from "../components/edite-modal";
const Home = () => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const user = {
    id: 1,
    name: "Salima",
    firstName: "Sidibé",
    email: "nI1r0@example.com",
    gender: "Femme",
    country: "Maroc",
  };
  return (
    <div className="h-screen w-full flex justify-center items-center relative">
      <div
        className={` transition-all ease-in-out duration-500 absolute  right-50 ${
          viewModal ? "top-0" : "top-[-100%]"
        }`}
      >
        {" "}
        <ViewUser setViewModal={setViewModal} />
      </div>
      <div className=" container mx-auto">
        <div className="btn-group flex justify-between items-center">
          <button
            className="px-4 py-1 bg-green-500 rounded-sm shadow-md flex items-center gap-x-4"
            onClick={() => setModal(true)}
          >
            <MdAddBox /> Ajouter
          </button>
          <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
              <FaSearch className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" />
            </span>
            <input
              type="text"
              placeholder="Rechercher ..."
              className="block w-full py-1.5 pr-5 text-white bg-transparent border border-indigo-500 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5   focus:outline-none  focus:ring-none"
            />
          </div>
        </div>
        <Table
          setDeleteModal={setDeleteModal}
          setViewModal={setViewModal}
          setEditModal={setEditModal}
        />
        <div
          className={`py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 ${
            modal ? "opacity-100 visible" : "opacity-0 invisible"
          } `}
          id="modal"
        >
          <FormModal setModal={setModal} />
        </div>
        <div
          className={`flex justify-center items-center bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 ${
            deleteModal ? "opacity-100 visible" : "opacity-0 invisible"
          } `}
          id="modal"
        >
          <DeleteModal setDeleteModal={setDeleteModal} />
        </div>
        <div
          className={`flex justify-center items-center bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 ${
            editModal ? "opacity-100 visible" : "opacity-0 invisible"
          } `}
          id="modal"
        >
          <EditeModal setEditModal={setEditModal} />
        </div>
      </div>
    </div>
  );
};

export default Home;
