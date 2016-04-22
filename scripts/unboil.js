require('shelljs/global');
var exec = require('child_process').exec;
var inquirer = require('inquirer');

var q1 = {
  name: 'shortname',
  message: 'What is your control component\'s short-name? (e.g., `teleport` for aframe-teleport-controls, `<a-entity controls="position: teleport-controls">`)',
  type: 'input'
};

var q2 = {
  name: 'longname',
  message: 'What is your component\'s long-name? (e.g., `Teleport` for A-Frame Teleport Controls)',
  type: 'input'
};

var q3 = {
  name: 'repo',
  message: 'Where is your controls component on Github? (e.g., yourusername/aframe-teleport-controls)',
  type: 'input'
};

var q4 = {
  name: 'author',
  message: 'Who are you? (e.g., Jane John <jj@example.com>)',
  type: 'input'
};

inquirer.prompt([q1, q2, q3, q4], function (ans) {
  ls(['index.js', 'package.json', 'README.md']).forEach(function(file) {
    sed('-i', 'aframe-example-controls', 'aframe-' + ans.shortname + '-component', file);
    sed('-i', 'Example Controls', ans.longname + ' Controls', file);
    sed('-i', 'Example controls', ans.longname + ' controls', file);
    sed('-i', "'example'", "'" + ans.shortname + "'", file);
  });

  ls('README.md').forEach(function (file) {
    sed('-i', 'example controls', ans.longname + ' controls', file);
    sed('-i', 'example-controls', ans.shortname, file);
  });

  find('examples').filter(function (file) { return file.match(/\.html/); }).forEach(function (file) {
    sed('-i', 'Example Controls', ans.longname + ' Controls', file);
    sed('-i', 'ngokevin/aframe-controls-boilerplate', ans.repo, file);
  });

  ls(['package.json', 'README.md']).forEach(function (file) {
    sed('-i', 'aframe-example-controls', 'aframe-' + ans.shortname + '-controls', file);
    sed('-i', 'ngokevin/aframe-controls-boilerplate', ans.repo, file);
    sed('-i', 'Kevin Ngo <me@ngokevin.com>', ans.author, file);
  });
});

exec("sed '1,/--trim--/d' README.md | tee README.md");
