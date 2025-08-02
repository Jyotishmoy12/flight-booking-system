const {AirPlaneRepository} = require("../repositories");
const  AppError = require("../utils/errors/app-error");
const {StatusCodes} = require("http-status-codes");
const airplaneRepository = new AirPlaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name === "SequelizeValidationError"){
            let explanation =[];
            error.errors.forEach(err => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
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

async function getAirplane(id){
    try{
        const airplane = await airplaneRepository.get(id);
        return airplane;
    }
    catch(error){
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data for individual airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id){
    try{
        const response = await airplaneRepository.destroy(id);
        return response;
    }
    catch(error){
         if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not present', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data){
    try{
        const update = await airplaneRepository.update(id, data);
        return update;
    }
    catch(error){
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to update is not present', StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
};