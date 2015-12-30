module.exports = {
	'ecmaFeatures': {
		'jsx': true,
		'modules': true,
		'classes': true,
		'blockBindings': true
	},
	'globals': {

	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'env': {
		'node': true
	},
 //0 for off, 1 for warning, 2 for error
	'rules': {
		'semi': [2, 'always'],
		'react/forbid-prop-types': 1,
		'react/jsx-boolean-value': 1,
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-curly-spacing': 1,
		'react/jsx-handler-names': 1,
		'react/jsx-indent-props': 1,
		'react/jsx-key': 1,
		'react/jsx-max-props-per-line': 1,
		'react/jsx-no-bind': 1,
		'react/jsx-no-duplicate-props': 1,
		'react/jsx-no-undef': 1,
		'react/jsx-pascal-case': 1,
		'react/jsx-sort-prop-types': 1,
		'react/jsx-sort-props': 1,
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/no-danger': 1,
		'react/no-deprecated': 1,
		'react/no-did-mount-set-state': 1,
		'react/no-did-update-set-state': 1,
		'react/no-direct-mutation-state': 1,
		'react/no-is-mounted': 1,
		'react/no-set-state': 1,
		'react/no-string-refs': 1,
		'react/no-unknown-property': 1,
		'react/react-in-jsx-scope': 1,
		'react/require-extension': 1,
		'react/self-closing-comp': 1,
		'react/sort-comp': 1,
		'react/wrap-multilines': 1
	},
	'plugins': [
		'react',
		'standard'
	]
};