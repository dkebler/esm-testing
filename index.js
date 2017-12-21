let opts = {
	dirname: __dirname + '/src',
	// http://stackoverflow.com/questions/2078915/a-regular-expression-to-exclude-a-word-string
	filter: /^(?!index)([^\.].*)\.js?$/,
	recursive: false,
	merge: true // remove or comment to have each file in /lib be a prop/key in library...see node-require-all
}
module.exports = require('@uci/require-all')(opts)
