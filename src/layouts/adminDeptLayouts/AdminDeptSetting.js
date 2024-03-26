import React from "react";
import SettingsLayout from "../SettingsLayout";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getAuthData } from "../../utils/utils";

export default function AdminDeptSetting() {
  const auth = getAuthData();
  const { data: orgData, isLoading, refetch } = useQuery(['orgData'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/org/v1/for-settings`, {
    headers: {
      Authorization: `Bearer ${auth?.accessToken}`
    }
  })
    .then(res => res.data?.org)
  );
  return (
    <>
      {!isLoading &&
        <SettingsLayout
          isLoading={isLoading}
          settingsFor={"adminDept"}
          input1={{ label: "Full Name", value: auth?.name, fieldName: "name" }}
          input2={{ label: "Email", value: auth?.email, fieldName: "email" }}
          input3={{ label: "Organization Name", value: orgData?.name || "", fieldName: "orgName" }}
          input4={{ label: "Organization Code", value: orgData?.code || "", fieldName: "code" }}
          refetch={refetch}
          orgName={orgData?.name || ""}
        />}
    </>
  );
}
