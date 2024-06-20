import React, { useState } from "react";
import Modal from "react-modal";
import { MdAdd } from "react-icons/md";
import NavBar from "../../components/navbar/NavBar";
import NoteCard from "../../components/cards/NoteCard";
import AddEditNotes from "./AddEditNotes";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Botola 13 on 14th June"
            date="13th Dec 2023"
            content="Botola 13 on 14th June"
            tags="#Botola"
            isPinned={true}
            onPinNote={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex justify-center items-center bg-primary hover:bg-blue-600 rounded-2xl absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[48%] max-h-3/4 bg-white mx-auto mt-14 p-5 overfolw-scroll rounded-md"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({
              isShown: false,
              type: "add",
              data: null,
            });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
