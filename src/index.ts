/**
 * Welcome to Cloudflare Workers! This is your Zaraz Context Enricher.
 *
 * Learn more about Workers at https://developers.cloudflare.com/workers/
 * Learn more about Context Enrichment at https://developers.cloudflare.com/zaraz/advanced/context-enricher/
 */

import type { ZarazContext } from "@mackenly/zaraz-tools/";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const { system, client, config } = await request.json() as ZarazContext;
		
		// Here goes your modification to the system or client objects.
		/*
		  For example, to change the country to a fictitious "Pirate's Island" ("PI"), use:
		  system.device.location.country = 'PI';
		*/

		return new Response(JSON.stringify({ system, client, config }));
	},
} satisfies ExportedHandler<Env>;
