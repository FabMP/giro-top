import { useKnex } from '../../../hooks.server.js';
import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
    const access = cookies.get("access") == "true";

    if (!access) {
        throw redirect(302, "/login")
    }

    const { db } = await useKnex();
    const galeriasBusca = await db.table('galeria').select('*');

    const galerias = JSON.parse(JSON.stringify(galeriasBusca));

    return {
            galerias
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const { db } = await useKnex();

    const rawBody = await request.text();
    const body = new URLSearchParams(rawBody);
    const titulo = body.get('data-titulo');

    console.log(`Apagando galeria: ${titulo}`);

    await db('galeria').where({ titulo }).del();

    return { success: true };
  },
};

