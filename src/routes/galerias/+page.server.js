import { sql } from '@vercel/postgres';


/** @type {import('./$types').PageLoad} */
export async function load() {
    const galerias = await sql`SELECT Titulo, Codigo, Link FROM galeria`;
    const galeriasA = JSON.parse(JSON.stringify(galeriasBusca));

    console.log(galerias)

    return {
      galerias,
    };
}