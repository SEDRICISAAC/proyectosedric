const knex = require('./knex/knex')

module.exports = {
    getAll,
    post
};

function getAll(req, res) {
    knex.select()
        .from('asignatura')
        .then( asignatura => res.send(asignatura));
}

function post(req, res) {    
    knex('asignatura').insert({
        nombre: req.body.nombre,
        codigo_carrera: req.body.codigo_carrera,
        id_malla: req.body.id_malla,
        cod_semestre: req.body.cod_semestre
    })
    .then(() => {
        knex.select()
            .from('asignatura')
            .then(asignatura => res.send(asignatura));
    })  
};
