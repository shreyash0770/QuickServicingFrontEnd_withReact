import React, { Component } from 'react'
import ServiceProvidersService from '../services/ServiceProvidersService'
import '../services/css/serviceprovidercard.css'

export default class ServiceProviderCards extends Component {
  
  constructor(props) {
   
    
    super(props)
  
    this.state = {
      serviceProviders: []
      
    }
  }


  
  componentDidMount(){
    ServiceProvidersService.getServiceProviders().then((res) =>{
        this.setState({serviceProviders: res.data});

   });
}

vehicalRegistration(){
  
   this.props.history.push('vehicle')
}

  render() {
    

   
    let user = JSON.parse(localStorage.getItem('user-info'))
    
    return (
      <div>
         <h6>Welcome:{user.c_Name}</h6>
         <h1 className='text-center' style={{backgroundColor:'orange'}}> Service Providers List</h1>
         <div className='serviceproviderss'> 
       {this.state.serviceProviders.map((serviceProvider) =>
        
       
        <div className='cards'>
        
          <div>
           <h3 className='serviceNames'>{serviceProvider.s_Name}</h3>  
          </div>
          
          <div className='serviceEmail'>Email:{serviceProvider.email}</div>
          <div className='servicePhone'>Phone:{serviceProvider.s_Phone}</div>
          <div className='serviceCity'>City:{serviceProvider.s_City}</div>
          <div className='serviceAddress'>Address:{serviceProvider.s_Address}</div>
          
         
          <div>
             <a className='btn btn-success' href="vehicle" style={{marginTop:'10px',width:'50%'}} onClick={this.vehicalRegistration} >Book</a>
          </div>

        </div>       

       
       
       )}

     </div>
     </div>
      
      
        )
    
  }
}
