import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const Table = ({ setDeleteModal, setViewModal, setEditModal }) => {
  return (
    <table className="table-auto border-collapse border border-slate-500  text-center w-full mt-5">
      <caption class="caption-bottom">
        Cette table liste des utilisateurs d'une entreprise{" "}
      </caption>
      <thead>
        <tr>
          <th className="border border-slate-600 ...">N°</th>
          <th className="border border-slate-600 ...">Nom</th>
          <th className="border border-slate-600 ...">Prénom</th>
          <th className="border border-slate-600 ...">Email</th>
          <th className="border border-slate-600 ...">Genre</th>
          <th className="border border-slate-600 ...">Pays</th>
          <th className="border border-slate-600 ...">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-700 ...">1</td>
          <td className="border border-slate-700 ...">Jeyf</td>
          <td className="border border-slate-700 ...">Ardeche</td>
          <td className="border border-slate-700 ...">nI1r0@example.com</td>
          <td className="border border-slate-700 ...">Homme</td>
          <td className="border border-slate-700 ...">Maroc</td>
          <td className="border border-slate-700 h-full w-full flex items-center justify-center  p-1 gap-x-3">
            <button
              className="bg-green-500 p-2 rounded"
              onClick={() => setViewModal(true)}
            >
              <FaEye />
            </button>
            <button
              className="bg-blue-500 p-2 rounded"
              onClick={() => setEditModal(true)}
            >
              <MdModeEdit />
            </button>
            <button
              onClick={() => setDeleteModal(true)}
              className="bg-red-500 p-2 rounded"
            >
              <FaTrashAlt />
            </button>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-700 ...">2</td>
          <td className="border border-slate-700 ...">Halima</td>
          <td className="border border-slate-700 ...">Hammadi</td>
          <td className="border border-slate-700 ...">halima@gmail.com</td>
          <td className="border border-slate-700 ...">Femme</td>
          <td className="border border-slate-700 ...">Niger</td>
          <td className="border border-slate-700 h-full w-full flex items-center justify-center  p-1 gap-x-3">
            <button
              className="bg-green-500 p-2 rounded"
              onClick={() => setViewModal(true)}
            >
              <FaEye />
            </button>
            <button
              className="bg-blue-500 p-2 rounded"
              onClick={() => setViewModal(true)}
            >
              <MdModeEdit />
            </button>
            <button
              onClick={() => setDeleteModal(true)}
              className="bg-red-500 p-2 rounded"
            >
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
