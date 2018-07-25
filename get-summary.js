#!/usr/local/bin/node

//Internal
//Standard
const FileSystem = require('fs');
const Utility = require('util');
//External

//
var file_data = FileSystem.readFileSync('24ho11-2.json', 'utf8');
var json_object = JSON.parse(file_data);
var output_string = Utility.format('%s (%s) by %s (#%d: "%s" at %s) came %d/33 with a score of %d/50\n', json_object.entries[process.argv[2]].entry.level_name, json_object.entries[process.argv[2]].entry.patch_name, json_object.entries[process.argv[2]].entry.author, json_object.entries[process.argv[2]].entry.number, json_object.entries[process.argv[2]].entry.submission_message, json_object.entries[process.argv[2]].entry.submission_time, json_object.entries[process.argv[2]].entry.rank, json_object.entries[process.argv[2]].score.total);
var judge = 'idol';
output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aethetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[2]].score[judge].fun, json_object.entries[process.argv[2]].score[judge].creativity, json_object.entries[process.argv[2]].score[judge].aesthetics, json_object.entries[process.argv[2]].score[judge].total);
judge = 'sinc-x';
output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aethetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[2]].score[judge].fun, json_object.entries[process.argv[2]].score[judge].creativity, json_object.entries[process.argv[2]].score[judge].aesthetics, json_object.entries[process.argv[2]].score[judge].total);
judge = 'tob';
output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aethetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[2]].score[judge].fun, json_object.entries[process.argv[2]].score[judge].creativity, json_object.entries[process.argv[2]].score[judge].aesthetics, json_object.entries[process.argv[2]].score[judge].total);
judge = 'erik';
output_string += Utility.format('%s: Fun: %d/25 Creativity: %d/20 Aethetics: %d/5 Total: %d/50\n', judge, json_object.entries[process.argv[2]].score[judge].fun, json_object.entries[process.argv[2]].score[judge].creativity, json_object.entries[process.argv[2]].score[judge].aesthetics, json_object.entries[process.argv[2]].score[judge].total);
if(json_object.entries[process.argv[2]].score.penalties != null){
	output_string += Utility.format('Penalty: %d %s\n', json_object.entries[process.argv[2]].score.penalties.effect, json_object.entries[process.argv[2]].score.penalties.reason);
}
output_string += Utility.format('Helpful and informative links:\nRules and submissions thread: %s\nDiscussion thread: %s\nResults thread: %s\nOfficial spreadsheet: %s\nGitHub repository containing my data and scripts: %s\nAs always, please leave a reply if you noticed something\'s incorrect.', json_object.contest_info.rules_submissions, json_object.contest_info.discussion, json_object.contest_info.results, json_object.contest_info.official_spreadsheet, json_object.contest_info.data_repository);
console.log(output_string);
