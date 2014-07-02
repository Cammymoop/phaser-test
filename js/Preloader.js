BaseNamespace.Preloader = function (game) {
    "use strict";
	this.background = null;
	this.preloadBar = null;

	this.ready = false;
};

BaseNamespace.Preloader.prototype = {
	preload: function () {
        "use strict";
        this.game.load.image('logo', 'img/phaser.png');

        /*
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('titlepage', 'img/title.png');
		this.load.spritesheet('cat', 'img/cat.png', 32, 32);
        this.load.tileset('stoneTiles', 'img/stone_tile.png', 32, 32);
        this.load.tilemap('testmap', 'map/map1.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.audio('music1', 'sound/music1.ogg');
        */
	},

	create: function () {
        "use strict";
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		//this.preloadBar.cropEnabled = false;
        this.game.state.start('Game');
	}
};
