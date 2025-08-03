const {FlightService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {SuccessResponse, ErrorResponse} = require("../utils/common");

/*** 
 POST : /flights
 req-body {
    flightNumber: "1234",
    airplaneId: 1,
    departureAirportId: 1,
    arrivalAirportId: 1,
    departureTime: "2022-01-01T10:00:00.000Z",
    arrivalTime: "2022-01-01T10:00:00.000Z",
    price: 100,
    boardingGate: "A",
    totalSeats: 100
 }
***/

async function createFlight(req, res){
     try{
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        })
        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
     }
     catch(error){
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
     }
}


/*** 
 PATCH : /flights/:id
 req-body {id, data}
***/
async function updateFlight(req, res){
     try{
        const flight = await FlightService.updateFlight(req.params.id, req.body);
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse); 
    }
}


module.exports = {
    createFlight,
    updateFlight
}