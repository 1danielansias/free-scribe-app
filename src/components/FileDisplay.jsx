import React from "react";

export default function FileDisplay(props) {
  const { file, audioStream, handleAudioReset, handleFormSubmission } = props;

  return (
    <main className="flex-1 p-4 flex flex-col justify-center text-center gap-3 sm:gap-4 pb-20 w-72 sm:w-96 max-w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Tu<span className="text-blue-400 bold"> archivo</span>
      </h1>
      <div className="flex flex-col text-left my-4">
        <h3 className="font-semibold">Nombre</h3>
        <p>{file ? file?.name : "Grabación de audio"}</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handleAudioReset}
          className="text-slate-400 hover:text-blue-600 duration-200"
        >
          Resetear
        </button>
        <button onClick={handleFormSubmission} className="specialBtn px-3 py-2 rounded-lg text-blue-400 flex items-center gap-2 font-medium">
          <p>Transcribir</p>
          <i className="fa-solid fa-pen-nib"></i>
        </button>
      </div>
    </main>
  );
}
