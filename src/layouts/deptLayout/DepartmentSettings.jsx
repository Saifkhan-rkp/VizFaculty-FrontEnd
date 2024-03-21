import React from 'react'
import SettingsLayout from '../SettingsLayout'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getAuthData } from '../../utils/utils'

function DepartmentSettings() {

    const { data: deptData, isLoading } = useQuery(['deptData'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/dept/${getAuthData()?.roleId}`, {
        headers: {
            Authorization: `Bearer ${getAuthData()?.accessToken}`
        }
    })
        .then(res => res.data)
    );
    // console.log(deptData);
    return (
        <>
           {!isLoading  && <SettingsLayout
                settingsFor="dept"
                name="Full Name"
                email="Email"
                name2="Abbreviation"
                code="Authorization Of"
                // name={deptData?.deptHeadId?.name}
                deptCode={deptData?.code}
                deptName={deptData?.deptName}
                orgName={deptData?.orgId?.name}
                rates={deptData?.rates}
                codeVal="Can edit Time Table"
            />}
        </>
    )
}

export default DepartmentSettings