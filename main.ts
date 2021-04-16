namespace SpriteKind {
    export const cloud = SpriteKind.create()
    export const Helicopter = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += 1
})
sprites.onCreated(SpriteKind.cloud, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 8 . . . 8 8 . . . . . . 
        . . . 8 . . . . . . 8 8 . . . . 
        . . . 8 8 . . . . . . 8 . . . . 
        . . . . 8 . . . . . . 8 8 . . . 
        . . . . 8 8 . . . . . . 8 . . . 
        . . . . . 8 . . . . . . 8 8 . . 
        . . . . . . 8 . . . . . . 8 . . 
        . . . . . . 8 8 . . . . . 8 . . 
        . . . . . . . 8 8 . . . 8 8 . . 
        . . . . . . . . . 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    sprite.x = randint(16, scene.screenWidth() - 16)
    sprite.y = randint(20, scene.screenWidth() - 75)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
let agent: Sprite = null
game.splash("Generated Clouds", "On Sprite Created")
scene.setBackgroundColor(9)
agent = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . 8 8 8 . 8 8 8 . . . . . . 
    . . 8 8 . . 8 8 8 8 8 8 . . . . 
    . 8 . . . . . . . . . 8 8 . . . 
    . 8 . . . . . . . . . . . 8 8 . 
    . . 8 8 8 8 8 8 . . . . . . 8 8 
    . . . . . 8 8 . 8 8 8 . . . . 8 
    . . . . 8 8 . . . . 8 8 8 8 8 8 
    . . . . 8 8 . . . . . . . . 8 . 
    . . . . . 8 8 8 8 8 8 . 8 8 . . 
    . . . . . . . . . . 8 8 8 . . . 
    `, SpriteKind.Helicopter)
let cloud1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
let cloud2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
