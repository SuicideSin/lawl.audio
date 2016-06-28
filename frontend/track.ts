import buzz = require('buzz');

export class Track {
  name: string;
  imageUrl: string;
  soundUrls: string[];

  constructor(name: string, imageUrl: string, soundUrls: string[]) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.soundUrls = soundUrls;
  }

	/** Construct a track without specifying all of the filenames. */
  static build(name: string, filenamePattern: string, numSamples: number) 
			: Track {
		let imageUrl = `./assets/image/${filenamePattern}.png`;
		let soundUrls = [];
	
		if (numSamples == 1) {
			soundUrls.push(`./assets/sound/${filenamePattern}.wav`);
		} else {
			for (let i = 0; i < numSamples; i++) {
				let j = i + 1;
				soundUrls.push(`./assets/sound/${filenamePattern}_${j}.wav`);
			}
		}

    return new Track(name, imageUrl, soundUrls);
  }

  /** Play the track, or if there are multiple tracks, a random one. */
  play() {
    let track = this.randomSound();
    let sound = new buzz.sound(track);
    // Play callback: sound.bind('ended', function(e) {});
    sound.play();
  }

  randomSound() : string {
    let i = Math.floor(Math.random() * this.soundUrls.length);
    return this.soundUrls[i];
  }
}

