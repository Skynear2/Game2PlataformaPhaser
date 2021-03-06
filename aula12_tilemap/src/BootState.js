'use strict'

class BootState extends Phaser.State {

    preload() {
        this.game.load.image('sky', 'assets/sky.png')
        this.game.load.image('plane1', 'assets/airplane1.png')
        this.game.load.image('shot', 'assets/shot.png')
        this.game.load.image('wall', 'assets/wall.png')
        this.game.load.image('fog', 'assets/fog.png')
        this.game.load.image('saw', 'assets/saw.png')
        this.game.load.image('smoke', 'assets/smoke.png')
        this.game.load.image('title', 'assets/title.png')

        this.game.load.text('map1', 'assets/map1.txt');  // arquivo txt do mapa

        this.game.load.spritesheet('explosion', 'assets/explosion.png', 56, 56)

        // map
        this.game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
         this.game.load.image('tiles1','assets/tileset-42x42.png');
    }

    create() {
        console.log("BootState created")
        // this.state.start('Title')
        this.state.start('Game')
    }
}