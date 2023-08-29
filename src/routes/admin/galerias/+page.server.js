import { redirect } from "@sveltejs/kit";
import { db, sql } from '@vercel/postgres';

const client = () => db.connect({
  connectionString: process.env.POSTGRES_URL
});

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
    const access = cookies.get("access") == "true";

    if (!access) {
        throw redirect(302, "/login")
    }

    const galeriasBusca = await sql`SELECT * FROM galeria`;

    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
            galerias
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {

    const rawBody = await request.text();
    const body = new URLSearchParams(rawBody);
    const titulo = body.get('data-titulo');

    console.log(`Apagando galeria: ${titulo}`);

    await sql`DELETE FROM galeria WHERE titulo = $1`, [titulo];
  }
};