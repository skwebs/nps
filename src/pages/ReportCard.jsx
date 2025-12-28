import "../styles/a4.css";

/* -------------------------------------------------------------------------- */
/*                              BUSINESS LOGIC                                 */
/* -------------------------------------------------------------------------- */

const getTotal = (subject) => (subject.written || 0) + (subject.oral || 0);

const getGrade = (percent) => {
  if (percent >= 91) return "A+";
  if (percent >= 81) return "A";
  if (percent >= 71) return "B+";
  if (percent >= 61) return "B";
  if (percent >= 51) return "C+";
  if (percent >= 41) return "C";
  if (percent >= 33) return "D";
  return "E";
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const student = {
  name: "Priyanshu Kumari",
  father: "Rina Devi",
  mother: "Rameshwar Paswan",
  dob: "14-02-2019",
  class: "Std. II",
  section: "A",
  roll: 11,
  address: "Bhatha Dasi, Rajapakar, Vaishali, Bihar",
};

const subjects = [
  { name: "Hindi", full: 100, written: 79 },
  { name: "English", full: 100, written: 80 },
  { name: "Maths", full: 100, written: 82 },
  { name: "Science", full: 100, written: 75, oral: 15 },
  { name: "Social Science", full: 100, written: 65, oral: 14 },
  { name: "Computer", full: 100, written: 66 },
  { name: "General Knowledge", full: 100, written: 62 },
];

/* -------------------------------------------------------------------------- */
/*                              CALCULATIONS                                  */
/* -------------------------------------------------------------------------- */

const totalFull = subjects.reduce((sum, s) => sum + s.full, 0);
const totalObtained = subjects.reduce((sum, s) => sum + getTotal(s), 0);

const percentage = ((totalObtained / totalFull) * 100).toFixed(2);
const overallGrade = getGrade(percentage);

/* -------------------------------------------------------------------------- */
/*                               COMPONENT                                    */
/* -------------------------------------------------------------------------- */

export default function ReportCard() {
  return (
    <div className="body A4">
      <section className="sheet p-4 flex flex-col">
        <div className="border-2 border-black h-full flex flex-col">
          {/* ============================= HEADER ============================= */}
          <header className="text-center border-b-2 border-black py-2">
            <h1 className="text-4xl font-bold">Anshu Memorial Academy</h1>
            <p className="font-semibold">AN ISO 9001:2015 CERTIFIED SCHOOL</p>
            <p className="text-sm">
              Bhatha Chowk, Bhatha Dasi, Rajapakar, Vaishali
            </p>
          </header>

          {/* ========================== STUDENT INFO ========================== */}
          <section className="border-b-2 border-black p-3">
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>: {student.name}</td>
                  <th>Class</th>
                  <td>: {student.class}</td>
                </tr>
                <tr>
                  <th>Father</th>
                  <td>: {student.father}</td>
                  <th>Roll</th>
                  <td>: {student.roll}</td>
                </tr>
                <tr>
                  <th>Mother</th>
                  <td>: {student.mother}</td>
                  <th>Section</th>
                  <td>: {student.section}</td>
                </tr>
                <tr>
                  <th>DOB</th>
                  <td>: {student.dob}</td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td colSpan="3">: {student.address}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* ============================ MARKS =============================== */}
          <section className="p-3 border-b-2 border-black">
            <table className="w-full text-center border">
              <thead className="border-b-2 border-black">
                <tr>
                  <th className="text-left px-2">Subject</th>
                  <th>Full</th>
                  <th>Written</th>
                  <th>Oral</th>
                  <th>Total</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((s) => {
                  const total = getTotal(s);
                  const grade = getGrade((total / s.full) * 100);

                  return (
                    <tr key={s.name} className="border-b">
                      <th className="text-left px-2">{s.name}</th>
                      <td>{s.full}</td>
                      <td>{s.written || "--"}</td>
                      <td>{s.oral || "--"}</td>
                      <td>{total}</td>
                      <td>{grade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          {/* ======================== OVERALL RESULT ========================== */}
          <section className="p-3">
            <table className="w-full border text-center">
              <tbody>
                <tr>
                  <th>Obtained</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                  <th>Position</th>
                </tr>
                <tr>
                  <td>
                    {totalObtained}/{totalFull}
                  </td>
                  <td>{percentage}%</td>
                  <td>{overallGrade}</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-2 text-sm">
              <strong>Remarks:</strong> Result is good. Keep improving.
            </p>
          </section>

          {/* =========================== SIGNATURES =========================== */}
          <footer className="mt-auto p-3 flex justify-around text-center">
            <div>
              <p>18-05-2024</p>
              <div className="border-t border-black">Date</div>
            </div>
            <div>
              <div className="border-t border-black">Class Teacher</div>
            </div>
            <div>
              <div className="border-t border-black">Principal</div>
            </div>
          </footer>
        </div>

        <p className="text-xs text-center mt-1">
          Designed & Developed by Anshu Memorial Academy (IT Team)
        </p>
      </section>
    </div>
  );
}
