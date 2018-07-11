import * as React from 'react';
import Button from '../index';
export default (function () { return (React.createElement("div", null,
    React.createElement("div", { "data-capture": "plain" },
        React.createElement(Button, { "data-el": "plain" }, "Hello world!")),
    React.createElement("div", { "data-capture": "expanded" },
        React.createElement(Button, { "data-el": "expanded", expanded: true }, "Hello world!")),
    React.createElement("div", { "data-capture": "primary" },
        React.createElement(Button, { "data-el": "primary", primary: true }, "Hello world!")),
    React.createElement("div", { "data-capture": "disabled" },
        React.createElement(Button, { "data-el": "disabled", disabled: true }, "Hello world!")),
    React.createElement("div", { "data-capture": "primary-expanded" },
        React.createElement(Button, { "data-el": "primary-expanded", expanded: true, primary: true }, "Hello world!")),
    React.createElement("div", { "data-capture": "primary-disabled" },
        React.createElement(Button, { "data-el": "primary-disabled", disabled: true, primary: true }, "Hello world!")),
    React.createElement("div", { "data-capture": "href" },
        React.createElement(Button, { "data-el": "href", href: "#" }, "Hello world!")))); });
//# sourceMappingURL=gemini.showcase.js.map