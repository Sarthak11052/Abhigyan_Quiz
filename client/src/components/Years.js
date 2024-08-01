// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUserId } from "../redux/result_reducer";
// import "../styles/Main.css";
// const Menu = () => {
//   const inputRef = useRef("po");
//   const dispatch = useDispatch();

//   function startQuiz() {
//     dispatch(setUserId(inputRef.current?.value));
//   }
//   const [openMenu, setOpenMenu] = useState("");

//   const handleToggle = (menu) => {
//     setOpenMenu(openMenu === menu ? "" : menu);
//   };

//   const menuItems = {
//     "UPSC Civil Services": [],
//     "CDS-I": [],
//     "CDS-II": [],
//     CAPF: [],
//     SSC: [],
//     "NDA-I": [
//       { year: 2022 },
//       { year: 2017 },
//       { year: 2018 },
//       { year: 2016 },
//       { year: 2015 },
//       { year: 2014 },
//       { year: 2013 },
//       { year: 2012 },
//       { year: 2011 },
//       { year: 2010 },
//       { year: 2009 },
//       { year: 2008 },
//     ],
//     "NDA-II": [],
//     IES: [],
//   };

//   return (
//     <div>
//       {Object.keys(menuItems).map((menu) => (
//         <div key={menu}>
//           <div onClick={() => handleToggle(menu)} style={styles.menuTitle}>
//             {menu}
//           </div>
//           {openMenu === menu && menuItems[menu].length > 0 && (
//             <div style={styles.dropdown}>
//               {menuItems[menu].map((item) => (
//                 <Link className="btn" to={"quiz"} onClick={startQuiz}>
//                   {item.year}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   menuTitle: {
//     cursor: "pointer",
//     padding: "10px",
//     border: "1px solid #ccc",
//     marginBottom: "5px",
//   },
//   dropdown: {
//     paddingLeft: "20px",
//     marginBottom: "10px",
//   },
//   dropdownItem: {
//     display: "block",
//     padding: "5px 0",
//     textDecoration: "none",
//     color: "blue",
//   },
// };

// export default Menu;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Main.css";

const styles = {
  menuTitle: {
    cursor: "pointer",
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "5px",
  },
  dropdown: {
    paddingLeft: "20px",
    marginBottom: "10px",
  },
  dropdownItem: {
    display: "block",
    padding: "5px 0",
    textDecoration: "none",
    color: "blue",
  },
};

const Menu = () => {
  const [openMenu, setOpenMenu] = useState("");

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const menuItems = {
    "UPSC Civil Services": [],
    "CDS-I": [],
    "CDS-II": [],
    CAPF: [],
    SSC: [],
    "NDA-I": [
      { year: 2022 },
      { year: 2017 },
      { year: 2018 },
      { year: 2016 },
      { year: 2015 },
      { year: 2014 },
      { year: 2013 },
      { year: 2012 },
      { year: 2011 },
      { year: 2010 },
      { year: 2009 },
      { year: 2008 },
    ],
    "NDA-II": [],
    IES: [],
  };

  return (
    <div>
      {Object.keys(menuItems).map((menu) => (
        <div key={menu}>
          <div onClick={() => handleToggle(menu)} style={styles.menuTitle}>
            {menu}
          </div>
          {openMenu === menu && menuItems[menu].length > 0 && (
            <div style={styles.dropdown}>
              {menuItems[menu].map((item) => (
                <Link
                  key={item.year}
                  className="btn"
                  to={"quiz"}
                  style={styles.dropdownItem}
                >
                  {item.year}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
