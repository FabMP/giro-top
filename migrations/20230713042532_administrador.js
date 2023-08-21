export const up = (knex) => {
    return knex.schema.createTable('administrador', function(table){
      table.increments('id');
      table.string('nome');
      table.string('password');
    })
  };
  
  export const down = (knex) => {
    return knex.schema.dropTable('administrador');
  };