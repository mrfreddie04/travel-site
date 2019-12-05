const path = require("path"); //path oes not have to be installed - belongs to the std node library

const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer")
];

module.exports = 
{
    entry: "./app/assets/scripts/App.js" ,
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname,"app") //webpack requires absolute path for the output
    },
    devServer: {
        before: (app,server)=>server._watch("./app/**/*.html") , //html reload on the fly (requires full reload)
        contentBase: path.join(__dirname,"app"),
        hot:true, //hot module replacement: inject css/javascript into browsers memory on-the-fly 9for css/js, full reload not needed)
        port:3000,
        host:"0.0.0.0" //allow devices on the same network to access webpack-dev-server from this computer
    },
    mode: "development",
    //watch: true,
    module: {
        rules: [
            //if file ends with .css, use css-loader
            {
                test: /\.css$/i,
                //css-loader lets webpack bundle/understand css files
                //style-loader actually applies this css in the browser itself
                use: ["style-loader","css-loader?url=false",
                {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}