import { redirect } from '@sveltejs/kit';

export const load = async function load({cookies   }) {
    console.log("Deleting session cookie...");
    cookies.delete("session", {path: "/"});

    console.log("Redirecting to login page...")
    return redirect(302, "/login");
};