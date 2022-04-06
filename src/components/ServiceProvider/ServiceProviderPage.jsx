import React, { Component } from 'react'
import { useState,useEffect }from "react";
import { useHistory } from 'react-router-dom'

function ServiceProviderPage(){

  let user = JSON.parse(localStorage.getItem('user-info'))
  const history = useHistory();

  function editServiceProvider(){
    history.push(`/update-ServiceProvider/${user.s_Id}`);
  }
    
    return (
      <div className='Sppage'>

        <button style={{color:'black',backgroundColor:'orange',marginRight:'-1300px',marginTop:'20px'}}>Welcome:{user.s_Name} </button>
       
       <div className='container' style={{marginTop:'50px',marginLeft:'50px'}}>
       <div className="cardname" style={{width:'18rem'}}>
       <img className="card-img-top overlay overlayFade" src="./images/carS.png" style={{backgroundColor:'orange'}} alt="Card image cap" />
       <div className="card-body" >
       <h5 className="card-title">MY Profile</h5>
       <p className="card-text"></p>
       <a  onClick={editServiceProvider} className="btn btn-primary">checkout</a>
       </div>
       </div>
       </div>

       {/* <div className='' style={{marginTop:'50px',marginLeft:'400px'}}>
       <div className="cardname" style={{width:''}}>
       <img className="card-img-top overlay overlayFade" src="./images/g1.png" style={{backgroundColor:'orange'}} alt="Card image cap" />
       <div className="card-body" >
       <h5 className="card-title">Service Providers</h5>
       <p className="card-text">Get all details of Service Providers</p>
       <a href="" className="btn btn-primary">Service Providers Details</a>
       </div>
       </div>
       </div>

       <div className='' style={{marginTop:'50px',marginLeft:'800px'}}>
       <div className="cardname" style={{width:''}}>
       <img className="card-img-top overlay overlayFade" src="./images/feedback.png" style={{backgroundColor:'orange'}} alt="Card image cap" />
       <div className="card-body" >
       <h5 className="card-title">Custmor Feedback</h5>
       <p className="card-text">Cheack Feedback of all customers</p>
       <a href="" className="btn btn-primary">Feedback</a>
       </div>
       </div>
       </div> */}

      </div>
    )
  }


export default ServiceProviderPage;
