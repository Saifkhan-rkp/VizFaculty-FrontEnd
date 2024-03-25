import React from 'react'
import CardSalaryApplications from '../../components/Cards/CardSalaryApplications'
import { getAuthData } from '../../utils/utils'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function DeptSalaryApplicationLayout() {
    const auth = getAuthData();
    const { data: requests, isLoading, } = useQuery(['requests'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/salary-request/getForwarded`, {
        headers: {
            authorization: `Bearer ${auth?.accessToken}`
        }
    }).then(res => res.data?.requests))
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <CardSalaryApplications isDeptView={true} requests={requests} isLoading={isLoading} />
                </div>
            </div>
        </>
    )
}

export default DeptSalaryApplicationLayout