import React from 'react';
import './Signin_text.css';

function Signin_text(){
    return <>
    <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
                <div className="logo text-center">
                    <img src="./logo1.png" alt=""/>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
				<div className="signin">
					<div className="headings">
						<h2>Customer Sign In</h2>
						<p>Please enter your mobile number to continue.</p>
					</div>
					<div className="input-box">
						<input type="text" name="" id=""/>
						<label for="">Mobile Number</label>
					</div>
					<button className="button">
						<div className="button_icon"><img src="./lock.svg" alt=""/></div>
						<div className="button_text">Continue</div>
					</button>
					<div className="endtext">
						<p>We’ll send you a verification code via SMS</p>
					</div>
				</div>
                </div>
            </div>
            <div className="col-6 d-none d-lg-block ">
                <div className="rightimage">
             <img src="./signin.png" className="img-fluid" alt=""/>
            </div>
            </div>
        </div>
    </div>
    </>
}

export default Signin_text;
