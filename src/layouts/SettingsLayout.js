import React from "react";

// components

import CardSettings from "../components/Cards/CardSettings";
import CardProfile from "../components/Cards/CardProfile";

export default function SettingsLayout({ settingsFor, ...props }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings
            settingsFor={settingsFor}
            name={props.name}
            Email={props.email}
            name2={props.name2}
            code={props.code}
            codeVal={props.codeVal}
            rates={props?.rates}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile name={ props?.name } deptName={props?.deptName} orgName={props?.orgName} />
        </div>
      </div>
    </>
  );
}
