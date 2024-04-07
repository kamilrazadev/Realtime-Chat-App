import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className={"label gap-2 cursor-pointer"}>
          <input type="checkbox" className="checkbox" />
          <span className="label-text">Male</span>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="" className={"label gap-2 cursor-pointer"}>
          <input type="checkbox" className="checkbox" />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
