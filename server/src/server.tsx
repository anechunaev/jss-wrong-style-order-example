import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Chain } from './client';
import { SheetsRegistry } from 'react-jss';
import * as csso from 'csso';
import * as Express from 'express';

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const app = Express();

const pageTemplateHandler = async (req: Express.Request, res: Express.Response) => {
	const route = {};
	const sheets = new SheetsRegistry();
	const components = (
		<StaticRouter location={req.url} context={route}>
			<Chain registry={sheets} />
		</StaticRouter>
	);

	const html = ReactDOMServer.renderToString(components);

	res.send(`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>test server</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
			<style type="text/css" id="server-side-styles">${csso.minify(sheets.toString()).css}</style>
			<!-- order.styles -->
		</head>
		<body>
			<div data-render="ssr" id="main">${html}</div>
			<script defer src="/dist/client.js"></script>
		</body>
		</html>
	`);
}

app.use('/dist', Express.static('dist/public'));
app.all('/', pageTemplateHandler);
app.all('/:component', pageTemplateHandler);

app.all('*', (err: any, _req: Express.Request, _res: Express.Response, _next: Express.NextFunction) => {
	//tslint:disable-next-line
	console.error(err);
});
app.get('*', (req, res, _next) => {
	if (req.accepts('json')) {
		res.status(404).send({ code: 404, error: true, message: 'Not found' });
	} else {
		res.status(404).type('txt').send('Not found');
	}
});

process.on('unhandledRejection', (reason, p) => {
	//tslint:disable-next-line
	console.error("Unhandled Rejection at:\n", p, "\n\nReason: ", reason);
});
app.listen(+PORT, HOST, () => {
	//tslint:disable-next-line
	console.log(`Server started on ${HOST}:${PORT}`);
});