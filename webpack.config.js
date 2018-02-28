module.exports={
    devtool: 'eval-source-map',
    entry:{
        index:__dirname+'/index/index.js',
        list:__dirname+'/list/index.js'
    },
    output:{
        filename: '[name].bindle.js',
        path: __dirname + '/dist'
     },
    module:
        {
            rules:
                [
                    {
                        test: /\.css$/,
                        use: [
                            {
                                loader: "style-loader"
                            },
                            {
                                loader: "css-loader"
                            },
                            {
                                loader:"postcss-loader"
                            }
                        ]
                    },
                    {
                        test: /\.(jpg|png|gif)$/,
                        use:[
                            { loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]",
                                options:{
                                    publicPath:'./images'
                                }

                            }
                            ]

                    },
                    {
                        test: /(\.jsx|\.js)$/,
                        use: {
                            loader: "babel-loader"
                        },
                        exclude: /node_modules/
                    }
                ]
        },
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }

};