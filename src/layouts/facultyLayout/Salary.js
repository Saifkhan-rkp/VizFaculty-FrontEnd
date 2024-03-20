import React, { useState } from "react";
import { Panel, Steps } from "rsuite";
import "rsuite/dist/rsuite.css";
import "rsuite/Panel/styles/index.less"

// const styles = {
//   width: "200px",
//   display: "inline-table",
//   verticalAlign: "top",
// };

export default function Salary() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-100">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  {/* <h6 className="uppercase text-slate-100 mb-1 text-xs font-semibold">
                    Departments
                  </h6> */}
                  <h2 className="text-slate-700 text-xl font-semibold">Salary Application Status</h2>
                </div>
              </div>
            </div>
            {/* Body card start */}
            <div className="p-4 flex-auto">
              <div className="relative h-350-px">
                <Steps current={step} vertical={false}>
                  <Steps.Item title="Salary Request" description="Form" />
                  <Steps.Item title="Forwarded to" description="Hod" />
                  <Steps.Item title="Forwarded to" description="Admin" />
                  <Steps.Item title="Salary Disbursed" description="" />
                </Steps>
                <hr />
                <Panel header={"Salary Form"}>
                  <form>

                  </form>
                </Panel>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  {/* <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                    Previous Salary Applications
                  </h6> */}
                  <h2 className="text-slate-700 text-xl font-semibold">
                    Previous Salary Applications
                  </h2>
                  <div className="p-4 flex-auto">
                    <div className="relative h-350-px">

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
