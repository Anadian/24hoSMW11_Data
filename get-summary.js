#!/usr/local/bin/node

//Internal
//Standard
const FileSystem = require('fs');
const Utility = require('util');
//External

//
var file_data = FileSystem.readFileSync('24ho11-2.json', 'utf8');
var json_object = JSON.parse(file_data);
var output_string = '';
for(var i = 2; i < process.argv.length; i++){
	output_string += Utility.format('%s (%s) by %s (#%d: "%s" at %s) came %d/33 with a score of %d/50\n', json_object.entries[process.argv[i]].entry.level_name, json_object.entries[process.argv[i]].entry.patch_name, json_object.entries[process.argv[i]].entry.author, json_object.entries[process.argv[i]].entry.number, json_object.entries[process.argv[i]].entry.submission_message, json_object.entries[process.argv[i]].entry.submission_time, json_object.entries[process.argv[i]].entry.rank, json_object.entries[process.argv[i]].score.total);
	var judge = 'idol';
	output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aesthetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[i]].score[judge].fun, json_object.entries[process.argv[i]].score[judge].creativity, json_object.entries[process.argv[i]].score[judge].aesthetics, json_object.entries[process.argv[i]].score[judge].total);
	judge = 'sinc-x';
	output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aesthetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[i]].score[judge].fun, json_object.entries[process.argv[i]].score[judge].creativity, json_object.entries[process.argv[i]].score[judge].aesthetics, json_object.entries[process.argv[i]].score[judge].total);
	judge = 'tob';
	output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aesthetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[i]].score[judge].fun, json_object.entries[process.argv[i]].score[judge].creativity, json_object.entries[process.argv[i]].score[judge].aesthetics, json_object.entries[process.argv[i]].score[judge].total);
	judge = 'erik';
	output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aesthetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[i]].score[judge].fun, json_object.entries[process.argv[i]].score[judge].creativity, json_object.entries[process.argv[i]].score[judge].aesthetics, json_object.entries[process.argv[i]].score[judge].total);
	if(json_object.entries[process.argv[i]].score.penalties != null){
		output_string += Utility.format('Penalty: %d %s\n\n', json_object.entries[process.argv[i]].score.penalties.effect, json_object.entries[process.argv[i]].score.penalties.reason);
	} else{
		output_string += '\n';
	}
}
output_string += Utility.format('\nHelpful and informative links:\nRules and submissions thread: %s\nDiscussion thread: %s\nResults thread: %s\nOfficial spreadsheet: %s\nGitHub repository containing my data and scripts: %s\n\nAs always, please leave a reply if you noticed something\'s incorrect.', json_object.contest_info.rules_submissions, json_object.contest_info.discussion, json_object.contest_info.results, json_object.contest_info.official_spreadsheet, json_object.contest_info.data_repository);
console.log(output_string);
