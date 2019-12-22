const getMockData = function(path, args, body) {
  //返回promise 对象
  return new Promise((resolver, reject) => {
    resolver(require("../mock/" + path))
  }).catch((e) => {
    console.log(e)
  });
}

module.exports = {
  getMockData: getMockData
}