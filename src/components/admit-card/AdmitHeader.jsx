import React from "react";

const AdmitHeader = () => {
  return (
    <>
      <div className="flex justify-between px-2 text-sm font-semibold">
        <div>Estd. : 2017</div>
        <div className="grow text-center">
          AN ISO 9001:2015 CERTIFIED SCHOOL
        </div>
        <div>Reg. No. 054631</div>
      </div>

      <div className="flex justify-between px-2 py-2 items-center">
        {/* <img src={amaLogo} width={84} alt="logo" /> */}

        <div className="grow text-center">
          <div className="text-4xl font-semibold">Anshu Memorial Academy</div>
          <div className="font-semibold">
            Bhatha Chowk, Bhatha Dasi, Rajapakar, Vaishali
          </div>
          <div className="text-sm">
            Run & Managed by AnitaBindeshwar Foundation
          </div>
        </div>

        {/* <img src={bbbpLogo} width={84} alt="bbbp" /> */}
      </div>

      <div className="text-center border-t-2 border-black font-semibold">
        <div>ADMIT CARD [ANNUAL EXAMINATION]</div>
        <div>SESSION 2024-2025</div>
      </div>
    </>
  );
};

export default AdmitHeader;
