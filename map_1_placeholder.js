var player;
var cursors;

class sceneOne extends Phaser.Scene{
    constructor(){
        super({key: "sceneOne"});
    }
    init(data){
    }
    preload(){   
        this.load.image('tiles', 'assets/tileset_placeholder.jpg');
        this.load.tilemapTiledJSON('map_1_placeholder', 'map_1_placeholder.json');
        this.load.image('player', 'assets/player.png');
    }
    create(){
        const map = this.make.tilemap({key: 'map_1_placeholder'});
        const tileset = map.addTilesetImage('tileset_placeholder', 'tiles');
        const terrain = map.createStaticLayer('terrain', tileset, 0, 0);
        const bloquant = map.createStaticLayer('bloquant', tileset, 0, 0);
        const zone = map.createStaticLayer('zone', tileset, 0, 0);

        bloquant.setCollisionByExclusion(-1, true);
        zone.setCollisionByExclusion(-1, true);

        player = this.physics.add.sprite(300, 300, 'player');

        this.physics.add.collider(player, bloquant);
        this.physics.add.overlap(player, zone, changementZone);

        cursors = this.input.keyboard.createCursorKeys();
        
        function changementZone(player, zone){
            if (player.y >= 730 && player.x >= 400 && player.x <= 560){
                this.scene.start('sceneTwo');
                console.log("changement");
            }
        }
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

/*function changementZone(player, zone){
    
}*/    