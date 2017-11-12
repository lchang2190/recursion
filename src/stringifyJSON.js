// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //null
  if (obj === null){
    return 'null';
  }

  //unstringifiable
  if ( obj === undefined || typeof obj === Function){
    return ;
  }

  //strings
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }

  //arrays
  if (Array.isArray(obj)){
    if (obj.length <= 0){
      return '[]';
    }

    var array = '[';
    for( var i = 0; i < obj.length; i++ ){
      if (i !== obj.length - 1){
        array += stringifyJSON(obj[i]) + ',';
      }
      else array += stringifyJSON(obj[i]) + ']';
    }
    return array;
  }

  //objects
  if ( typeof obj === 'object'){
    if (obj.length <= 0){
      return '{}';
    }

    var keys = Object.keys(obj);
    var object = '{';
    for (var i = 0; i < keys.length; i++){
      if (!keys[i] || obj[keys[i]] === undefined || typeof keys[i] === 'function' || typeof obj[keys[i]] === 'function') {

      }else{
        if (i !== keys.length - 1){
          object += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';    
        }
        else object += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
        }
      }

    return object + '}';
  }
  return obj.toString();
  
};


