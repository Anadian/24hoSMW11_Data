#!/usr/local/bin/node

//Internal
//Standard
const FileSystem = require('fs');
const Utility = require('util');
//External

//
function Array_Sum( array ){
	console.log(array);
	var sum = 0;
	for( var i = 0; i < array.length; i++ ){
		console.log(array[i]);
		sum += array[i];
	}
	console.log(sum);
	return sum;
}
var file_data = FileSystem.readFileSync('24ho11-2.json', 'utf8');
var json_object = JSON.parse(file_data);
var most_deaths = null;
var total_deaths = 0;
var deathless_score = [];
var deaths_score = [];
var title_screen_true = [];
var title_screen_false = [];
var player_sprite_true = [];
var player_sprite_false = [];
var hud_true = [];
var hud_false = [];
var overworld_true = [];
var overworld_false = [];
var dragon_coins_true = [];
var dragon_coins_false = [];
var puzzles_true = [];
var puzzles_false = [];
var boss_fights_true = [];
var boss_fights_false = [];
var text_true = [];
var text_false = [];
var quick_restart_true = [];
var quick_restart_false = [];
var life_farm_true = [];
var life_farm_false = [];
var secret_exit_true = [];
var secret_exit_false = [];
var memes_true = [];
var memes_false = [];
var yoshi_true = [];
var yoshi_false = [];
var auto_scroller_true = [];
var auto_scroller_false = [];
var report = '';
for(var i = 0; i < json_object.entries.length; i++){
	if( json_object.entries[i].video.deaths.length == 0 ){
		deathless_score.push(json_object.entries[i].score.total);
	} else{
		total_deaths += json_object.entries[i].video.deaths.length;
		if( json_object.entries[i].video.deaths.length > most_deaths ){
			most_deaths = i;
		} 
		deaths_score.push(json_object.entries[i].score.total);
	}
	//title screen X/33: mean avg-yes | avg-no
	if( json_object.entries[i].video.custom.title_screen === true ){
		title_screen_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.custom.title_screen === false ){
		title_screen_false.push(json_object.entries[i].score.total);
	}
	//player sprite
	if( json_object.entries[i].video.custom.player_sprite === true ){
		player_sprite_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.custom.player_sprite === false ){
		player_sprite_false.push(json_object.entries[i].score.total);
	}
	//hud
	if( json_object.entries[i].video.custom.hud === true ){
		hud_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.custom.hud === false ){
		hud_false.push(json_object.entries[i].score.total);
	}
	//overworld
	if( json_object.entries[i].video.custom.overworld === true ){
		overworld_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.custom.overworld === false ){
		overworld_false.push(json_object.entries[i].score.total);
	}
	//dragon coins
	if( json_object.entries[i].video.features.dragon_coins === true ){
		dragon_coins_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.dragon_coins === false ){
		dragon_coins_false.push(json_object.entries[i].score.total);
	}
	//puzzles
	if( json_object.entries[i].video.features.puzzles === true ){
		puzzles_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.puzzles === false ){
		puzzles_false.push(json_object.entries[i].score.total);
	}
	//boss fights
	if( json_object.entries[i].video.features.boss_fights === true ){
		boss_fights_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.boss_fights === false ){
		boss_fights_false.push(json_object.entries[i].score.total);
	}
	//text
	if( json_object.entries[i].video.features.text === true ){
		text_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.text === false ){
		text_false.push(json_object.entries[i].score.total);
	}
	//quick restart
	if( json_object.entries[i].video.features.quick_restart === true ){
		quick_restart_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.quick_restart === false ){
		quick_restart_false.push(json_object.entries[i].score.total);
	}
	//life farm
	if( json_object.entries[i].video.features.life_farm === true ){
		life_farm_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.life_farm === false ){
		life_farm_false.push(json_object.entries[i].score.total);
	}
	//secret exit
	if( json_object.entries[i].video.features.secret_exit === true ){
		secret_exit_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.secret_exit === false ){
		secret_exit_false.push(json_object.entries[i].score.total);
	}
	//memes
	if( json_object.entries[i].video.features.memes === true ){
		memes_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.memes === false ){
		memes_false.push(json_object.entries[i].score.total);
	}
	//yoshi
	if( json_object.entries[i].video.features.yoshi === true ){
		yoshi_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.yoshi === false ){
		yoshi_false.push(json_object.entries[i].score.total);
	}
	//auto_scroller
	if( json_object.entries[i].video.features.auto_scroller === true ){
		auto_scroller_true.push(json_object.entries[i].score.total);
	} else if( json_object.entries[i].video.features.auto_scroller === false ){
		auto_scroller_false.push(json_object.entries[i].score.total);
	}

}
//report = Utility.format('Raocow died a total of %d times; completing %d levels without dying; and dying the most on LEVEL_NAME with %d deaths.\nStages Raocow died on averaged a score of %d while his deathless levels scored, on average, %d.\n %d submissions had custom title screen (average score %d) while %d did not (average score %d)\nThe %d stages which had a custom player sprite averaged %d against the %d averaged by the %d submission which stuck to plain-old Mario.\n%d submissions had a custom hud: %d
report = Utility.format('Deaths: %d (%d) Deathless stages %d (%d)\ntile screen %d (%d) | %d (%d)\nplayer sprite %d (%d) | %d (%d)\nhud %d (%d) | %d (%d)\noverworld %d (%d) | %d (%d)\ndragon coins %d (%d) | %d (%d)\npuzzles %d (%d) | %d (%d)\nquick restart %d (%d) | %d (%d)\nlife farm %d (%d) | %d (%d)\nsecret exit %d (%d) | %d (%d)\nmemes %d (%d) | %d (%d)\nyoshi %d (%d) | %d (%d)\nauto scroller %d (%d) | %d (%d)\n', total_deaths, (Array_Sum(deaths_score) / deaths_score.length).toPrecision(4), deathless_score.length, (Array_Sum(deathless_score) / deathless_score.length).toPrecision(4), title_screen_true.length, (Array_Sum(title_screen_true) / title_screen_true.length).toPrecision(4), title_screen_false.length, (Array_Sum(title_screen_false) / title_screen_false.length).toPrecision(4), player_sprite_true.length, (Array_Sum(player_sprite_true) / player_sprite_true.length).toPrecision(4), player_sprite_false.length, (Array_Sum(player_sprite_false) / player_sprite_false.length).toPrecision(4), hud_true.length, (Array_Sum(hud_true) / hud_true.length).toPrecision(4), hud_false.length, (Array_Sum(hud_false) / hud_false.length).toPrecision(4), overworld_true.length, (Array_Sum(overworld_true) / overworld_true.length).toPrecision(4), overworld_false.length, (Array_Sum(overworld_false) / overworld_false.length).toPrecision(4), dragon_coins_true.length, (Array_Sum(dragon_coins_true) / dragon_coins_true.length).toPrecision(4), dragon_coins_false.length, (Array_Sum(dragon_coins_false) / dragon_coins_false.length).toPrecision(4), puzzles_true.length, (Array_Sum(puzzles_true) / puzzles_true.length).toPrecision(4), puzzles_false.length, (Array_Sum(puzzles_false) / puzzles_false.length).toPrecision(4), quick_restart_true.length, (Array_Sum(quick_restart_true) / quick_restart_true.length).toPrecision(4), quick_restart_false.length, (Array_Sum(quick_restart_false) / quick_restart_false.length).toPrecision(4), life_farm_true.length, (Array_Sum(life_farm_true) / life_farm_true.length).toPrecision(4), life_farm_false.length, (Array_Sum(life_farm_false) / life_farm_false.length).toPrecision(4), secret_exit_true.length, (Array_Sum(secret_exit_true) / secret_exit_true.length).toPrecision(4), secret_exit_false.length, (Array_Sum(secret_exit_false) / secret_exit_false.length).toPrecision(4), memes_true.length, (Array_Sum(memes_true) / memes_true.length).toPrecision(4), memes_false.length, (Array_Sum(memes_false) / memes_false.length).toPrecision(4), yoshi_true.length, (Array_Sum(yoshi_true) / yoshi_true.length).toPrecision(4), yoshi_false.length, (Array_Sum(yoshi_false) / yoshi_false.length).toPrecision(4), auto_scroller_true.length, (Array_Sum(auto_scroller_true) / auto_scroller_true.length).toPrecision(4), auto_scroller_false.length, (Array_Sum(auto_scroller_false) / auto_scroller_false.length).toPrecision(4) );
console.log(report);
file_data = JSON.stringify(json_object, null, '\t');
FileSystem.writeFileSync('24ho11-2.json', file_data, 'utf8');
