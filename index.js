function yu() {
  function compile(str) {
    const matches = str.matchAll(/\${(?<variable>\w+)}/g);
    var arr = []
    for (var matche of matches) {
      arr.push(matche.groups.variable);
    }
    return new Function(`{${arr.join(',')}}`,`return \`${str}\`;`)
  }

  function render(str,data) {
    var fn = compile(str)
    return fn(data)
  }

  function renderFile(path,data,fn) {
    const fs = require('fs');
    fs.readFile(path,'utf-8',function (err,str) {
      fn(err,render(str,data))
    })
  }

  function renderFileSync(path,data) {
    const fs = require('fs');
    var str = fs.readFileSync(path).toString()
    return render(str,data)
  }

  return {compile,render,renderFileSync,renderFile}
}
module.exports=yu
