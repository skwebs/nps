function calculateTotal(student) {
  const subjects = ["Maths", "Science", "English"];
  return subjects.reduce((sum, sub) => sum + Number(student[sub] || 0), 0);
}

function calculateGrade(total) {
  if (total >= 270) return "A+";
  if (total >= 240) return "A";
  if (total >= 200) return "B";
  return "C";
}

export function Marksheet({ students }) {
  if (!students.length) return null;

  return (
    <div style={{ marginTop: 20 }}>
      {students.map((s, index) => {
        const total = calculateTotal(s);
        const grade = calculateGrade(total);

        return (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: 16,
              marginBottom: 20,
              borderRadius: 8,
              maxWidth: 500,
            }}
          >
            <h3>Marksheet</h3>

            <p>
              <strong>Name:</strong> {s.Name}
            </p>
            <p>
              <strong>Roll:</strong> {s.Roll}
            </p>
            <p>
              <strong>Class:</strong> {s.Class}
            </p>

            <table width="100%" border="1" cellPadding="6">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
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
              </tbody>
            </table>

            <p>
              <strong>Total:</strong> {total}
            </p>
            <p>
              <strong>Grade:</strong> {grade}
            </p>
          </div>
        );
      })}
    </div>
  );
}
