import React from "react";
import AdmitHeader from "./AdmitHeader";
import StudentInfo from "./StudentInfo";
import AdmitFooter from "./AdmitFooter";

const AdmitCardSheet = () => {
  return (
    <div className="body">
      <section className="sheet A5 landscape p-4 flex flex-col">
        <div className="main-content border-2 border-black h-full flex flex-col">
          <AdmitHeader />
          <StudentInfo />
          <div className="grow" />
          <AdmitFooter />
        </div>

        <div className="w-full text-center text-xs py-1 bg-gray-100">
          Designed & Developed by{" "}
          <span className="font-semibold">
            Anshu Memorial Academy (IT Team)
          </span>
        </div>
      </section>
    </div>
  );
};

export default AdmitCardSheet;
