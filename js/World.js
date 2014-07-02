
BaseNamespace.World = function (game, levels) {
    "use strict";
    this.game = game;

    this.levels = json.parse(levels);
}

BaseNamespace.World.prototype = {
    loadMap: function(mapFile, tileset, opts)
    {
        "use strict";
        /*
        this.background = this.game.add.tileSprite(0, 0, 3048, 2048, 'background');
        this.background.fixedToCamera = true;
        
        this.mapFile = "map2";
        
        this.map = this.game.add.tilemap(this.mapFile);
        this.tileset = this.game.add.tileset('stoneTiles');
        this.tileset.setCollisionRange(0, 1, true, true, true, true);
        
        this.tileset.setCollisionRange(2, 3, false, false, false, false);
        
        this.mapLayer = this.game.add.tilemapLayer(0, 0, 1024, 768, this.tileset, this.map, 0);
        this.mapLayer.resizeWorld();
        */
    },
    reset: function() {
        "use strict";
        this.loadLevel(this.level.name);
    },
    loadLevel: function(levelName) {
        "use strict";
        this.level = this.levels[levelName];

        this.loadMap(this.level.mapFile, this.level.tileset, this.level.mapOpts);
    }
};
