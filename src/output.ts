import chalk from 'chalk'
import { textSync } from 'figlet'

const clear = () => console.clear()

const writeTitle = (text: string) => {
  const words = text.split(' ')
  for (let ix in words)
    console.log(chalk.yellow(textSync(words[ix], { font: 'Big' })))
}

const writeLine = (text: string) => console.log(chalk.yellowBright(text))

const writeHorizontalLine = () =>
  console.log('-'.repeat(process.stdout.columns))

export { clear, writeTitle, writeLine, writeHorizontalLine }
