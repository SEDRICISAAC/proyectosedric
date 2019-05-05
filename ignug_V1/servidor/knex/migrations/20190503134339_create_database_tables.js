exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('instituciones', function(table) {
        table.increments('id_institucion').primary();
        table.string('nombre');
        table.string('telefono');
        table.string('direccion');
    }),

    knex.schema.createTable('modalidad', function(table) {
        table.increments('id_modalidad').primary();
        table.string('nombre');
    }),

    knex.schema.createTable('carrera', function(table) {
        table.increments('codigo_carrera').primary();
        table.string('nombre');
        table.integer('id_modalidad').references('id_modalidad').inTable('modalidad');
    }),

    knex.schema.createTable('malla', function(table) {
        
        table.increments('id_malla').primary();
        table.date('fecha_implementacion');
        table.integer('codigo_carrera').references('codigo_carrera').inTable('carrera');
    }),

    knex.schema.createTable('detalle_institucion', function(table) {
        table.increments('id_cod_detalle').primary();
        table.integer('id_institucion').references('id_institucion').inTable('instituciones');
        table.integer('codigo_carrera').references('codigo_carrera').inTable('carrera');
    }),

    knex.schema.createTable('semestre', function(table) {
        table.increments('cod_semestre').primary();
        table.integer('id_malla').references('id_malla').inTable('malla');
    }),

    knex.schema.createTable('asignatura', function(table) {
        table.increments('codigo_asignatura').primary();
        table.string('nombre');
        table.integer('codigo_carrera').references('codigo_carrera').inTable('carrera');
        table.integer('id_malla').references('id_malla').inTable('malla');
        table.integer('cod_semestre').references('cod_semestre').inTable('semestre');
    }),

    knex.schema.createTable('campo_de_formaion', function(table) {
        table.increments('id_campo').primary();
        table.string('nombre');
        table.integer('codigo_asignatura').references('codigo_asignatura').inTable('asignatura');
    }),

    knex.schema.createTable('unidad_curricular', function(table) {
        table.increments('cod_unidad').primary();
        table.string('nombre');
        table.integer('codigo_asignatura').references('codigo_asignatura').inTable('asignatura');
    }),

    knex.schema.createTable('coorrequisito', function(table) {
        table.increments('id_coorrequisito').primary();
        table.string('detalle');
        table.integer('codigo_asignatura').references('codigo_asignatura').inTable('asignatura');
    }),

    knex.schema.createTable('prerrequisito', function(table) {
        table.increments('id_prerrequisito').primary();
        table.string('detalle');
        table.integer('codigo_asignatura').references('codigo_asignatura').inTable('asignatura');
    })
    ])
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('instituciones'),
        knex.schema.dropTable('modalidad'),
        knex.schema.dropTable('carrera'),
        knex.schema.dropTable('malla'),
        knex.schema.dropTable('detalle_institucion'),
        knex.schema.dropTable('semestre'),
        knex.schema.dropTable('asignatura'),
        knex.schema.dropTable('campo_de_formaion'),
        knex.schema.dropTable('unidad_curricular'),
        knex.schema.dropTable('coorrequisito'),
        knex.schema.dropTable('prerrequisito')
    ]);
  };