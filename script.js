var granimInstance = new Granim({
  element: '#canvas-complex',
  direction: 'radial',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              [
                  { color: '#ff0472', pos: 26 },
                  { color: '#ca9da6', pos: .8 },
                  { color: '#ac9a76', pos: 1 }
              ], [
                  { color: '#65c07c', pos: 0 },
                  { color: '#ff8c00', pos: .2 },
                  { color: '#fbc823', pos: .5 }
              ],
          ]
      }
  }
});


