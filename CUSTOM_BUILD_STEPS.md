


* [How to build and run from source](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run)

```
yarn
yarn watch
```

Issues1: Sometimes `yarn watch` fails. To solve, remove `node_modules` and rerun `yarn && yarn watch`

## To build Monaco
* [Publishing monaco-editor-core](./build/monaco/README.md)

Issue1: If gulp build fails try with the local gulp package as below
`./node_modules/.bin/gulp editor-distro --max_old_space_size=4095`
