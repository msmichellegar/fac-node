const gm = require('gm')
  .subClass({imageMagick: true});

gm('./images/chippies.jpg')
  // .resize(800)
  // .font("Helvetica.ttf", 80)
  // .fill("magenta")
  // .gravity('South')
  // .drawText(0, 20, "I <3 FAC12")
  // .out('./images/sparkle.png')
  // .geometry('-170+100')
  // .out('-composite')
  // .swirl(90)
  // .negative()
  .emboss(2)
  // .sepia()
 .write('./images/chippies-emboss.jpg', function (err) {
    if (!err) console.log('done');
    if (err) console.log(err);
  });
