const {AirPlaneRepository} = require("../repositories");
const {AppError} = require("../utils/errors/app-error");
const {StatusCodes} = require("http-status-codes");
const airplaneRepository = new AirPlaneRepository();

function createAirplane(data){
    console.log("Inside Services")
    try{
        const airplane = airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        console.log(error);
        if(error.name == "TypeError"){
            throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw error;
    }
}

module.exports = {
    createAirplane
};