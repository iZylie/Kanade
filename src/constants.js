const modules = [
	'CustomReactions',
	'Gambling',
	'Games',
	'Help',
	'Searches',
	'Social',
	'Utility',
];

const allModules = modules.map((m) => `• ${m}`).join('\n');

module.exports = { modules, allModules };
