import React from "react";

// components

import CardSettings from "../components/Cards/CardSettings";
import CardProfile from "../components/Cards/CardProfile";

export default function SettingsLayout({ settingsFor, input1, input2, input3, input4, ...props }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings
            settingsFor={settingsFor}
            input1={input1}
            input2={input2}
            input3={input3}
            input4={input4}
            codeVal={props.codeVal}
            rates={props?.rates}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile name={input1?.value} role={settingsFor === "dept" || settingsFor === "adminDept" ? input3?.value : props.roleName } orgName={props?.orgName} />
        </div>
      </div>
    </>
  );
}
