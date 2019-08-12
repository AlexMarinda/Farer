
import {findQueryByDestination, findQueryByOrigin} from '../helpers/index';
import DbHelper from './../helpers/DbHelper';
import Respond from '../helpers/responseHandle';
const { response } = Respond;

//import {verifyToken} from '../../helpers';
// trip class

class CreateTrip {
    
// trip created


static  async trip(req, res) {
const newTrip = {
seating_capacity:req.body.seating_capacity,
bus_license_number:req.body.bus_license_number,
origin: req.body.origin,
destination: req.body.destination,
trip_date: req.body.trip_date,
fare: req.body.fare,
status:"active"

};

 const { error, response: result } = await DbHelper.queryAll('trips');
 const { rows: trips } = result;
 const trip = result.rows;

for (let i =0; i<trip.length;i++){
  if(trip[i].trip_date===req.body.trip_date && trip[i].origin===req.body.origin
     && trip[i].destination===req.body.destination && trip[i].bus_license_number===req.body.bus_license_number)
     
    return res.status(403).json({ status: 403, error:"trip was provided" });
    
         
     }


const { error: errors, response: resp } = await DbHelper.insert('trips', newTrip);
if (errors) {

  return res.status(500).json({ status: 500, error:'Oops! unexpected things happened into server' });
}
const { rows, rowCount } = resp;
if (rowCount > 0) {
  const [addedTrip] = rows;
   return res.status(201).json({ status: 201, data:addedTrip });
}
 return res.status(404).json({ status: 404, error:'trips not found!' });
}

// get all trip

static  getAllTrip(req, res) {
    if(trips.length > 0){
     return  res.status(200).json({ status:200, message:'Trip successful created', data: trips});
    }
    return res.status(404).json({ status: 404, message:'trips not found!' });
}

// specific trip

static  getSpecificTrip(req, res) {
    const findTrip =   trips.find(t => t.trip_id === parseInt(req.params.trip_id));
    if(findTrip)
         return res.status(200).send({ status:200,message:'success to get specific trip' , data: findTrip});
      return res.status(404).send({ status: 404, message: 'trip not found!'
      });

}

//filter trips using origin or destination,both
static filterTrips (req, res) {
  const { destination, origin } = req.query;
  if (trips.length === 0)  return res.status(404).send({ status: 404,
      message:'trip not found!'
     }); 
  try {
    const foundDestination = findQueryByDestination(destination);
    const foundOrigin = findQueryByOrigin(origin);
    if (foundDestination.length >= 1) return res.status(200).send({ status:200,message: 'success to filter destiantion', data: foundDestination});                                    
    if (foundOrigin.length >= 1)  return res.status(200).send({ status:200,message: 'success to get filter origin', data: foundOrigin}); 
                                   return res.status(404).send({ status: 404, message: "your filter direction not found"});
                                  
    // next();
  // eslint-disable-next-line no-empty
  } catch (error) {
    console.log(error);
  }
  return true;
}




// cancel trip

static  cancelTrip(req, res) {
    const findTrip =   trips.find(t => t.trip_id === parseInt(req.params.trip_id));
    if(findTrip)

    findTrip.status = 'unactive';
       
  
         res.status(200).send({ status:200,message:  'Trip cancelled successfully'});

        return res.status(404).send({ status: 404, 
        message:'trip not found!'
      });

}

static  activeTrip(req, res) {
  const findTrip =   trips.find(t => t.trip_id === parseInt(req.params.trip_id));
  if(findTrip)

  findTrip.status = "active";
     

       res.status(200).send({ status: 200, message: 'Trip activety successfully'});

      return res.status(404).send({ status: 404,  message:'trip not found!'});

}


}
export default CreateTrip;