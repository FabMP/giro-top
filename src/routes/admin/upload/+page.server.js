import fs from 'fs';
import path from 'path';
import { redirect } from "@sveltejs/kit"
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
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const arquivo = await data.get('anexar');
        const titulo = await data.get('titulo');
        const codigo = await data.get('codigo');
        const link = await data.get('link');

        const fileName = arquivo.name;

        const fileExtension = path.extname(fileName);

        const filePath = path.join(__dirname, '..', '..', '..', 'public', `logo-${titulo}${fileExtension}`);


        const buffer = await new Response(arquivo.stream()).arrayBuffer();
        fs.writeFileSync(filePath, new Uint8Array(buffer));


        await sql`INSERT INTO galeria (titulo, codigo, link, logo_path) VALUES ($1, $2, $3, $4)`, [titulo, codigo, link, filePath];
    }
}