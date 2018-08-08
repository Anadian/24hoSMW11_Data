#!/usr/local/bin/node

//Internal
//Standard
const FileSystem = require('fs');
//External

//
var file_data = FileSystem.readFileSync('24ho11-2.json', 'utf8');
var json_object = JSON.parse(file_data);
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
for(var i = 0; i < json_object.entries.length; i++){
	//title screen X/33: mean avg-yes | avg-no
	if( json_object.entries[i].custom.title_screen === true ){
		title_screen_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].custom.title_screen === false ){
		title_screen_false.push(json_object.entries[i].score);
	}
	//player sprite
	if( json_object.entries[i].custom.player_sprite === true ){
		player_sprite_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].custom.player_sprite === false ){
		player_sprite_false.push(json_object.entries[i].score);
	}
	//hud
	if( json_object.entries[i].custom.hud === true ){
		hud_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].custom.hud === false ){
		hud_false.push(json_object.entries[i].score);
	}
	//overworld
	if( json_object.entries[i].custom.overworld === true ){
		overworld_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].custom.overworld === false ){
		overworld_false.push(json_object.entries[i].score);
	}
	//dragon coins
	if( json_object.entries[i].features.dragon_coins === true ){
		dragon_coins_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.dragon_coins === false ){
		dragon_coins_false.push(json_object.entries[i].score);
	}
	//puzzles
	if( json_object.entries[i].features.puzzles === true ){
		puzzles_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.puzzles === false ){
		puzzles_false.push(json_object.entries[i].score);
	}
	//boss fights
	if( json_object.entries[i].features.boss_fights === true ){
		boss_fights_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.boss_fights === false ){
		boss_fights_false.push(json_object.entries[i].score);
	}
	//text
	if( json_object.entries[i].features.text === true ){
		text_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.text === false ){
		text_false.push(json_object.entries[i].score);
	}
	//quick restart
	if( json_object.entries[i].features.quick_restart === true ){
		quick_restart_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.quick_restart === false ){
		quick_restart_false.push(json_object.entries[i].score);
	}
	//life farm
	if( json_object.entries[i].features.life_farm === true ){
		life_farm_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.life_farm === false ){
		life_farm_false.push(json_object.entries[i].score);
	}
	//secret exit
	if( json_object.entries[i].features.secret_exit === true ){
		secret_exit_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.secret_exit === false ){
		secret_exit_false.push(json_object.entries[i].score);
	}
	//memes
	if( json_object.entries[i].features.memes === true ){
		memes_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.memes === false ){
		memes_false.push(json_object.entries[i].score);
	}
	//yoshi
	if( json_object.entries[i].features.yoshi === true ){
		yoshi_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.yoshi === false ){
		yoshi_false.push(json_object.entries[i].score);
	}
	//auto_scroller
	if( json_object.entries[i].features.auto_scroller === true ){
		auto_scroller_true.push(json_object.entries[i].score);
	} else if( json_object.entries[i].features.auto_scroller === false ){
		auto_scroller_false.push(json_object.entries[i].score);
	}
}
file_data = JSON.stringify(json_object, null, '\t');
FileSystem.writeFileSync('24ho11-2.json', file_data, 'utf8');
