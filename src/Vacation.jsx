import React, { useState } from "react";
import wonderlandPic from "./Images/Wonderland.png";
import offenbachPic from "./Images/Bronx.jpg";

export function Vacation() {
  const [vacationType, setVacationType] = useState(null);
  return (
    <>
      {" "}
      <h1>Choose your dream vacation</h1>{" "}
      <div className="winter">
        <button onClick={() => setVacationType("winter")}>
          Winter Wonderland
        </button>
      </div>
      <div className="offenbach">
        <button onClick={() => setVacationType("offenbach")}>Offenbach</button>

        {vacationType === "winter" && (
          <div>
            <img src={wonderlandPic} alt="Christmas" />
          </div>
        )}

        {vacationType === "offenbach" && (
          <div>
            {" "}
            <img src={offenbachPic} alt="Offenbach" />
          </div>
        )}
      </div>
    </>
  );
}

export default Vacation;
