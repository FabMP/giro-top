import { db } from '@vercel/postgres';

const client = () => db.connect({
  connectionString: process.env.POSTGRES_URL+"?sslmode=require"
});


/** @type {import('./$types').PageLoad} */
export async function load() {
    const connection = client();
    const galeriasBusca = await connection.sql`SELECT titulo, link, codigo FROM galeria`;
    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
      galerias,
    };
}