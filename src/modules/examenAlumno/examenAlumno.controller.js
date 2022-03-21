// const {
//  // validadores (no se si usarlos)


// } = require('./users.request.validators');
const {
  buscarExamenAlumno,
  crearExamenAlumno,
  modificarExamenAlumno,
  eliminarExamenAlumno,
  getExamenesAlumno
} = require('./examenAlumno.services');

const { sendResponse, controlErrores } = require('../../utils');
const ResponseMessages = require('../../constants/responseMessages');
//const SequelizeController = require("../../db/SequelizeController");


async function buscarExamenAlumnoController(req, res) {

  try {
    // const validationErr = validateCreateUserRequest(req);
    // if (validationErr) {
    //   return sendResponse(res, 422, {}, validationErr[0].msg);
    // }
   
    let examen = await buscarExamenAlumno(req.params);

    return sendResponse(res, 201, { ...examen }, ResponseMessages.genericSuccess);
  } catch (err) {
    return controlErrores(res, err);
  }
}

async function crearExamenAlumnoController(req, res) {
  try {
    // const validationErr = validateLoginRequest(req);
    // if (validationErr) {
    //   return sendResponse(res, 422, {}, validationErr[0].msg);
    // }

    const { alumno_id, examen_id, nota } = req.body;
    const data = await crearExamenAlumno({
      alumno_id, examen_id, nota
    });

    return sendResponse(res, 200, { ...data }, ResponseMessages.exitoCreacion);
  } catch (err) {
      return controlErrores(res, err);
  }
}

async function modificarExamenAlumnoController(req, res) {
  try {
    // const validationErr = validateChangeEmailRequest(req);
    // if (validationErr) {
    //   return sendResponse(res, 422, {}, validationErr[0].msg);
    // }

    const { nota } = req.body;
    const { id: id } = req.params;

  
    const data = await modificarExamenAlumno(id, nota);
    
    return sendResponse(res, 200, { ...data }, ResponseMessages.exitoModifica);
  } catch (err) {
    return controlErrores(res, err);
  }
}

async function eliminarExamenAlumnoController(req, res) {
  try {
    // const validationErr = validateChangePasswordRequest(req);
    // if (validationErr) {
    //   return sendResponse(res, 422, {}, validationErr[0].msg);
    // }

    const { id: id } = req.params;
    const data = await eliminarExamenAlumno(id);
    return sendResponse(res, 200, { ...data }, ResponseMessages.exitoBorrado);
  } catch (err) {
    return controlErrores(res, err);
  }
}

async function getExamenesAlumnoController(req, res) {
  try {
    const { alumno_id: alumno_id } = req.params;
    const data = await getExamenesAlumno(alumno_id);
    return sendResponse(res, 200, { ...data }, ResponseMessages.genericSuccess);
  } catch (err) {
    return controlErrores(res, err);
  }
}

module.exports = {
  buscarExamenAlumnoController,
  crearExamenAlumnoController,
  modificarExamenAlumnoController,
  eliminarExamenAlumnoController,
  getExamenesAlumnoController,
};
