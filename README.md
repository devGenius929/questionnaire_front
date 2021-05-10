This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the libraries:

```bash
npm install
```

Then create the .env file:

```bash
cp .env.local.sample .env
```

Ask for the Auth0 keys on our Slack channel.

Then you can run the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Testing

You can run the unit tests.

```bash
npm run test
```

### Integration test

Open a terminal and run the server:

```bash
npm run dev
```

Then run our end-to-end test:

```bash
npm run e2e
```

## Deploy

The deployment is done automatically when a new pull request is merged to our master branch.
