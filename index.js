//Your code here
function justInvoke(fn) {
    return fn()
}

function setThisWithCall(returnsThisAndArgs, obj, age) {
    return returnsThisAndArgs.call(obj, age)
}

function setThisWithApply(returnsThisAndArgs, obj, age) {
    return returnsThisAndArgs.apply(obj, age)
}

function returnNewFunctionOf(functionToBeCopied, name) {
    return functionToBeCopied.bind(name)
}