

import React, { useState } from "react";

const ConditionalOne = () => {
  const [isloggedin, setisloggedin] = useState(false);
//conditional rendering using if else statements

//   if (isloggedin) {
//     return (
//       <div>
//         <h1> Welcome Palani</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1> Welcome guest</h1>
//       </div>
//     );
//   }

//this is using ternary operator

// return(
//     isloggedin? <div>Welcome Palani</div> : <div>Welcome Guest</div>
// )


//this  is using short circuit operator

return(
    isloggedin && <div>Welcome Palani</div>
)
};

export default ConditionalOne;
