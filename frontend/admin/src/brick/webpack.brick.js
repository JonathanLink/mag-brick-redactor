const Webpack = require('webpack')

let config = {
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/
            }
        ]
    },
    plugins: [
        new Webpack.ProvidePlugin({
            'window.Quill': 'quill'
        })
    ]
}

module.exports = config
