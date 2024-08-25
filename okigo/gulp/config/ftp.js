import * as dotenv from 'dotenv'

const dot = dotenv.config({
  path: '.env'
}).parsed

const ftpConfig = {
  url_server: dot.URL,
  host: dot.HOST,
  user: dot.USER,
  password: dot.PASSWORD,
  port: 21,
  localRoot: './dist',
  remoteRoot: '.',
  include: ['*', '**/*'],
  deleteRemote: true,
  sftp: false
}

export { ftpConfig }
