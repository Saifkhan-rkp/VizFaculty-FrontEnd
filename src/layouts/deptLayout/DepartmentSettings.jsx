import React from 'react'
import SettingsLayout from '../SettingsLayout'

function DepartmentSettings() {
    return (
        <>
            <SettingsLayout
                settingsFor="dept"
                name="Full Name"
                Email="Email"
                name2="Abbreviation"
                code="Authorization Of"
                codeVal="Can edit Time Table"
            />
        </>
    )
}

export default DepartmentSettings