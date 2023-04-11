import React from 'react'

//components
import CardDepartments from '../../components/Cards/CardDepartments'
import CardFaculties from '../../components/Cards/CardFaculties'

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
