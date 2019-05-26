//Your code here
function justInvoke(method){
    return method()
}

function setThisWithCall(fn, thisValue, arg){
    // const func = fn.bind(thisValue)
    // return func(arg)
    return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args){
    return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
    return functionToBeCopied.bind(thisValue)
}