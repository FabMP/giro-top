import knex from 'knex';
import { knexConfig } from '../knexconfig.js';
import { redirect } from '@sveltejs/kit';


  export const useKnex = async() => {
    const db = knex(knexConfig);

    return {
      db,
    };
  }