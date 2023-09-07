import { db, sql } from '@vercel/postgres';

const client = () => db.connect({
  connectionString: process.env.POSTGRES_URL+"?sslmode=require"
});


/** @type {import('./$types').PageLoad} */
export async function load() {
    const galeriasBusca = await sql`SELECT titulo, link, codigo FROM galeria`;
    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
      galerias,
    };
}