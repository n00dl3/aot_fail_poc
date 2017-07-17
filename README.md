This is just a little repo to illustrate [this issue](https://github.com/angular/angular-cli/issues/7013) on angular/angular-cli.

The `ngtools/webpack` do not seem to work. In order to reproduce:

```shell
git clone https://github.com/n00dl3/aot_fail_poc.git ./aot_fail
cd ./aot_fail
npm install
./node_modules/.bin/webpack --config config/webpack.aot.js --config config/webpack.aot.js
```