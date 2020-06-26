const cypress = require('cypress');
const fse = require('fs-extra');
const {merge} = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

async function runTests() {
    await fse.emptyDir('mochawesome-report');
    const { totalFailed } = await cypress.run();
    const jsonReport = await merge();
    await generator.create(jsonReport, {inline: true});
    process.exit(totalFailed);
}

runTests();