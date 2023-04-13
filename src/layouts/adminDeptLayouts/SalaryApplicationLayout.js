import React from 'react'
import CardSalaryApplications from '../../components/Cards/CardSalaryApplications'

export default function SalaryApplicationLayout() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardSalaryApplications />
        </div>
      </div>
    </>
  )
}
