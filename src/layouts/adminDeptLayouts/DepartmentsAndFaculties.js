import React, { lazy } from 'react'
//components
import CardFaculties from '../../components/Cards/CardFaculties'
const CardDepartments = lazy(() => import('../../components/Cards/CardDepartments'));

export default function DepartmentsAndFaculties() {
  
  return (
    <>
      <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardDepartments />
          </div>
          <div className="w-full mb-12 px-4">
            <CardFaculties />
          </div>
        {/* <div className="w-full xl:w-11/12 min-lg:w-11/12 mb-12 xl:mb-0 px-4">
        </div>
        <div className="w-full xl:w-11/12 min-lg:w-11/12 mb-12 xl:mb-0 px-4">
        </div> */}
      </div>
    </>
  )
}
