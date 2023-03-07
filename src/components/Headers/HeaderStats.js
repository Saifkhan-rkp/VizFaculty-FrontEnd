import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import PropTypes from 'prop-types';

export default function HeaderStats({
  userType,
  state1,
  state2,
  state3,
  state4
}) {
  
  return (
    <>
      {/* Header */}
      <div className="relative bg-sky-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SUBJECTS"
                  statTitle="3"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL SALARY"
                  statTitle="12300"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="MARCH 2023"
                  statIconName="fas fa-rupee-sign"
                  statIconColor="bg-sky-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderStats.defaultProps ={
  userType:"Faculty",
  state1:"qwerty",
  state2:"qwerty",
  state3:"qwerty",
  state4:"qwerty"
};
HeaderStats.propTypes = {
  userType: PropTypes.oneOf(["faculty","hod","adminDept"]),
  state1: PropTypes.string,
  state2: PropTypes.string,
  state3: PropTypes.string,
  state4: PropTypes.string,
}