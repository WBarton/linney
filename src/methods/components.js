const fm = require('front-matter');
const fs = require('fs');
const marked = require('./marked');
const templates = require('../templates');

const createContent = postPath => {
  // get content file
  const data = fs
    .readFileSync(`./content/${postPath}.md`, "utf8");
  const content = fm(data);
  // create object for template
  const { attributes: obj } = content
  // make markup
  obj.body = marked(content.body);
  // select template
  console.log(`Component: ${obj.template}`)
  content.component = templates[obj.template](obj);

  return content;
};

module.exports = {
  createContent: createContent,
};
