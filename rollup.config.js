import ractive from 'rollup-plugin-ractive';

export default {
	entry: 'src/App.html',
	dest: 'bundle.js',
	plugins: [ ractive() ],
	external: [ 'ractive' ],
	globals: { ractive: 'Ractive' },
	format: 'iife',
	moduleName: 'App'
};
