import React from "react";

const UploadForm = () => {
  return (
    <div className=" flex justify-center mt-5">
      <form className="flex  items-center justify-center gap-4 p-5 bg-white/20 rounded-2xl">
        <input
          type="file"
          accept=".xls, .xlsx"
          className="border border-gray-400 p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
