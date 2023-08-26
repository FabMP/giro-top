import { createClient } from '@vercel/postgres';
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
    const access = cookies.get("access") == "true";

    if (!access) {
        throw redirect(302, "/login")
    }

    const db = createClient();
    const galeriasBusca = await db.query(`SELECT * FROM galeria`);

    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
            galerias
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const db = createClient();

    const rawBody = await request.text();
    const body = new URLSearchParams(rawBody);
    const titulo = body.get('data-titulo');

    console.log(`Apagando galeria: ${titulo}`);

    await db.query(`DELETE FROM galeria WHERE titulo = $1`, [titulo]);

    return { success: true };
  },
};
