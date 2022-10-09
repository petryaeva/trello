import {createLogger} from 'redux-logger';
import {BATCH} from 'redux-batched-actions';

const actionTransformer = action => {
	if (action.type === BATCH) {
		action.payload.type = action.payload.reduce((result, next) => {
			const prefix = result ? result + ' => ' : '';
			return prefix + next.type;
		}, '');

		return action.payload;
	}

	return action;
};

const level = 'info';

const logger = {};

for (const method in console) {
	if (typeof console[method] === 'function') {
		logger[method] = console[method].bind(console);
	}
}

logger[level] = function levelFn(...args) {
	const lastArg = args.pop();

	if (Array.isArray(lastArg)) {
		return lastArg.forEach(item => {
			console[level].apply(console, [...args, item]);
		});
	}

	console[level].apply(console, arguments);
};

export default createLogger({
	level,
	actionTransformer,
	logger,
	collapsed: true,
	duration: true,
});
