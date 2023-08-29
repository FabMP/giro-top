import { db, sql } from '@vercel/postgres';

const client = () => db.connect({
  connectionString: process.env.POSTGRES_URL
});


/** @type {import('./$types').PageLoad} */
export async function load() {
    const galeriasBusca = await sql`SELECT titulo, link, codigo, logo_path FROM galeria`;
    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
      galerias,
    };
}