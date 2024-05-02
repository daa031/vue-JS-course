import { Application, Sprite, Assets } from 'pixi.js'

const app = new Application()

await app.init()

document.body.appendChild(app.canvas)

const texture = await Assets.load('2.png')

const obj = new Sprite(texture)

obj.x = app.renderer.width / 2
obj.y = app.renderer.height / 2

obj.anchor.x = 0.5
obj.anchor.y = 0.5

app.stage.addChild(obj)

app.ticker.add(() => {
    obj.rotation += 0.01
})
