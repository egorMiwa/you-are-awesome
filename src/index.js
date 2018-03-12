
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
        return resolve(++j);
    })
};

const createIncrementer = () => {
    var obj = [];
    obj.value = 0;
    obj.next = () => { obj.value++; return obj; }
    return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(function (resolve, reject) {  
            setTimeout(() => {
                 return resolve(param)}, 1000);
        
    })
};

const getDeepPropertiesCount = (obj) => {
    obj = JSON.stringify(obj);
    return obj.split("}", obj.length).length - 2;
};

const createSerializedObject = () => {
   
    return null;
   //DFQ?&&^??^?^??^
};

const toBuffer = () => {};
const sortByProto = (mas) => {
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