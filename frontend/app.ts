import $ = require('jquery');
import buzz = require('buzz');

import { Track } from './track';
import track_view = require('./track_view');

function main() {
  let tracks = [];

	tracks.push(Track.build('Barrel Roll', 'star_fox_barrel_roll', 1));
	tracks.push(Track.build('Creepy Link', 'mario_kart_link', 5));
	tracks.push(Track.build('Fail', 'price_is_right_fail', 1));
	tracks.push(Track.build('Freezy Pop', 'dbz_freezy_pop', 1));
	tracks.push(Track.build('Get Schwifty', 'rick_and_morty_schwifty', 1));
	tracks.push(Track.build('Hacking Time', 'kung_fury_hacking_time', 1));
	tracks.push(Track.build('Hello Pants', 'hello_pants', 1));
	tracks.push(Track.build('I Hope You Die', 'mike_tyson_die', 1));
	tracks.push(Track.build('Illegal Moves', 'napoleon_dynamite_illegal_ninja_moves', 1));
	tracks.push(Track.build('Javascript', 'wat_javascript', 1));
	tracks.push(Track.build('Melee', 'ssbm_title', 1));
	tracks.push(Track.build('Not The Bees', 'not_the_bees', 1));
	tracks.push(Track.build('Over 9000', 'dbz_9000', 1));
	tracks.push(Track.build('Phrasing', 'archer_phrasing', 3));
	tracks.push(Track.build('Potato', 'trump_potato', 1));
	tracks.push(Track.build('Select Character', 'ssbm_announcer', 15));
	tracks.push(Track.build('Tongue Noises', 'unicorn_tongue', 5));
	tracks.push(Track.build('Trololo', 'trololo', 1));
	tracks.push(Track.build('Wat', 'wat', 3));
	tracks.push(Track.build('Wubba Lubba', 'rick_and_morty_wubba', 3));
	tracks.push(Track.build('Yes', 'rick_and_morty_yes', 1));
	tracks.push(Track.build('Your Moves', 'ssbm_show_me_your_moves', 1));

  window.tracks = tracks;
  window.$ = $;

  track_view.installTracks(tracks);
}

$(() => { main(); });

