


* [How to build and run from source](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run)

```
yarn
yarn watch
```

Issues1: Sometimes `yarn watch` fails. To solve, remove `node_modules` and rerun `yarn && yarn watch`

## To add additional files in the build

* add any files to be added in `https://github.com/reboxjs/vscode/blob/master/build/gulpfile.editor.js#L98`
* make sure those added folders are included in `vs/tsconfig.monaco.json`
* And types are included in `typings/additional.d.ts`

Note: Due to some caching, we need to flip between `build/additional-files.ts` to `.js` or `.ts` to make the compile
to work properly.

## To build Monaco
* [Publishing monaco-editor-core](./build/monaco/README.md)

Issue1: If gulp build fails try with the local gulp package as below
`./node_modules/.bin/gulp editor-distro --max_old_space_size=4095`



## Custom changes due to build errors

1.  error TS1323: Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'esnext', 'commonjs', 'amd', 'system', or 'umd'.

Change to old code because of compilation issue until we find alternate.
