import AdmitFooter from "../admit-card/AdmitFooter";
import AdmitHeader from "../admit-card/AdmitHeader";
import StudentInfo from "../admit-card/StudentInfo";
import "../../styles/a4.css";
const MarksheetSheet = () => {
  return (
    <div className="body A4">
      <section className="sheet  p-4 flex flex-col">
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

export default MarksheetSheet;
