const path = require('path')
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
    
]

module.exports = {

    /** Setting the start point */
    entry: './app/assets/scripts/App.js',
    /**Creating a new bundled file name bundled.js in the given directory path(we delete the dist folder and create
     * the new file in app folder) */
    output:{
        filename:'bundled.js',
        path:path.resolve(__dirname,'app')
    },
    devServer: {
        before:function(app,server){
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname,'app'),
        hot:true,
        port:3000,
        /**Can access site from an devices connected to the same network */
        host:'0.0.0.0'
    },
    mode:'development',

    /**automatically rebiuild the dist folder after each save */
     module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader', 'css-loader?url=false', {loader:'postcss-loader',options:{plugins:postCSSPlugins}}]
            }
        ]
    }
}