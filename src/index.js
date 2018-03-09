
// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName};

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        set: (value) => { propertyName = value },
        get: () => (propertyName),
        enumerable: false
    });
return propertyName;
}

const createProtoMagicObject = () => {
    var obj =function() {} ;
    obj.prototype =obj.__proto__;
    return obj;
};


var i=0;

Function.prototype.valueOf = function () {
    return i;
}

const incrementor = () => {
    i++;
    return incrementor;
};

var j =0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
         j++; 
        return j;  
        })
};

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {

setTimeout(() => 
{
    return arg;
}, 1000);

};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {
    return mas.sort((a, b) => (a.__proto__ - b.__proto__));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;