function addRowLockonFlights(flightId){
    return `SELECT * from Flights WHERE flights.id = ${flightId} FOR UPDATE;`
}
module.exports = {addRowLockonFlights}