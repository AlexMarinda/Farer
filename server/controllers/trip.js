import trips  from '../model/trip';


//import {verifyToken} from '../../helpers';
// trip class

class CreateTrip {
    
// trip created

static  trip(req, res) {
const newTrip = {
trip_id:trips.length + 1,
seating_capacity:req.body.seating_capacity,
bus_license_number:req.body.bus_license_number,
origin: req.body.origin,
destination: req.body.destination,
trip_date: req.body.trip_date,
fare: req.body.farer,
status:"active"

};
for (let i =0; i<trips.length;i++){
  
  if(trips[i].trip_date===req.body.trip_date && trips[i].origin===req.body.origin
     && trips[i].destination===req.body.destination && trips[i].bus_license_number===req.body.bus_license_number)
     
    return res.status(200).send({ status: 'success', data: "this trip was created" });
    
         
      }

trips.push(newTrip);

// trip response
return res.status(201).send({ status: 'success', data: { 
    trip_id:req.body.trip_id,
    seating_capacity:req.body.seating_capacity,
    bus_license_number:req.body.bus_license_number,
    origin: req.body.origin,
    destination: req.body.destination,
    trip_date: req.body.trip_date,
    fare: req.body.farer,
    status:"active"
 } });

}



}
export default CreateTrip;