import { sql } from '@vercel/postgres';


/** @type {import('./$types').PageLoad} */
export async function load() {
    const galeriasBusca = await sql`SELECT Titulo, Codigo, Link FROM galeria`;
    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    console.log(galerias)

    return {
      galerias,
    };
}