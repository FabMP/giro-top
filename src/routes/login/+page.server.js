import { error, redirect } from "@sveltejs/kit";
import bcrypt from 'bcrypt';
import { useKnex } from "../../hooks.server.js";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const nomeForm = data.get('nome');
        const passwordForm = data.get('password');
        const { db } = await useKnex();
        const [adm] = await db.table('administrador').where({ nome: nomeForm });
        const senha = bcrypt.compareSync(passwordForm, adm.password);

        console.log('password comparison result:', senha);

        if (adm && nomeForm == adm.nome && senha) {
            cookies.set("access", "true", { path: "admin/galerias", SameSite: "strict",  });
            throw redirect(302, 'admin/galerias');
          }
          
            return {
                message: "Nome ou senha incorreta"
           }
        } 
        }