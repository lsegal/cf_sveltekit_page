import { redirect } from "@sveltejs/kit";

export const actions = {
  new: () => {
    throw redirect(302, `/game/${crypto.randomUUID()}`);
  },
  go: async ({ request }: { request: Request }) => {
    const data = await request.formData();
    throw redirect(302, `/game/${data.get("gameId")}`);
  }
}
