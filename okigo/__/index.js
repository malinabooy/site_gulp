#!/usr/bin/env node

import { Command } from 'commander'
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import * as url from 'node:url'
import { mkdirp } from 'mkdirp'
import { printError } from './print-error.js'
import { glob } from 'glob'
import * as path from 'node:path'
import { sep } from 'node:path'

const program = new Command()

const getDirname = () => {
  return url.fileURLToPath(new URL('.', import.meta.url))
}

const getContent = (name, type) => {
  const getPath = () => {
    return path.join(getDirname(), 'templates', `TemplateName.${type}`)
  }

  const file = readFileSync(getPath(), 'utf-8')
  const content = file.replaceAll('TemplateName', name)

  return content
}

const addFile = (path, typeFile, extFile) => {
  const componentName = path.split('/').pop()
  const file = `src/${path}/${componentName}.${extFile}`
  const content = getContent(componentName, typeFile)

  try {
    writeFileSync(file, content, { flag: 'wx' })
  } catch (error) {
    if (error.code !== 'EEXIST') throw error
  }
}

const isMainFolder = (path) => {
  const listFolder = glob.sync('src/*')
  const listName = listFolder.map((path) => path.split(sep).pop())
  const selectFolder = path.split('/')[0]

  return listName.some((folder) => folder === selectFolder)
}

program.argument('<string>').action(async (path) => {
  if (existsSync(`src/${path}`)) {
    return printError('Компонент уже существует 😐')
  }

  if (!isMainFolder(path)) {
    return printError('Не описана сущность компонента 🙊')
  }

  await mkdirp(`src/${path}`)

  addFile(path, 'tsx', 'tsx')
  addFile(path, 'scss', 'module.scss')
})

program.parse()
