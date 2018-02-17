module.exports = {
	// headerPattern: /^(\w*)(?:\((.*)\))?\: (.*)$/,
	headerPattern: /^(\w*|\:\w*\: \w*)(?:\((.*)\))?\: (.*)$/,
	headerCorrespondence: [`type`, `scope`, `subject`],
	noteKeywords: [`BREAKING CHANGE`, `BREAKING CHANGES`],
	revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
	revertCorrespondence: [`header`, `hash`],
};
