# SSR Error Boundaries in Next 15

This project shows different scenarios of Error Boundaries interacting with Server Components in Next 15. It's main purpose is to compare it to [the behavior in Next 14](https://github.com/jandriescher/ssr-error-boundaries-next-14).

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Scenarios

1. Throwing Server Component without Error Boundary on [http://localhost:3000/no-error-boundary](http://localhost:3000/no-error-boundary)

2. Error Boundary Only on [http://localhost:3000/error-boundary-only](http://localhost:3000/error-boundary-only)

3. Error Boundary Wrapped in Div on [http://localhost:3000/error-boundary-plus-div](http://localhost:3000/error-boundary-plus-div)

4. Error Boundary Wrapped in Provider on [http://localhost:3000/error-boundary-plus-provider](http://localhost:3000/error-boundary-plus-provider)
