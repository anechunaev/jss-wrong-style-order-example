gemini.suite('Alert', (suite) => {
	suite.setUrl('/Alert');

	gemini.suite('default', (suite) => {
		suite
			.setCaptureElements('*[data-capture="plain"]')
			.capture('plain')
	});

	gemini.suite('danger', (suite) => {
		suite
			.setCaptureElements('*[data-capture="danger"]')
			.capture('plain')
	});

	gemini.suite('with-title', (suite) => {
		suite
			.setCaptureElements('*[data-capture="with-title"]')
			.capture('plain')
	});

	gemini.suite('without-margin', (suite) => {
		suite
			.setCaptureElements('*[data-capture="without-margin"]')
			.capture('plain')
	});
});