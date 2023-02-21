var videoshow = require('../')

const root = process.cwd();
console.log('root= ', root)

var audio = root + '/test/fixtures/song.mp3'

var options = {
  transition: true
}

var images = [
  {
    path: root + '/test/fixtures/step_1.png',
    disableFadeOut: true,
    loop: 2
  }, {
    path: root + '/test/fixtures/step_2.png',
    disableFadeIn: true,
    loop: 5
  }, {
    path: root + '/test/fixtures/step_3.png',
    transitionColor: '0xFF66C7'
  }, {
    path: root + '/test/fixtures/step_4.png',
    transition: false,
    transitionColor: 'red'
  }, {
    path: root + '/test/fixtures/step_5.png',
    transition: false
  }
]

videoshow(images, options)
  .audio(audio)
  .save('./mp4/transition.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err) {
    console.error('Error:', err)
  })
  .on('end', function (output) {
    console.log('Video created in:', output)
  })
