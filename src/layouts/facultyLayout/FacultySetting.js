import React from "react";
import SettingsLayout from "../SettingsLayout";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getAuthData } from "../../utils/utils";

export default function FacultySetting() {
  const auth = getAuthData();
  const { data: faculty, isLoading, refetch } = useQuery(['facultyData'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/faculty/v1/for-settings`, {
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`
    }
  })
    .then(res => res.data?.faculty)
  );
  return (
    <>

      {!isLoading && <SettingsLayout
        settingsFor="faculty"
        isLoading={isLoading}
        input1={{ label: "Full Name", value: auth?.name, fieldName: "name" }}
        input2={{ label: "Email", value: auth?.email, fieldName: "email" }}
        input3={{ label: "Abbrivation", value: faculty?.abbrivation, fieldName: "abbrivation" }}
        input4={{ label: "Has Access of", value: faculty?.hasAccessOf, fieldName: "hasAccessOf" }}
        refetch={refetch}
        orgName={faculty?.inOrganization?.name}
        roleName={faculty?.inDepartment?.deptName || ""}
        codeVal="Can edit Time Table"
      />}
      {
        isLoading && 
        <SettingsLayout
        settingsFor="faculty"
        isLoading={isLoading}
        input1={{ label: "Full Name", value: auth?.name|| "Loaing..", fieldName: "name" }}
        input2={{ label: "Email", value: auth?.email|| "Loaing..", fieldName: "email" }}
        input3={{ label: "Abbrivation", value: faculty?.abbrivation|| "Loaing..", fieldName: "abbrivation" }}
        input4={{ label: "Has Access of", value: faculty?.hasAccessOf || "Loaing..", fieldName: "hasAccessOf" }}
        refetch={refetch}
        orgName={faculty?.inOrganization?.name|| "Loaing.."}
        roleName={faculty?.inDepartment?.deptName || "Loaing.."}
        codeVal="Can edit Time Table"
      />
      }
    </>
  );
}
