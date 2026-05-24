# portfolio-website.github.io

React portfolio website deployed to GitHub Pages at:

https://www.rajbeladiya.live

## Development

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm start
```

Create a production build:

```sh
npm run build
```

## Deployment

The full React source code lives on the `main` branch. GitHub Actions builds
that source and deploys the generated `build` output to GitHub Pages whenever
changes are pushed to `main`.

Do not commit the `build` folder to `main`; it is generated output and can be
recreated from the source code.
