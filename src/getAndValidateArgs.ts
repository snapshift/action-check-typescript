import { getBooleanInput, getInput } from '@actions/core'

export const enum CHECK_FAIL_MODE {
  ON_ERRORS_ADDED_IN_PR = 'added',
  ON_ERRORS_PRESENT_IN_PR = 'errors_in_pr',
  ON_ERRORS_PRESENT_IN_CODE = 'errors_in_code'
}

export const enum OUTPUT_BEHAVIOUR {
  COMMENT = 'comment',
  ANNOTATE = 'annotate',
  COMMENT_AND_ANNOTATE = 'both'
}

export const enum COMMENT_BEHAVIOUR {
  NEW = 'new',
  EDIT = 'edit'
}

type Args = {
  repoToken: string
  directory: string
  tsConfigPath: string
  filesChanged: string[]
  filesAdded: string[]
  filesDeleted: string[]
  /**
   * @example
   * [{
   *         "path": "src/getAndValidateArgs.ts",
   *         "added": [
   *             6,
   *             15,
   *             17
   *         ],
   *         "removed": [
   *             6,
   *             15
   *         ]
   *     },
   *     {
   *         "path": "src/getBodyComment.ts",
   *         "added": [],
   *         "removed": [
   *             1,
   *             2
   *         ]
   *     }
   * ]
   */
  lineNumbers: { path: string, added: number[], removed: number[] }[]
  useCheck: boolean
  checkFailMode: CHECK_FAIL_MODE
  outputBehaviour: OUTPUT_BEHAVIOUR
  commentBehaviour: COMMENT_BEHAVIOUR
  debug: boolean
}

export function getAndValidateArgs(): Args {
  const args = {
    repoToken: getInput('repo-token', { required: true }),
    directory: getInput('directory'),
    tsConfigPath: getInput('ts-config-path'),
    filesChanged: (getInput('files-changed') ?? "").split(" "),
    filesAdded: (getInput('files-added') ?? "").split(" "),
    filesDeleted: (getInput('files-deleted') ?? "").split(" "),
    lineNumbers: JSON.parse(getInput('line-numbers')),
    useCheck: getBooleanInput('use-check'),
    checkFailMode: getInput('check-fail-mode', { required: true }) as CHECK_FAIL_MODE,
    outputBehaviour: getInput('output-behaviour') as OUTPUT_BEHAVIOUR,
    commentBehaviour: getInput('comment-behaviour') as COMMENT_BEHAVIOUR,
    debug: getBooleanInput('debug')
  }

  if (![
    CHECK_FAIL_MODE.ON_ERRORS_ADDED_IN_PR,
    CHECK_FAIL_MODE.ON_ERRORS_PRESENT_IN_CODE,
    CHECK_FAIL_MODE.ON_ERRORS_PRESENT_IN_PR
  ].includes(args.checkFailMode)) {
    throw new Error(`Invalid value ${args.checkFailMode} for input check-fail-mode`)
  }

  if (![
    OUTPUT_BEHAVIOUR.COMMENT,
    OUTPUT_BEHAVIOUR.ANNOTATE,
    OUTPUT_BEHAVIOUR.COMMENT_AND_ANNOTATE
  ].includes(args.outputBehaviour)) {
    throw new Error(`Invalid value ${args.outputBehaviour} for input output-behaviour`)
  }

  if (![
    COMMENT_BEHAVIOUR.NEW,
    COMMENT_BEHAVIOUR.EDIT,
  ].includes(args.commentBehaviour)) {
    throw new Error(`Invalid value ${args.commentBehaviour} for input comment-behaviour`)
  }

  return args
}
