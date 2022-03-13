const Sequelize = require('sequelize');

const AlumnoModel = require("../models/alumno.model");
const AsignaturaModel = require('../models/asignatura.model');
const CursoModel = require("../models/curso.model");

const db = {}; 	// Inicializo la base de datos

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
	  host: process.env.DB_HOST,
	  port: process.env.DB_PORT,
	  dialect: process.env.DB_DIALECT,
	  logging: process.env.DB_LOGGING !== true ? console.log("Logueado con exito") : false,
	  benchmark: true,
	  pool: {
		idle: process.env.DB_CONNECTION_IDLE,
	  },

	},
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;




Alumno = AlumnoModel(sequelize, Sequelize);
Curso = CursoModel(sequelize, Sequelize);
Asignatura = AsignaturaModel(sequelize, Sequelize);

Asignatura.belongsTo(Curso, { foreignKey: 'curso_id' });
Curso.hasMany(Asignatura, { foreignKey: 'id' } );

db.Alumno = Alumno;
db.Curso = Curso;
db.Asignatura = Asignatura;



module.exports = db;

  


