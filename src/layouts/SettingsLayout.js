import React from "react";

// components

import CardSettings from "../components/Cards/CardSettings";
import CardProfile from "../components/Cards/CardProfile";

export default function SettingsLayout(props) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings
            name={props.name}
            Email={props.Email}
            name2={props.name2}
            code={props.code}
            codeVal={props.codeVal}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
