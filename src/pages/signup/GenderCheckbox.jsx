import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="male" className={"label gap-2 cursor-pointer"}>
          <input
            id="male"
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
          <span className="label-text">Male</span>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="female" className={"label gap-2 cursor-pointer"}>
          <input
            id="female"
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
