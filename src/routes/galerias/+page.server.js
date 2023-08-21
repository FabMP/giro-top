import { useKnex } from '../../hooks.server';
import bcrypt from 'bcrypt';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const { db } = await useKnex();
    const galeriasBusca = await db.table('galeria').select('*');
    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
      galerias,
    };
  }

