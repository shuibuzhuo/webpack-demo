exports.default = function (content) {
  const { resourcePath = '', resourceQuery = ''} = this
  console.log('loader3 执行');
  console.log('loader3 resourcePath', resourcePath);
  console.log('loader3 resourceQuery', resourceQuery);
  
  return content;
};

exports.pitch = function (a, b, data) {
  console.log('loader3 pitch');
  data.value = 'hello pitch data';
};
