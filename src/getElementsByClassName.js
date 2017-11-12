// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
	var results = [];

	// set node to node, or document.body as default;
	node = node || document.body;

	//check node classes for className, if it does, push node into results;
	if ( node.classList.contains(className)){
		results.push(node);
	}

	//check child nodes for className, if it exits add to results;
	for ( var i = 0; i < node.children.length; i++ ){
		var child = getElementsByClassName(className, node.children[i]);
		results = results.concat(child);
	}

  return results;
};
