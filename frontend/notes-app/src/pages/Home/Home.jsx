import React from "react";
import { MdAdd } from "react-icons/md";
import NavBar from "../../components/navbar/NavBar";
import NoteCard from "../../components/cards/NoteCard";
const Home = () => {
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
        onClick={() => {}}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
    </>
  );
};

export default Home;
