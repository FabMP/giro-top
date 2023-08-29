import { redirect } from "@sveltejs/kit";
import bcrypt from 'bcrypt';
import { db, sql } from '@vercel/postgres';

const client = () => db.connect({
    connectionString: process.env.POSTGRES_URL
});
    
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const nomeForm = data.get('nome');
        const passwordForm = data.get('password');
        const [{adm}] = await sql`SELECT * FROM administrador WHERE nome = ${nomeForm}`;
        const [{password}] = await sql`SELECT password FROM administrador WHERE nome = ${nomeForm}`
        const senha = bcrypt.compare(passwordForm, password);

        if (adm && senha) {
            cookies.set("access", "true", { path: "admin/galerias", SameSite: "strict",  });
            throw redirect(302, 'admin/galerias');
          }
          
            return {
                message: "Nome ou senha incorreta"
           }
        } 
    }