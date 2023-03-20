import React, { useEffect } from "react";
import { ProgressBar } from 'react-bootstrap'
import './Budget.css'

const Spending = (props) => {
  const { spending } = props;

//   useEffect(() => {
    if (spending !== undefined) {
      console.log("spending ", spending.flat().slice(0, -1));
    }
//   });

  return (
    
    <div className="row">
        {spending !== undefined ? (
            <div class="col-md-9 col-lg-9 order-2 mb-4">
            <div class="card h-100">
              <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="card-title m-0 me-2 ">Spending</h5>
              </div>
              <div class="card-body">
                
                    {spending && spending.length ? (
                        spending.flat().slice(0, -1).map(spendingItem => {
                            return (
                                <ul class="p-0 m-0" key={spendingItem.subCategoryId}>
                                <li class="d-flex mb-2 pb-1" key={spendingItem.subCategoryId}>
                    <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div class="me-2">
                        <h6 class="text-muted d-block mb-1">{spendingItem.categoryName}: <span className="text-dark">{spendingItem.subCategoryName}</span></h6>
                      </div>
                      <div class="user-progress d-flex align-items-center gap-1">
                        <h6 class="mb-0">${parseInt(spendingItem.transactionAmount)}</h6>{" "}
                        <span class="text-muted">of ${parseInt(spendingItem.budgetedAmount)}</span>
                      </div>
                    </div>
                    
                  </li>
                  <li class="mb-2 pb-1 income-progress-bar">
                  <ProgressBar variant={(spendingItem.budgetedAmount-spendingItem.transactionAmount) >= 0 ? 'primary': 'danger'} now={(spendingItem.transactionAmount/spendingItem.budgetedAmount) * 100} style={{height: "10px"}}/>
                  </li>
                  </ul>
                            )
                        })
                    ) : null}
                  
                  
                
              </div>
            </div>
          </div>
        ): null}
      

    </div>
  );
};

export default Spending;