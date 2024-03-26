import React from 'react'
import SettingsLayout from '../SettingsLayout'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getAuthData } from '../../utils/utils'

function DepartmentSettings() {
    const auth = getAuthData();
    const { data: deptData, isLoading } = useQuery(['deptData'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/dept/${getAuthData()?.roleId}`, {
        headers: {
            Authorization: `Bearer ${auth?.accessToken}`
        }
    })
        .then(res => res.data)
    );
    // console.log(deptData);
    return (
        <>
            {!isLoading && <SettingsLayout
                settingsFor="dept"
                isLoading={isLoading}
                input1={{ label: "Full Name", value: auth?.name, fieldName: "name" }}
                input2={{ label: "Email", value: auth?.email, fieldName: "email" }}
                input3={{ label: "Department Name", value: deptData?.deptName, fieldName: "deptName" }}
                input4={{ label: "Department Code", value: deptData?.code, fieldName: "code" }}
                orgName={deptData?.orgId?.name}
                rates={deptData?.rates}
                codeVal="Can edit Time Table"
            />}
        </>
    )
}

export default DepartmentSettings