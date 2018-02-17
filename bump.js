const conventionalRecommendedBump = require(`conventional-recommended-bump`);
const crb = require('./conventional-recommended-bump')
console.log('crb', crb);


conventionalRecommendedBump(
	{
		// preset: `emoji`,
		whatBump: crb.whatBump
	}, crb.parserOpts,
	(error, result) => {
		console.log(result.releaseType); // 'major'
	},
);
