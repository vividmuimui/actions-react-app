import { danger, markdown, message, fail, warn } from "danger"

const buidNum = process.env.CIRCLE_BUILD_NUM
if (buidNum === undefined) throw new Error('CIRCLE_BUILD_NUM is undefined')

const coverageUrl = `https://${buidNum}-216242872-gh.circle-artifacts.com/0/tmp/coverage/lcov-report/index.html`
const storyBookUrl = `https://${buidNum}-216242872-gh.circle-artifacts.com/0/tmp/storybook/index.html`

markdown(`- :book: [StoryBook](${storyBookUrl})`)
markdown(`- :chart_with_upwards_trend: [Coverage](${coverageUrl})`)
