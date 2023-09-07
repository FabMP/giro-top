import fs from 'fs';
import path from 'path';
import { redirect } from "@sveltejs/kit"
import { db } from '@vercel/postgres';

const client = () => db.connect({
    connectionString: process.env.POSTGRES_URL+"?sslmode=require"
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
        const connection = client();
        const data = await request.formData();
        /*const arquivo = await data.get('anexar');*/
        const titulo = await data.get('titulo');
        const codigo = await data.get('codigo');
        const link = await data.get('link');

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
            console.log(titulo, codigo, link)

        await connection.sql`INSERT INTO galeria (titulo, codigo, link) VALUES ($1, $2, $3)`, [titulo, codigo, link];
    }
}
