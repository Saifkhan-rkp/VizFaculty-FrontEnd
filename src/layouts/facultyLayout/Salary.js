// import React, { useState } from "react";
// import CardSalary from "../../components/Cards/CardSalary";

// export default function Salary() {
//   const [salaryAmt, setsalaryAmt] = useState(1100);
//   const handlesalaryChange = (amt) => {
//     const sal = salaryAmt + amt;
//     setsalaryAmt(sal);
//   };

//   const [barProgress, setbarProgress] = useState(50);
//   const handleProgressChange = (cng) => {
//     const change = barProgress + cng;
//     setbarProgress(change);
//   };

//   return (
//     <>
//       <CardSalary salaryAmt={salaryAmt} barProgress={barProgress}></CardSalary>
//     </>
//   );
// }

import React from "react";
import { Steps } from "rsuite";
import "rsuite/dist/rsuite.css";

const styles = {
  width: "200px",
  display: "inline-table",
  verticalAlign: "top",
};

export default function Salary() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 min-lg:w-1/2 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="py-8 px-5">
              <Steps current={2} vertical style={styles}>
                <Steps.Item title="Finished" description="Description" />
                <Steps.Item title="In Progress" description="Description" />
                <Steps.Item title="Waiting" description="Description" />
                <Steps.Item title="Waiting" description="Description" />
              </Steps>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
