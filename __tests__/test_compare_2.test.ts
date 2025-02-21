import { compareErrors } from '../src/compareErrors'
import { ErrorTs } from '../src/main'
import { errorsCurrentBranch } from './test_compare_2/errorsCurrentBranch'
import { errorsBaseBranch } from './test_compare_2/erreursBaseBranch'
import { lineNumbers } from './test_compare_2/lineNumbers'
import { filesAdded, filesModified, filesRemoved } from './test_compare_2/filesChanged'

test.skip('1. compare errors test 2', () => {

    const resultCompareErrors = compareErrors({
        errorsBefore: errorsBaseBranch,
        errorsAfter: errorsCurrentBranch,
        filesChanged: filesModified.split(' '),
        filesAdded: filesAdded.split(' '),
        filesDeleted: filesRemoved.split(' '),
        lineNumbers: lineNumbers
    })

    expect(resultCompareErrors.errorsAdded).toHaveLength(2)

})
