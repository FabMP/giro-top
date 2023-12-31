import { redirect } from "@sveltejs/kit";
import { db, sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

const client = () => db.connect({
    connectionString: process.env.POSTGRES_URL
});
    
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const nomeForm = data.get('nome');
        const passwordForm = data.get('password');
        const adm = await sql`SELECT * FROM administrador WHERE nome = ${nomeForm}`;
        const passwordResult = await sql`SELECT password FROM administrador WHERE nome = ${nomeForm}`

        const password = passwordResult.rows[0].password;

        console.log(password)

        const bate = bcrypt.compareSync(passwordForm, password);

        if (adm && bate) {
            cookies.set("access", "true", { path: "admin/galerias", SameSite: "strict"});
            throw redirect(302, 'admin/galerias');
          }
          
            return {
                message: "Nome ou senha incorreta"
           }
        } 
    }