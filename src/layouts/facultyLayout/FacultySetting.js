import React from "react";
import SettingsLayout from "../SettingsLayout";

export default function FacultySetting() {
  return (
    <SettingsLayout
      settingsFor="faculty"
      name="Full Name"
      Email="Email"
      name2="Abbreviation"
      code="Authorization Of"
      codeVal="Can edit Time Table"
    />
  );
}
