import React from "react";
import SettingsLayout from "../SettingsLayout";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getAuthData } from "../../utils/utils";

export default function FacultySetting() {
  const auth = getAuthData();
  const { data: faculty, isLoading } = useQuery(['facultyData'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/faculty/v1/for-settings`, {
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`
    }
  })
    .then(res => res.data?.faculty)
  );
  return (
    <SettingsLayout
      settingsFor="faculty"
      isLoading={isLoading}
      input1={{ label: "Full Name", value: auth?.name, fieldName: "name" }}
      input2={{ label: "Email", value: auth?.email, fieldName: "email" }}
      input3={{ label: "Abbrivation", value: faculty?.abbrivation, fieldName: "abbrivation" }}
      input4={{ label: "Has Access of", value: faculty?.hasAccessOf, fieldName: "hasAccessOf" }}
      orgName={faculty?.inOrganization?.name}
      roleName={faculty?.inDepartment?.deptName||""}
      codeVal="Can edit Time Table"
    />
  );
}
