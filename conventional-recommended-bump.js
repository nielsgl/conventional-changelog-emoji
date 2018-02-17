const debug = require('debug')('app:conventional-recommended-bump');

module.exports = {
	whatBump: commits => {
		let level = 2;
		let breakings = 0;
		let features = 0;

		commits.forEach(commit => {
			debug('commit', commit);
			if (commit.notes.length > 0) {
				breakings += commit.notes.length;
				level = 0;
			} else if (commit.type.match(/feat/)) {
				features += 1;
				if (level === 2) {
					level = 1;
				}
			}
		});

		debug('level', level);
		return {
			level: level,
			reason: `There are ${breakings} BREAKING CHANGES and ${features} features`,
		};
	},

	parserOpts: {
		// headerPattern: /^(\w*)(?:\((.*)\))?\: (.*)$/,
		headerPattern: /^(\w*|\:\w*\: \w*)(?:\((.*)\))?\: (.*)$/,
		headerCorrespondence: [`type`, `scope`, `subject`],
		noteKeywords: `BREAKING CHANGE`,
		revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
		revertCorrespondence: [`header`, `hash`],
	},
};
