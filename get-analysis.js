#!/usr/local/bin/node

//Internal
//Standard
const FileSystem = require('fs');
const Utility = require('util');
//External

var file_data = FileSystem.readFileSync('24ho11-2.json', 'utf8');
var json_object = JSON.parse(file_data);
var output_string = Utility.format('Video tags: "%s"\nStart Time: %s Clear Time: %s\nRaocow died %d times at', json_object.entries[process.argv[2]].video.keywords, json_object.entries[process.argv[2]].video.start_time, json_object.entries[process.argv[2]].video.clear_time, json_object.entries[process.argv[2]].video.deaths.length);
for( var i = 0; i < json_object.entries[process.argv[2]].video.deaths.length; i++){
	output_string += ' '+json_object.entries[process.argv[2]].video.deaths[i];
}
console.log(output_string);
