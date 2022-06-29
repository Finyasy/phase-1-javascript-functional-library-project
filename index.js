function isArray(collection){
    let array;
    if(Array.isArray(collection)){
        array = collection;
    }
    else{
        array = Object.values(collection);
    }
    return array;
}

function myEach(collection, callback){
    let array = isArray(collection);
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
    return collection;
}

const myMap = (collection, callback) => {
    let array = isArray(collection);
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const myReduce = (collection, callback, acc) => {
    let array = isArray(collection);
    if(acc === undefined){
        acc = array[0];
        for(let i = 1; i < array.length; i++){
            acc = callback(acc, array[i]);
        }
    }else{
        for(let i = 0; i < array.length; i++){
            acc = callback(acc, array[i]);
        }
    }
    return acc;
}

function myFind(collection,predicate){
    let array = isArray(collection);
    for(let i = 0; i < array.length; i++){
        if(predicate(array[i])){
            return array[i];
        }
    }
}

const myFilter = (collection, predicate) => {
    let array = isArray(collection);
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(predicate(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const mySize = (collection) => {
    let array = isArray(collection);
    return array.length;
}

function myFirst(arr,n){
    if(n === undefined){
        return arr[0];
    }else{
        return arr.slice(0,n);
    }
}

function myLast(arr,n){
    if(n === undefined){
        return arr[arr.length-1];
    }else{
        return arr.slice(arr.length-n);
    }
}

const myKeys = (object) => {
    return Object.keys(object);
}

function myValues(object){
    return Object.values(object);
}