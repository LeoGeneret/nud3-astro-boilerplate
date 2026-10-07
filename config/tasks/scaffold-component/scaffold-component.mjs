import Inquirer from 'inquirer'
import { camelCase, pascalCase } from 'change-case'
import createFile from '../../helpers/create-file.mjs'
import config from '../../config.mjs'
import logs from '../../helpers/logger.mjs'

const askWhichComponentFolder = (choices) =>
  Inquirer.prompt({
    type: 'list',
    name: 'subFolder',
    message: 'Which component folder?',
    choices,
  })

const askComponentName = () =>
  Inquirer.prompt({
    type: 'input',
    message: 'Component name?',
    name: 'componentName',
  })

const scaffoldComponent = async () => {
  const { srcDir, componentCompatibleFolders, componentsTemplatesDir } = config

  const { subFolder } = await askWhichComponentFolder(componentCompatibleFolders)
  const { componentName } = await askComponentName()

  const lowerComponentName = camelCase(componentName)
  const upperComponentName = pascalCase(componentName)
  const componentPath = `${srcDir}/${subFolder}/${lowerComponentName}`

  // .astro component
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/astro/component.astro.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.astro`,
    replaceExpressions: { upperComponentName },
  })
  // scss module
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/astro/component.scss.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.module.scss`,
    replaceExpressions: { upperComponentName },
  })

  logs.done('Component created.')
}

scaffoldComponent()
