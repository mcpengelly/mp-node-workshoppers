module.exports = function(inputWords){
	return inputWords.reduce(function(countMap, word){
		countMap[word] = ++countMap[word] || 1; //
		return countMap;
	}, {});
};
