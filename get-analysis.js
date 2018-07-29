#!/usr/local/bin/node

//Internal
//Standard
const FileSystem = require('fs');
const Utility = require('util');
//External

var file_data = FileSystem.readFileSync('24ho11-2.json', 'utf8');
var json_object = JSON.parse(file_data);
var output_string = Utility.format('Video tags: "%s"\n', json_object.entries[process.argv[2]].video.keywords);
for(var j = 2; j < process.argv.length; j++){
	output_string += Utility.format('Start Time: %s Clear Time: %s\nRaocow died %d times at', json_object.entries[process.argv[j]].video.start_time, json_object.entries[process.argv[j]].video.clear_time, json_object.entries[process.argv[j]].video.deaths.length);
	for( var i = 0; i < json_object.entries[process.argv[j]].video.deaths.length; i++){
		output_string += ' '+json_object.entries[process.argv[j]].video.deaths[i];
	}
	output_string += '\n';
}
console.log(output_string);
