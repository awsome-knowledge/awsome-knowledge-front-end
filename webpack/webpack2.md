loader 用于加载某些资源文件。 因为webpack 本身只能打包commonjs规范的js文件，
对于其他资源例如 css，图片，或者其他的语法集，比如 jsx， coffee，是没有办法加载的。 
这就需要对应的loader将资源转化，加载进来。
plugin 用于扩展webpack的功能。功能更加的丰富，不仅局限于资源的加载。
总结：loader 用于加载待打包的资源，plugin 用于扩展 webpack。
