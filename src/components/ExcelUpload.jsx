import React, { useState } from "react";
import * as XLSX from "xlsx";
import Marksheet from "./Marksheet";

export default function ExcelUpload() {
  const [students, setStudents] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;

      // Convert ArrayBuffer → Uint8Array
      const data = new Uint8Array(arrayBuffer);

      // Read workbook
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        defval: "", // avoid undefined cells
      });

      setStudents(jsonData);
    };

    reader.readAsArrayBuffer(file); // ✅ modern & safe
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFile} />
      <Marksheet students={students} />
    </div>
  );
}
