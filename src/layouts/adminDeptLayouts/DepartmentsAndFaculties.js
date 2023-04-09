import React from 'react'

//components
import CardDepartments from '../../components/Cards/CardDepartments'
import CardFaculties from '../../components/Cards/CardFaculties'

export default function DepartmentsAndFaculties() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 min-lg:w-1/2 mb-12 xl:mb-0 px-4">
          <CardDepartments />
        </div>
        <div className="w-full xl:w-6/12 min-lg:w-1/2 mb-12 xl:mb-0 px-4">
          <CardFaculties/>
        </div>
      </div>
    </>
  )
}
