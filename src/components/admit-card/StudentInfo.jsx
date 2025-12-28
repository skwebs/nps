import React from "react";

const StudentInfo = () => {
  return (
    <div className="border-t-2 border-black pt-6 px-4">
      <div className="flex gap-4">
        <table className="w-full text-left">
          <tbody>
            {[
              "Name",
              "Mother's Name",
              "Father's Name",
              "Class",
              "Roll No.",
            ].map((label) => (
              <tr key={label}>
                <th className="px-3 py-2 whitespace-nowrap">{label}</th>
                <td className="px-3 py-2">:</td>
                <td className="px-3 py-2">
                  .............................................................................................
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border-2 border-black w-37.5 h-45 bg-white">
          {/* <img
            src={studentImg}
            className="w-full h-full invisible"
            alt="student"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
