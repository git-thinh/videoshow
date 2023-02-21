var videoshow = require('../')

const root = process.cwd();
console.log('root= ', root)

var images = [
  root + '/test/fixtures/step_1.png',
  root + '/test/fixtures/step_2.png',
  root + '/test/fixtures/step_3.png',
  root + '/test/fixtures/step_4.png',
  root + '/test/fixtures/step_5.png'
]

videoshow(images)
  .save('./mp4/basic.mp4')
  .on('start', function(command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function(err) {
    console.error('Error:', err)
  })
  .on('end', function(output) {
    console.log('Video created in:', output)
  })
