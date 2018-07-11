import variables from '../variables';
const STEP = variables.metricsStep;

export default {
	step: STEP,
	box: {
		primary: {
			content: [2 * STEP, STEP, 2 * STEP, STEP],
			wrapper: [2 * STEP, 0, 2 * STEP, 0],
			minHeight: 8 * STEP,
		},
		default: {
			content: [2 * STEP, STEP, 2 * STEP, STEP],
			wrapper: [2 * STEP, 0, 2 * STEP, 0],
			minHeight: 8 * STEP,
		},
		secondary: {
			content: [STEP, STEP, STEP, STEP],
			wrapper: [2 * STEP, 0, 2 * STEP, 0],
			minHeight: 5 * STEP,
		},
	},
};