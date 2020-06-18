module.exports = {
  // publicPath: "/portfolio/",
  // devServer: {

  //   proxy: "https://mr-portfolio.glitch.me/contact",
  // },

  devServer: {
    disableHostCheck: true,
    proxy: {
      "/contact": {
        target: "https://mr-portfolio.glitch.me/",
        ws: true,
        changeOrigin: true,
      },
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/pdf/[name].[hash:8].[ext]",
      });
  },
};
