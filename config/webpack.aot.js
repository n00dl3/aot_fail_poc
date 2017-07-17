/**
 * Created by junius on 13/07/17.
 */
var aot = require("@ngtools/webpack");
var helpers = require("./helpers");

module.exports = {
    entry: {
        "polyfills": helpers.root("./src/polyfills.ts"),
        "vendor": helpers.root("./src/vendor.ts"),
        "app": helpers.root("./src/main.ts")
    },
    resolve: {
        extensions: [".js", ".ts"],
        modules: ["node_modules", helpers.root("src")]
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "raw-loader"
            },{
                test: /\.css$/,
                loader: "raw-loader"
            }, {
                test: /\.ts$/,
                loader: "@ngtools/webpack"
            }
        ]
    },
    plugins: [
        new aot.AotPlugin({
            tsConfigPath: "./tsconfig.json",
            entryModule: helpers.root("./src/app/app.module#AppModule")
        })
    ],
    output: {
        path: helpers.root("dist"),
        publicPath: "",
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].chunk.js"
    }
};