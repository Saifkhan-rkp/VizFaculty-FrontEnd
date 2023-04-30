import React from 'react'
//components
// import CardFaculties from '../../components/Cards/CardFaculties'
import EditableTable from '../../components/EditableTable'

export default function Timetables() {
  
  return (
    <>
      <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <EditableTable/>
          </div>
        {/* <div className="w-full xl:w-11/12 min-lg:w-11/12 mb-12 xl:mb-0 px-4">
        </div>
        <div className="w-full xl:w-11/12 min-lg:w-11/12 mb-12 xl:mb-0 px-4">
        </div> */}
      </div>
    </>
  )
}
