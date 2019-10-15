module.exports = [{
    entry: './app.scss',
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        filename: 'style-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./node_modules', 'node_modules/@material/*']
                                    .map((d) => path.join(__dirname, d))
                                    .map((g) => glob.sync(g))
                                    .reduce((a, c) => a.concat(c), [])
                            }
                        }
                    },
                ]
            }
        ]
    },
}];