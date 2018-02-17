const debug = require('debug')('app:index');

const Q = require(`q`);
const conventionalChangelog = require(`./conventional-changelog`);
const parserOpts = require(`./parser-opts`);
const recommendedBumpOpts = require(`./conventional-recommended-bump`);
const writerOpts = require(`./writer-opts`);

module.exports = Q.all([
	conventionalChangelog,
	parserOpts,
	recommendedBumpOpts,
	writerOpts,
]).spread(
	(conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts) => {
		debug('conventionalChangelog', conventionalChangelog)
		debug('parserOpts', parserOpts);
		debug('recommededBumpOpts', recommendedBumpOpts);
		debug('writerOpts', writerOpts)

		return {
			conventionalChangelog,
			parserOpts,
			recommendedBumpOpts,
			writerOpts,
		};
	},
);
