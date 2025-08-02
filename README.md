# Chef Khỉ

<p align="center">
    <img src="https://raw.githubusercontent.com/jrg-tools/chef-khi/refs/heads/main/public/logo.webp" alt="Chef Khỉ Logo" width="200">
</p>

<p align="center">
    <a href="https://status.jrg.tools/status/chef-khi"><img src="https://status.jrg.tools/api/badge/9/status" alt="Status" /></a>
    <img src="https://status.jrg.tools/api/badge/9/uptime" alt="Uptime" />
    <img src="https://status.jrg.tools/api/badge/9/avg-response" alt="Average Response Time" />
</p>

> [!WARNING]
> Set up the repository with the proper hooks. Run `pre-commit install` in the root directory of the repository.

Chef Khỉ is a cooking project aimed at sharing delicious and easy-to-make recipes, inspiring everyone to enjoy the art of cooking.

**Stack:**

- **Main:** Astro + React islands
- **Styling:** Tailwind CSS (Shadcn UI)
- **Authentication:** Clerk
- **Database:** Turso
- **Deployment:** Docker + Docker Compose (VPS)

## Local development

```sh
$ pnpm i
$ pnpm dev
```

### Environment variables

Copy the `.env.sample` file to `.env` and fill in the required environment variables.

## 🚀 Deployment

The deployment is triggered automatically on **pushes to the main branch**.
