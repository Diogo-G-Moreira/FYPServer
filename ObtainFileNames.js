
module.exports = {
  find: function (folder, desired) {
    var fs = require('fs');
	var array = [];
	console.log(desired);
    var fileContents = fs.readdirSync(folder),
        fileTree = [],
        stats;
    fileContents.forEach(function (fileName) {
		if (array[1] == desired)
		   {
			   console.log("got here 3");
			   return array;
		   }
        stats = fs.lstatSync(folder + '/' + fileName);
        if (stats.isDirectory()) {
            array = module.exports.find((folder + '/' + fileName), desired)
           if (array[1] == desired)
		   {
			   console.log("got here 2");
			   return array;
		   }
        } else {

			console.log(folder + '/' + fileName);
			console.log(desired + '---' + fileName);
			if (desired == fileName)
			{
				array.push((folder +'/'));
				array.push(fileName);
				console.log("got here");
				return array;
			}
        }
    });
	
    return array;
  }
};
