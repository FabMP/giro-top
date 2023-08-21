import { useKnex } from '../../../hooks.server.js';
import fs from 'fs';
import path from 'path';
import { redirect } from "@sveltejs/kit"

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
        const { db } = await useKnex();

        const fileExtension = path.extname(arquivo.name);
        console.log(fileExtension)

        const createFilePath = path.join(process.cwd(), 'public', `logo-${titulo}${fileExtension}`)

        const filePath = `public/logo-${titulo}${fileExtension}`

        const buffer = await arquivo.arrayBuffer()

        const directoryPath = path.join(process.cwd(), 'public');
        
            fs.writeFile(createFilePath, new Uint8Array(buffer), (err) => {
                if (err) throw err;
                console.log(`Arquivo salvo em: ${createFilePath}`);
            });

        await db('galeria').insert({ titulo: titulo, codigo: codigo, link: link, logo_path: filePath });
    }
}
