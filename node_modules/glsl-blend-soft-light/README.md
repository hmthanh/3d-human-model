# glsl-blend-soft-light

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[(click for demo)](http://mattdesl.github.io/glsl-blend-soft-light/)

Photoshop-like "soft light" blend mode for GLSL.

```glsl
#pragma glslify: blend = require(../)

void main() {
  vec4 bgColor = texture2D(bg, vUv);
  vec4 fgColor = texture2D(foreground, vUv);

  vec3 color = blend(bgColor.rgb, fgColor.rgb);
  gl_FragColor = vec4(color, 1.0);
}
```

## Usage

[![NPM](https://nodei.co/npm/glsl-blend-soft-light.png)](https://nodei.co/npm/glsl-blend-soft-light/)

#### `blend(vec3 base, vec3 blend)`

Blends background and foreground with an "soft light" blend mode. The algorithm for each channel is as follows:

```
(blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend))
```

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing).

## License

MIT. See [LICENSE.md](http://github.com/mattdesl/glsl-blend-soft-light/blob/master/LICENSE.md) for details.
