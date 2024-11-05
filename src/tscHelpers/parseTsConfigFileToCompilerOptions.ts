import * as ts from 'typescript'
import * as path from 'path'
import * as fs from 'fs'

type ResultParsingTsConfig = {
    compilerOptions: ts.CompilerOptions,
    rawParsing: ts.CompilerOptions & { exclude?: string[], include?: [] },
    fileNames: ts.ParsedCommandLine['fileNames'],
    projectReferences: ts.ParsedCommandLine['projectReferences']
}

export function parseTsConfigFile(configPath: string): ResultParsingTsConfig {

    const getContent = (configPath: string): string => fs.readFileSync(configPath).toString()
    const output = ts.readConfigFile(configPath, getContent)

    const rawParsing = output.config
    const error = output.error

    if (error) {
        // modeled after the `formatErrors` function in the typescript
        // `tsConfigParsing` unit tests:
        //
        // https://github.com/microsoft/TypeScript/blob/82a04b29b4f60b887c5c548f406d4dbc9462f79b/src/testRunner/unittests/config/tsconfigParsing.ts#L9
        throw new Error(ts.formatDiagnosticsWithColorAndContext([error], {
            getCurrentDirectory: () => "/",
            getCanonicalFileName: filename => filename,
            getNewLine: () => "\n"
        }))
    }

    let parsed: ts.ParsedCommandLine
    let compilerOptions: ts.CompilerOptions
    try {
        parsed = ts.parseJsonConfigFileContent(rawParsing, ts.sys, path.dirname(configPath))
        compilerOptions = parsed.options
    } catch (error) {
        throw new Error(`Error while parsing tsconfig and converting to compiler options \n ${(error as Error).message}`)
    }

    if (parsed.errors && parsed.errors.length) {
        console.error(`erreurs dans parsing tsconfig.json ${JSON.stringify(parsed.errors)}`)
    }

    return {
        compilerOptions,
        rawParsing: rawParsing,
        fileNames: parsed.fileNames,
        projectReferences: parsed.projectReferences
    }
}
