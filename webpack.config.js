module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            presets:["react"]
          }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", " "]
  },
  devServer: {
    inline: false,
    contentBase: "./"
  }
};
