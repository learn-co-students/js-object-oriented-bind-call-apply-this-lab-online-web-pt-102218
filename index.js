//Your code here
function justInvoke(funct) {
  return funct();
}

function setThisWithCall(funct, name, age) {
    return funct.call(name, age) ;
}

function setThisWithApply(funct, name , array) {
  return funct.apply(name, array)
}

function returnNewFunctionOf(functionToBeCopied, name) {
  return functionToBeCopied.bind(name);
}