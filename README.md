# ractive-rollup-demo

Demo of using [Rollup](http://rollupjs.org) and [rollup-plugin-ractive](https://github.com/rollup/rollup-plugin-ractive) to create the smallest possible self-contained bundle for a Ractive app. Note that because we're precompiling, we're able to use the runtime version of Ractive (which excludes the parser and is therefore a bit lighter).

## Building

```bash
git clone https://github.com/Rich-Harris/ractive-rollup-demo.git
cd ractive-rollup-demo
npm install
npm run build
```

## Running

```bash
open index.html
```
