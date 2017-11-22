const sharp = require('sharp');

const text = new Buffer('<svg width="400" height="100"><text font-family="Verdana" font-size="30">I <3 NodeConf Argentina</text></svg>');

sharp('/fac-node/images/toconvert.jpg')
  .resize(500)
  // .greyscale()
  // .background('#ff6600')
  .overlayWith('/fac-node/images/sparkle.png', { gravity: sharp.gravity.southwest })
  // .overlayWith(text)
  // .colourspace('b-w')
  .toFile('/fac-node/images/nodeschool-new-1.jpg');

  //
  // const roundedCorners = new Buffer(
  //   '<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>'
  // );
  //
  // const roundedCornerResizer =
  //   sharp()
  //     .resize(200, 200)
  //     .overlayWith(roundedCorners, { cutout: true })
