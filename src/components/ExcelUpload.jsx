import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Marksheet } from "./Marksheet";

export default function ExcelUpload() {
  const [students, setStudents] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;

      // Read workbook from ArrayBuffer
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      // First sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert sheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        defval: "", // prevent undefined values
      });

      setStudents(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFile} />

      <Marksheet students={students} />
    </div>
  );
}

// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import { Marksheet } from "./Marksheet";

// export default function ExcelUpload() {
//   const [students, setStudents] = useState([]);

//   const handleFile = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     try {
//       const data = await file.arrayBuffer();
//       const workbook = XLSX.read(data);
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);
//       setStudents(jsonData);
//     } catch (error) {
//       console.error("Error reading file:", error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".xlsx,.xls" onChange={handleFile} />
//       <Marksheet students={students} />
//     </div>
//   );
// }
