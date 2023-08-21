const up = (knex) => {
    return knex.schema
      .createTable('galeria', function (table){
        table.increments('id');
        table.string('titulo');
        table.string('codigo');
        table.string('link');
        table.string('logo_path')
      })
  };
  
  const down = (knex) => {
    return knex.schema
      .dropTable('galeria');
  };
  
  module.exports = { up, down };