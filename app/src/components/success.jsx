import React from 'react'
// import img from ".././public/icon-star.svg";
function Success(props) {
  return (
    <div className="success">
        {/* <img src={img}/> */}
        <div className="text none">
            <h2>thanks for <b/>Subscribing!</h2>
            <p> A confirmation email has been sent to {props.email}. Please open it and click the button inside to confirm your subscription.</p>
            <button type="button">Dismiss message</button>
        </div>
    </div>
  )
}

export default Success;
