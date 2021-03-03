namespace SpriteKind {
    export const chance = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true)
})
let projectile: Sprite = null
let deChance = 0
let projectile2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`niveau6`)
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......fd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fbddddbfd1df......
    ......fcbbbdcfddbf......
    .......fcbb11111f.......
    ........fffff1b1f.......
    ........fb111cfbf.......
    ........ffb1b1ff........
    ......f.fffbfbf.........
    ......ffffffff..........
    .......fffff............
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
let difficulte = -100
game.onUpdateInterval(5000, function () {
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 . 2 . 2 . . . . . 
        . . . . . . 2 . . . 2 . . . . . 
        . . . . . . 2 . . . 2 . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -100, 0)
    deChance = randint(1, 10)
    if (deChance == 3) {
        tiles.placeOnTile(projectile2, tiles.getTileLocation(9, 3))
    }
})
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f 
        f d d d d d d d d f 
        f d 2 2 2 2 2 2 d f 
        f d 2 2 2 2 2 2 d f 
        f d 2 2 2 2 2 2 d f 
        f d d d d d d d d f 
        f d d d d d d d d f 
        f d d d d d d d d f 
        f f f f f f f f f f 
        `, randint(difficulte, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
    difficulte += -10
})
