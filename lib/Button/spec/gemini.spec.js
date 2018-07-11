const buttonScenario = (suite, selector) => {
	suite
		.setCaptureElements(`*[data-capture="${selector}"]`)
		.before(function(_actions, find) {
			this.button = find(`*[data-el="${selector}"]`);
		})
		.capture(selector + '-plain')
		.capture(selector + '-hovered', function(actions) {
			actions.mouseMove(this.button);
		})
		.capture(selector + '-pressed', function(actions) {
			actions.mouseDown(this.button);
		})
		.capture(selector + '-clicked', function(actions) {
			actions.mouseUp(this.button);
		})
}

gemini.suite('Button', function(suite) {
	suite.setUrl('/Button');

	gemini.suite('default', function(suite) {
		buttonScenario(suite, 'plain');
	});

	gemini.suite('expanded', function(suite) {
		buttonScenario(suite, 'expanded');
	});

	gemini.suite('primary', function(suite) {
		buttonScenario(suite, 'primary');
	});

	gemini.suite('disabled', function(suite) {
		buttonScenario(suite, 'disabled');
	});

	gemini.suite('primary-expanded', function(suite) {
		buttonScenario(suite, 'primary-expanded');
	});

	gemini.suite('primary-disabled', function(suite) {
		buttonScenario(suite, 'primary-disabled');
	});

	gemini.suite('href', function(suite) {
		buttonScenario(suite, 'href');
	});
});