import $ = require('jquery');

import { Track } from './track';

export function installTracks(tracks: Track[]) {
  let $template = $("#templates .track");
  let $parent = $("#tracks");

  for (let track of tracks) {
    let $t = $template.clone();
    let $li = $('<li></li>').html($t);

    $t.data('track', track);
    $t.css('background-image', `url("${track.imageUrl}")`);
    $t.find('.name').text(track.name);

    $t.click(function(e) {
      track.play();
    });

    $parent.append($li);
  }
}

