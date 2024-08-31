# Zaraz Context Enricher Template
Starter template for Cloudflare Zaraz Context Enricher

## Overview
Need to enrich the context of your Cloudflare Workers with additional data? This template is a starting point for building a Cloudflare Worker that uses the [Zaraz Context Enricher](https://developers.cloudflare.com/zaraz/advanced/context-enricher/) to add additional data to the context of your requests.

> [!TIP]
> If you need help configuring Zaraz for your project, I am a Cloudflare Zaraz Certified Developer and am available for consulting. [Contact me](https://tricitiesmediagroup.com/contact) for more information.

## Usage
1. Use this template to create a new repository in your GitHub account.
2. Clone the repository to your local machine.
3. `npm i` to install the dependencies.
4. Edit the `src/index.ts` file to add your own logic for enriching the context of your requests.
5. After configuring CD (see below), push your changes to GitHub to deploy your worker.

> [!IMPORTANT]
> Local development does not currently work with the Zaraz Context Enricher. You must deploy your worker to Cloudflare to test it. This is because the Zaraz context is not passed in within the local development environment.

## Continuous Deployment via Actions
This template includes a GitHub Actions workflow that will deploy your worker to Cloudflare when you push changes to the `main` branch. To configure this workflow, you will need to add the following secrets to your GitHub repository:
- `CLOUDFLARE_API_TOKEN`: Create a token using the `Edit Workers` permission template or open [this deeplink](https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22account_settings%22%2C%22type%22%3A%22read%22%7D%2C%7B%22key%22%3A%22memberships%22%2C%22type%22%3A%22read%22%7D%2C%7B%22key%22%3A%22page%22%2C%22type%22%3A%22edit%22%7D%2C%7B%22key%22%3A%22user_details%22%2C%22type%22%3A%22read%22%7D%2C%7B%22key%22%3A%22workers_kv_storage%22%2C%22type%22%3A%22edit%22%7D%2C%7B%22key%22%3A%22workers_r2%22%2C%22type%22%3A%22edit%22%7D%2C%7B%22key%22%3A%22workers_routes%22%2C%22type%22%3A%22edit%22%7D%2C%7B%22key%22%3A%22workers_scripts%22%2C%22type%22%3A%22edit%22%7D%2C%7B%22key%22%3A%22workers_tail%22%2C%22type%22%3A%22read%22%7D%5D&name=Zaraz+Context+Enricher+GH+Action+CD&accountId=*&zoneId=all) to prefill the token permissions.

Alternatively, you can manually `npm run deploy` to deploy your worker from your local machine or other CI/CD system.

## Resources
- [Zaraz Context Enricher documentation](https://developers.cloudflare.com/zaraz/advanced/context-enricher/)
- [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
- [Worker Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/)
- [Use Service Bindings if you need to send a request to another Worker on the same account](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/)

## License
This project is open source and available under the [Apache 2.0](LICENSE). Copyright 2024 [Tricities Media Group, LLC](https://tricitiesmediagroup.com).