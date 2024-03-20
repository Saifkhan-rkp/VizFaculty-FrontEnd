import React from "react";

// components

import CardStats from "../Cards/CardsStats";
import PropTypes from "prop-types";

const constants ={
  faculty:{
    head1:"TOTAL LECTURES",
    head2:"TOTAL ATTENDANCE",
    head3:"TOTAL LOAD(IN WEEK)",
    head4:"TOTAL SALARY",
    icons:["fas fa-chalkboard-user","fas fa-person-chalkboard","fas fa-book-open-reader","fas fa-indian-rupee-sign"]
  },
  hod:{
    head1:"EXPENDITURE",
    head2:"FACULTIES",
    head3:"TIMETABLES",
    head4:"SALARY REQUESTS",
    icons:["fas fa-indian-rupee-sign","fas fa-users","fas fa-building-user","fas fa-envelope"]
  },
  adminDept:{
    head1:"EXPENDITURE",
    head2:"VISITING FACULTIES",
    head3:"DEPARTMENTS",
    head4:"APPLICATIONS",
    icons:["fas fa-indian-rupee-sign","fas fa-users","fas fa-building-user","fas fa-envelope"]
  }
}


export default function HeaderStats({
  userType,
  state1,
  state2,
  state3,
  state4,
  desc
}) {
  const subtitles = constants[userType];
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
                  statSubtitle= {subtitles.head1}
                  statTitle={state1}
                  // statArrow="up"
                  // statPercent="3.48"
                  // statPercentColor="text-emerald-500"
                  statDescripiron=" Till Date "
                  statIconName={subtitles.icons[0]}
                  statIconColor="bg-red-500"
                  userType={userType}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={subtitles.head2}
                  statTitle={state2}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Till Today"
                  statIconName={subtitles.icons[1]}
                  statIconColor="bg-orange-500"
                  userType={userType}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={subtitles.head3}
                  statTitle={state3}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron={`TH:${desc?.find(obj=> obj._id==="TH")?.count}; PR:${desc?.find(obj=> obj._id==="PR")?.count}`}
                  statIconName={subtitles.icons[2]}
                  statIconColor="bg-pink-500"
                  userType={userType}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={subtitles.head4}
                  statTitle={state4}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron={`${new Date().toDateString().split(" ")[1]} ${new Date().getFullYear()}`}
                  statIconName={subtitles.icons[3]}
                  statIconColor="bg-sky-500"
                  userType={userType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderStats.defaultProps = {
  userType: "faculty",
  state1: "23",
  state2: "15",
  state3: "3",
  state4: "12300",
};
HeaderStats.propTypes = {
  userType: PropTypes.oneOf(["faculty", "hod", "adminDept"]),
  state1: PropTypes.string,
  state2: PropTypes.string,
  // state3: PropTypes.string,
  state4: PropTypes.string,
};
