import React, { useEffect, useState } from 'react'

export default function AutocompleteInput({ title = "title", facultyList }) {
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [flist] = useState(facultyList || [{ abbrivation: "N/A", faculty: { name: "No Data found" } }])
  const findFaculty = (e) => {
    e.preventDefault();
    const splited = e.target.value.split(":");
    if (splited.length > 1) {
      const abbr = splited.pop();
      if (abbr.includes(";")) {
        setShowList(false);
        return;
      }
      setSearch(abbr);
      setShowList(true)
      console.log(abbr);
    } else {
      setShowList(false);
    }
  };
  useEffect(() => {
    if (!search || search === "") {
      setItems(flist);
      return;
    }
    const newItems = flist
      .filter((p) => p?.faculty?.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => (a?.faculty?.name?.toLowerCase() > b?.faculty?.name?.toLowerCase()) ? 1 : ((b?.faculty?.name?.toLowerCase() > a?.faculty?.name?.toLowerCase()) ? -1 : 0));

    setItems(newItems);

  }, [search, flist]);
  const onSearchSelect = (item)=>{
    // e.preventDefault();
    const input = document.getElementById(title);
    const subjectAndType = input.value.split(";").pop().split("-");
    input.value += item?.abbrivation+";"; 
    console.log(input.value.split(";"));
    setShowList(false);
    const time = title.split("-");
    const sch = {timeFrom: time[0], timeTo:time[1], assignTo:item?._id, subject:subjectAndType[1].slice(0,-1), teachingType:subjectAndType[0]}
    console.log(sch);
  }
  return (<>
    <div>
      <label
        className="text-left block uppercase text-slate-600 text-xs font-bold mb-2"
        htmlFor={title}
      >{title}
      </label>
      <input
        onChange={findFaculty}
        type="text"
        id={title}
        name={title}
        placeholder=""
        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      />
      {showList &&
        (<div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow ">
          <ul
            className="py-1 text-sm text-gray-700 "
          // use ref to calculate the width of parent
          >
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  tabIndex={index + 1}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  <button type='button' value={item?._id} onClick={(e) => onSearchSelect(item)}>{item?.abbrivation}: {item?.faculty?.name}</button>
                </li>
              );
            })}
          </ul>
          {/* add this part */}
        </div>)}
    </div>
  </>
  )
}
