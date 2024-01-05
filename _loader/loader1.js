exports.default = function (content) {
  const { resourcePath = '', resourceQuery = ''} = this
  console.log('loader1 执行');
  console.log('loader1 resourcePath', resourcePath);
  console.log('loader1 resourceQuery', resourceQuery);

  if (resourceQuery === '?vue&type=template&id=100') {
    content = 'console.log("new code")'
  } else {
    content = `import "E:/vue/webpack-demo/src/index.js?vue&type=template&id=100";\n${content}`
  }

  console.log('content', content)

  return content
};

exports.pitch = function (a, b, data) {
  console.log('loader1 pitch');
  data.value = 'hello pitch data';
};
