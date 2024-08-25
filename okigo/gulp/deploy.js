import gulp from 'gulp'
import replace from 'gulp-replace'
import FtpDeploy from 'ftp-deploy'
import { ftpConfig } from './config/ftp.js'
const { src, dest, series } = gulp

const ftpDeploy = new FtpDeploy()
const url = ftpConfig.url_server

const exp1 = /['"](\/[a-zA-Z0-9\/\-]{1,255}[.][a-zA-Z]{1,255})['"]/g
const exp2 = /href=["'](\/[a-zA-Z0-9\/\-]{1,255})["']/g
const exp3 = /href=["'](\/)["']/g
const exp4 = /<use href=["']([a-zA-Z0-9\/.#-]{1,255})['"]>/g
const exp5 = /url\(['"]?([a-zA-Z0-9\/\-._]{1,255})['"]?\)/g

const replaceToServer = () =>
  src(['./dist/**/*', '!**.{png,jpeg,svg,png,webp}'])
    .pipe(replace(exp1, (match, p1) => match.replace(p1, `${url}${p1}`)))
    .pipe(replace(exp2, (match, p1) => match.replace(p1, `${url}${p1}.html`)))
    .pipe(replace(exp3, (match, p1) => match.replace(p1, url)))
    .pipe(replace(exp4, (match, p1) => match.replace(p1, `${url}${p1}`)))
    .pipe(replace(exp5, (match, p1) => match.replace(p1, `${url}${p1}`)))
    .pipe(dest('./dist'))

const deployFtp = async () => {
  return await ftpDeploy.deploy(ftpConfig)
}

ftpDeploy.on('uploading', (data) => {
  console.log('🚚🚚🚚', data.filename)
})

ftpDeploy.on('uploaded', (data) => {
  console.log('🍀🍀🍀', data.filename)
})

export const deploy = series(replaceToServer, deployFtp)
