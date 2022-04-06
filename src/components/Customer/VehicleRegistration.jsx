import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';

export default class VehicleRegistration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         type:'',
         Brand:'',
         Name:'',
         Number: ''
      }
      this.changeSelectVehicleHandler = this.changeSelectVehicleHandler.bind(this);
      this.changeVehicleBrandHandler = this.changeVehicleBrandHandler.bind(this);
      this.changeVehicleNameHandler = this.changeVehicleNameHandler.bind(this);
      this.changeVehicleNumberHandler = this.changeVehicleNumberHandler.bind(this);
      this.saveVehicle = this.saveVehicle.bind(this);
    }
    saveVehicle = (e) =>{
        e.preventDefault();

        let Vehicle = {
                v_Type:this.state.SelectVehicle,
                v_Brand :this.state.SelectVehicleBrand,
                v_Name: this.state.VehicleName,
                v_Number: this.state.VehicleNumber };
            console.log('Vehicle => ' +JSON.stringify(Vehicle));

            VehicleService.createVehicleRegistration(Vehicle).then(res =>{
                    window.location.href ='/serviceBooking'; 
            });
}


    changeSelectVehicleHandler =(event) => {
        this.setState({SelectVehicle:event.target.value});
     }
     changeVehicleBrandHandler =(event) => {
        this.setState({SelectVehicleBrand :event.target.value});
     }
     changeVehicleNameHandler =(event) => {
        this.setState({VehicleName :event.target.value});
     }
     changeVehicleNumberHandler =(event) => {
        this.setState({VehicleNumber :event.target.value});
     }
  render() {
    return (
      <div>
                <div className="container p-5 vRegPage">
                        <form className="row g-3" >
                                <div className="col-md-6">
                                                <label  className="form-label">Choose Vehicle Type</label>
                                                <input className="form-control" list="datalistOptions" id="exampleDataList"placeholder="Select Vehicle Type " 
                                                                value={this.state.SelectVehicle} onChange={this.changeSelectVehicleHandler}/>
                                                <datalist id="datalistOptions">
                                                        <option value="Bike"/>
                                                        <option value="Car"/>
                                                        <option value=" Scooty"/>
                                                        <option value="Bicycle"/>
                                                </datalist>
                                </div>
                                <div className="col-md-6">
                                                <label  className="form-label">Name Of Brand</label>
                                        <div className="input-group has-validation">
                                                <input className="form-control" list="datalistOptions1" id="exampleDataList"placeholder="Select Vehicle Brand " 
                                                                value={this.state.SelectVehicleBrand} onChange={this.changeVehicleBrandHandler}/>
                                                <datalist id="datalistOptions1">
                                                        <option value="Honda"/>
                                                        <option value="Hero"/>
                                                        <option value=" Bajaj"/>
                                                        <option value="Suzuki"/>
                                                        <option value="mahindra"/>
                                                        <option value="UM Motorcycles"/>
                                                        <option value="KTM"/>
                                                        <option value="Yamaha"/>
                                                        <option value="kawasaki"/>
                                                        <option value="Royal Enfield"/>
                                                        <option value="Piaggio"/>
                                                        <option value="TVS"/>
                                                        <option value="OLA"/>
                                                </datalist>
                                        </div>
                                                
                                </div>
                                <div className="col-md-6">
                                                <label  className="form-label">Vehicle  Name</label>
                                        <div className="input-group has-validation">
                                                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                                                        placeholder="Enter Your Vehicle Number" value={this.state.VehicleName} onChange={this.changeVehicleNameHandler} required/>
                                                 <div className="invalid-feedback"> Please choose a name.</div>
                                        </div>          
                                </div>
                                <div className="col-md-6">
                                                <label  className="form-label">Vehicle Number</label>
                                        <div className="input-group has-validation">
                                                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                                                        placeholder="Enter Vehicle Km " value={this.state.VehicleNumber} onChange={this.changeVehicleNumberHandler} required/>
                                                 <div className="invalid-feedback"> Please choose a name.</div>
                                        </div>          
                                </div>

                                <div className="col-12">
                                        <button className="btn btn-warning" type="submit"onClick={this.saveVehicle} >Register Vehicle</button>
                                </div> 
                        </form>
                </div>
      </div>
    )}}