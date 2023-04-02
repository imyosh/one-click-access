import clipboard from 'clipboardy'
import robot from 'robotjs'

setTimeout(() => {
  clipboard.writeSync('she took my heart,fill it with nothing but PAIN !')
  robot.keyTap('v', ['control'])
}, 1000)
clipboard.writeSync('🦄')
robot.keyTap('v', ['control'])
