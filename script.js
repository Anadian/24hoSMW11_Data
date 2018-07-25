#!/usr/local/bin/node

//Internal
//Standard
const FileSystem = require('fs');
//External

//
var file_data = FileSystem.readFileSync('24ho11-2.json', 'utf8');
var json_object = JSON.parse(file_data);
for(var i = 0; i < json_object.entries.length; i++){
	if( json_object.entries[i].video.start_time === undefined ){
		json_object.entries[i].video.start_time = null;
	}
	if( json_object.entries[i].video.clear_time === undefined ){
		json_object.entries[i].video.clear_time = null;
	}
	if( json_object.entries[i].video.features.yoshi === undefined ){
		json_object.entries[i].video.features.yoshi = null;
	}
}
file_data = JSON.stringify(json_object, null, '\t');
FileSystem.writeFileSync('24ho11-2.json', file_data, 'utf8');
