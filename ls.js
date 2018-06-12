const fs = require('fs');

function ls() {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      process.stdout.write(err.);
      process.stdout.write('\nprompt > ');
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('\nprompt > ');
    }
  });
}

module.exports = {
  ls: ls,
};
