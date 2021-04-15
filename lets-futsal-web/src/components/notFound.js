import React from "react";
import './external.css'
import NotFoundImg from '../assets/images/notFoundImg.png';
class NotFound extends React.Component{
  render(){
     return (
          <div className = 'error'>
            <img src={NotFoundImg} style={{width:650}} alt="No Preview"/>
          </div>
     )
  }
}
// const NotFound = () => {
//   return (
//     <div className = 'error'>
//       <img src="../assets/images/404.png" alt="fsfsjkfj"/>
//     </div>
//   );
// };

export default NotFound;
