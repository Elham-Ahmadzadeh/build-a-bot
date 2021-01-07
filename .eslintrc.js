module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
	parser: 'babel-eslint',
	"extends": "airbnb",

  },

  rules: {

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	"linebreak-style": 0,
	"eol-last": 0,
	"comma-dangle": ["error", "never"],
	"no-tabs": 0,

  },

}
