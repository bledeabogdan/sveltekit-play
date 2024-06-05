import { redirect } from '@sveltejs/kit';

export const load = async function load({cookies   }) {
    cookies.delete("session", {path: "/"});

    return redirect(302, "/login");
};