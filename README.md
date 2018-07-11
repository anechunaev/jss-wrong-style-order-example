# Example of wrong styles order in Chrome

Install dependencies: `npm i && cd server && npm i`.

Build project with `npm run build`

Start server with `npm start`. Server will be running at [localhost:8080](http://localhost:8080/). Wrong styles order on page [localhost:8080/Alert](http://localhost:8080/Alert).

Server source code is in directory `/server`. Directory `/server/config` contains webpack config for client and server, `/server/src` contains entry points for client/server and showcase application (`/server/src/app.tsx`). Showcase app is just react router with couple of react components from `/lib/**/spec/gemini.showcase.tsx`.