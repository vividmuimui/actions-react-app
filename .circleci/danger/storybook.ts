const buidNum = process.env.CIRCLE_BUILD_NUM
if (buidNum === undefined) throw new Error('CIRCLE_BUILD_NUM is undefined')

const storyBookUrl = `https://${buidNum}-216242872-gh.circle-artifacts.com/0/tmp/storybook/index.html`
export default storyBookUrl
