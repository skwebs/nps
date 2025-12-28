import { downloadPDF } from "../utils/pdfUtils";

export default function Marksheet({ students }) {
  if (!students.length) return null;

  return (
    <div>
      {students.map((s, index) => {
        const total =
          Number(s.Maths) +
          Number(s.Science) +
          Number(s.English) +
          Number(s.Hindi) +
          Number(s["Social Science"]);

        return (
          <div key={index}>
            {/* MARKSHEET CONTENT */}
            <div
              id={`marksheet-${index}`}
              style={{
                width: 750,
                padding: 20,
                border: "1px solid #000",
                marginBottom: 10,
                background: "#fff",
              }}
            >
              <h2 style={{ textAlign: "center" }}>ABC Public School</h2>
              <p style={{ textAlign: "center" }}>Annual Examination 2024–25</p>

              <p>
                <strong>Name:</strong> {s.Name}
              </p>
              <p>
                <strong>Roll:</strong> {s.Roll}
              </p>
              <p>
                <strong>Class:</strong> {s.Class} {s.Section}
              </p>

              <table width="100%" border="1" cellPadding="6">
                <tbody>
                  <tr>
                    <td>Maths</td>
                    <td>{s.Maths}</td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>{s.Science}</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>{s.English}</td>
                  </tr>
                  <tr>
                    <td>Hindi</td>
                    <td>{s.Hindi}</td>
                  </tr>
                  <tr>
                    <td>Social Science</td>
                    <td>{s["Social Science"]}</td>
                  </tr>
                </tbody>
              </table>

              <p>
                <strong>Total:</strong> {total}
              </p>
            </div>

            {/* DOWNLOAD BUTTON */}
            <button
              onClick={() =>
                downloadPDF(`marksheet-${index}`, `${s.Name}_Marksheet.pdf`)
              }
            >
              Download PDF
            </button>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
