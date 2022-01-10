import React from "react";
import './Signin_code.css';


function Signin_code(){
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
						<h2>We Just Texted You</h2>
						<p>Please enter the code we just sent you to **** 2895</p>
					</div>
					<div className="input-box">
						<input type="text" name="" id=""/>
						<label for="">Verification Code</label>
					</div>
					<button className="button">
						<div className="button_text">Sign In</div>
					</button>
					<div className="endtext">
						<p>Change Mobile Number</p>
					</div>
					<div className="endtext2">
						<p>Resend Code in 26s</p>
					</div>
				</div>
            </div>
			</div>
			<div className="col-6 d-none d-lg-block">
				<div className="rightimage"> 
                    <img src="./signin.png" className="img-fluid" alt=""/> 
                </div>
			</div>
		</div>
	</div>
    
    </>
}


export default Signin_code;