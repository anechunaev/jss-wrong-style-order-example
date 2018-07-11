import * as React from 'react';
import Alert from '../index';
export default (function () { return (React.createElement("div", null,
    React.createElement("div", { "data-capture": "plain" },
        React.createElement(Alert, null, "Lorem ipsum")),
    React.createElement("div", { "data-capture": "danger" },
        React.createElement(Alert, { danger: true }, "Lorem ipsum")),
    React.createElement("div", { "data-capture": "with-title" },
        React.createElement(Alert, { title: "Lorem ipsum" }, "Dolor sit amert")),
    React.createElement("div", { "data-capture": "without-margin" },
        React.createElement(Alert, { withMargin: false }, "Lorem ipsum")))); });
//# sourceMappingURL=gemini.showcase.js.map