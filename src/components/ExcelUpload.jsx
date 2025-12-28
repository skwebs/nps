import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Marksheet } from "./Marksheet";

export default function ExcelUpload() {
  const [students, setStudents] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      // Read first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      setStudents(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFile} />

      <Marksheet students={students} />
    </div>
  );
}
