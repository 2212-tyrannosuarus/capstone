import React from "react";

const SelectDropDown = (props) => {
    const {handleLastMonth, handleThisMonth} = props;
  return (
    <div className="col">
    <div class="card-body">
        <div class="text-center">
          <div class="dropdown">
            <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="growthReportId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Selected Month
            </button>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
              <button id="this-month-button" className="dropdown-item" onClick={() => handleThisMonth()}>This month</button>
              <button class="dropdown-item" onClick={() => handleLastMonth()}>Last month</button>
              <button class="dropdown-item" >Last 3 months</button>
              <a class="dropdown-item" href="javascript:void(0);">Last 6 months</a>
              <a class="dropdown-item" href="javascript:void(0);">This year</a>
              <a class="dropdown-item" href="javascript:void(0);">Last year</a>
              <a class="dropdown-item" href="javascript:void(0);">All Time</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDropDown;