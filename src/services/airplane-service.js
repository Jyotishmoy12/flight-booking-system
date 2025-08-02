const {AirPlaneRepository} = require("../repositories");
const  {AppError} = require("../utils/errors/app-error");
const {StatusCodes} = require("http-status-codes");
const airplaneRepository = new AirPlaneRepository();

async function createAirplane(data){
    console.log("Inside Services")
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name === "SequelizeValidationError"){
            let explnanantion =[];
            error.errors.forEach(err => {
                explnanantion.push(err.message);
            })
            throw new AppError('Cannot create a new airplane object', StatusCodes.BAD_REQUEST);
        }
       throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error){
        throw new AppError('Cannot fetch data of all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createAirplane,
    getAirplanes
};