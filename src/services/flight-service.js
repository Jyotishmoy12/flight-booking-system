const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const flightRepository = new FlightRepository();
//const {compareTime} = require("../utils/helpers/datetime-helpers");
const { Op } = require('sequelize');
async function createFlight(data) {
    try {
        // const {arrivalTime, departureTime} = data;
        // if(!compareTime(arrivalTime, departureTime)){
        //     throw new AppError("Arrival time must be greater than departure time", StatusCodes.BAD_REQUEST);
        // }
        const flight = await flightRepository.create(data);
        return flight;
    }
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    let customFilter = {}
    let sortFilter = []
    const endingTripTime = "23:59:00"
    // tripes - MUM-DEL
    // departureAirportId = MUM
    // arrivalAirportId = DEL
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        // add a check that they are not same
        // if (departureAirportId === arrivalAirportId) {
        //     throw new AppError("Departure and arrival airport cannot be same", StatusCodes.BAD_REQUEST);
        // }
    }
    if (query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        console.log(minPrice, maxPrice);
        customFilter.price = {
            [Op.between]: [minPrice, maxPrice === undefined ? 20000 : maxPrice]
        }
    }
    if(query.Travelers){
        customFilter.totalSeats = {
            [Op.between]: [query.Travelers, query.tripDate + endingTripTime]
        }
    }
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.gte]: query.tripDate
        }
    }
    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param)=>param.split('_'));
        sortFilter = sortFilters
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter);
        return flights;
    } catch (error) {
        throw new AppError('Cannot get all flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

module.exports = {
    createFlight,
    getAllFlights
};