import { createClient } from '@vercel/postgres';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const db = createClient();
    const galeriasBusca = await db.query(`SELECT * FROM galeria`);
    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
      galerias,
    };
}
