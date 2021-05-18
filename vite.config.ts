
const fs = require("fs")
import path from "path";

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
}
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv")

const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${process.env.NODE_ENV}`
]

for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}
const config = {
  base: './',//在生产中服务时的基本公共路径。@default '/'
  alias: {
    '/@/': pathResolve('./src'),
  },
  outDir: 'vite-init',//构建输出将放在其中。会在构建之前删除旧目录。@default 'dist'
  minify: 'esbuild',//构建时的压缩方式
  hostname: 'localhost',//本地启动的服务地址
  port: '8800',//服务端口号
  open: false,//启动服务时是否在浏览器打开
  https: false,//是否开启https
  ssr: false,//是否服务端渲染
  optimizeDeps: {// 引入第三方的配置
    include: ['axios']
  },
  // proxy: {//代理配置
  //   '/api': {
  //     target: 'http://xx.xx.xx.xx:xxxx',
  //     changeOrigin: true,
  //     ws: true,
  //     rewrite: (path: string) => { path.replace(/^\/api/, '') }
  //   }
  // }
}
module.exports = config;