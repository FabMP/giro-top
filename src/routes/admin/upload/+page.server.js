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
        /*const arquivo = await data.get('anexar');*/
        const titulo = (await data.get('titulo')).toString();
        const codigo = (await data.get('codigo')).toString();
        const link = (await data.get('link')).toString();

        /*const fileName = arquivo.name;

        const fileExtension = path.extname(fileName);

        const filePath = `./public/logo-${encodeURIComponent(titulo)}${fileExtension}`

        if (!fs.existsSync('./public')) {
            fs.mkdirSync('./public');
        }

        const buffer = await arquivo.arrayBuffer()

        fs.writeFile(filePath, new Uint8Array(buffer), (err) => {
                if (err) throw err;
            });
            */
        await sql`INSERT INTO galeria (titulo, codigo, link) VALUES ($1, $2, $3)`, [titulo, codigo, link];
    }
}
