const tailwindConfig = require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'commonjs',
  },
});

module.exports = {
  plugins: {
    tailwindcss: require('./tailwind.config.ts').default,
    autoprefixer: {},
  },
};
