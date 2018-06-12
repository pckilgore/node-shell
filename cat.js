const fs = require('fs');

function cat(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      process.stdout.write(err);
      process.stdout.write('\nprompt > ');
    }
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
  });
}
module.exports = {
  cat: cat,
};
