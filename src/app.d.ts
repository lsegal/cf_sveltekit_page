// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				KV: KVNamespace;
			};
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
	}
}

export { };
