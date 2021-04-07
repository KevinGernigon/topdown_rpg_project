var player;
var cursors;

class sceneTwo extends Phaser.Scene{
    constructor(){
        super({key: "sceneTwo"});
    }
    init(data){
    }
    preload(){
        this.load.image('tiles', 'assets/tileset_placeholder.jpg');
        this.load.tilemapTiledJSON('map_2_placeholder', 'map_2_placeholder.json');
        this.load.image('player', 'assets/player.png'); 
    }
    create(){
        const map = this.make.tilemap({key: 'map_2_placeholder'});
        const tileset = map.addTilesetImage('tileset_placeholder', 'tiles');
        const terrain = map.createStaticLayer('terrain', tileset, 0, 0);
        const bloquant = map.createStaticLayer('bloquant', tileset, 0, 0);
        const zone = map.createStaticLayer('zone', tileset, 0, 0);
        const ennemis = map.createDynamicLayer('ennemis', tileset, 0, 0);
        const item = map.createDynamicLayer('item', tileset, 0, 0);

        bloquant.setCollisionByExclusion(-1, true);

        player = this.physics.add.sprite(300, 300, 'player');

        this.physics.add.collider(player, bloquant);
        //this.physics.add.overlap(player, zone, changementZone);

        cursors = this.input.keyboard.createCursorKeys();
    }
    update(){
        if (cursors.right.isDown){
        player.setVelocityX(200);
        }
        else if (cursors.left.isDown){
            player.setVelocityX(-200);
        }
        else if (cursors.up.isDown){
            player.setVelocityY(-200);
        }
        else if (cursors.down.isDown){
            player.setVelocityY(200);
        }
        else{
            player.setVelocity(0);
        }
    }
};
