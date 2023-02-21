var videoshow = require('../')

const root = process.cwd();
console.log('root= ', root)

var subtitles = root + '/test/fixtures/subtitles.srt'
var audio = root + '/test/fixtures/song.mp3'
var logo = root + '/test/fixtures/logo.png'
var logoParams = {
  start: 5,
  end: 20,
  xAxis: 20,
  yAxis: 20
}

var images = [
  root + '/test/fixtures/step_1.png',
  root + '/test/fixtures/step_2.png',
  root + '/test/fixtures/step_3.png',
  root + '/test/fixtures/step_4.png',
  root + '/test/fixtures/step_5.png'
]

videoshow(images)
  .subtitles(subtitles)
  .audio(audio)
  .logo(logo, logoParams)
  .save('./mp4/logo.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err) {
    console.error('Error:', err)
  })
  .on('end', function (output) {
    console.log('Video created in:', output)
  })
