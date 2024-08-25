import chalk from 'chalk'

export const printError = (msg) => {
  const title = chalk.bgRed.black(' error ')
  const text = chalk.red(msg)

  return console.log(title, text)
}
