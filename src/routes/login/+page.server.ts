import { redirect } from '@sveltejs/kit';

export const actions = {
    async default({ cookies }) {
        cookies.set("session", "123", {path: "/"});

        return redirect(302, "/");
    }
}