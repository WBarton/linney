const fs = require('fs');

const componentMethods = require('./components');
const templates = require('../templates');
const capabilities = [];

const addPage = (components, pageConf) => {
  fs
    .mkdirSync(`./dist${pageConf.path}`, { recursive: true });
  fs
    .writeFile(`./dist${pageConf.path}/index.html`, templates.base(components, pageConf), e => {
    if (e) throw e;
    console.log(`PAGE: ${pageConf.name} was created`);
  });
};

const createCapabilities = () => {
  console.log(JSON
    .stringify(capabilities))
  fs
    .mkdirSync(`./dist/data`, { recursive: true });
  fs
    .writeFile(`./dist/data/capabilities.json`, JSON
      .stringify(capabilities), e => {
    if (e) throw e;
    console.log(`DATA: Capabilities was created`);
  });
};

const pages = fs
  .readdirSync('./content')
  .map((page, i, arr) => {
    const pageConf = JSON.parse(fs
      .readFileSync(`./content/${page}/_page.json`, 'utf8'));
    if(pageConf.date) {
      capabilities.push(pageConf);
    }
    if(arr.length - 1 === i) {
      console.log(capabilities)
      capabilities.sort(function(a, b) {
        return a.date + b.date;
      });
      createCapabilities();
    }
    return page;
  })
  .map(page => {
    const pageConf = JSON.parse(fs
      .readFileSync(`./content/${page}/_page.json`, 'utf8'));
    const components = fs
      .readdirSync(`./content/${page}`)
      .filter(file => file.indexOf('json') === -1)
      .map(component => component.slice(0, -3))
      .map(component => componentMethods
        .createContent(`${page}/${component}`))
        .sort(function(a, b) {
          return a.attributes.order - b.attributes.order;
        });
    addPage(components, pageConf);
  });
