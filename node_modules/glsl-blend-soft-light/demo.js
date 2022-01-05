//get a shader
var glslify = require('glslify')
var createShader = glslify({
    fragment: './shaders/blend.frag',
    vertex: './shaders/blend.vert'
})

//create our WebGL test example
var context = require('gl-blend-demo')({
    shader: createShader
})

//add to DOM
require('domready')(function() {
    document.body.style.margin = '0'
    document.body.appendChild(context.canvas)
})