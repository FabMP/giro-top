import bcrypt from 'bcrypt';

export const seed = async (knex) => {
  return knex('administrador').del()
    .then(function () {
      return knex('administrador').insert([
        {
          id: 1,
          nome: 'AdminGT',
          password: bcrypt.hashSync('aebe5m79', 10)
        }
      ]);
    })
};