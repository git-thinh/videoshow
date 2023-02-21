//var videoshow = require('videoshow')
var videoshow = require('../')

const root = process.cwd();
console.log('root= ', root)

var audio = root + '/test/fixtures/song.mp3'

var audioParams = {
  fade: true,
  delay: 2 // seconds
}

var images = [
  root + '/test/fixtures/step_1.png',
  root + '/test/fixtures/step_2.png',
  root + '/test/fixtures/step_3.png',
  root + '/test/fixtures/step_4.png',
  root + '/test/fixtures/step_5.png'
]

videoshow(images)
  .audio(audio, audioParams)
  .save('./mp4/audio.mp4')
  .on('start', function(command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function(err) {
    console.error('Error:', err)
  })
  .on('end', function(output) {
    console.log('Video created in:', output)
  })
