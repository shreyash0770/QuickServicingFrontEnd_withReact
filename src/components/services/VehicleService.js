import axios from 'axios';

const VEHICLE_API_BASE_URL = " http://localhost:8080/api/vehicles"

class VehicleService{

        getVehicle(){
                return axios.get(VEHICLE_API_BASE_URL);
        }



        createVehicleRegistration(Vehicle){
                return axios.post(VEHICLE_API_BASE_URL, Vehicle);
        }
}
export default new VehicleService()