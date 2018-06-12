const request = require('request');

function curl(url) {
  request.get(url).on('response', response => {
    for (let prop in response)
      if (typeof prop === 'string') process.stdout.write(prop);
    process.stdout.write('\nprompt > ');
  });
}

module.exports = {
  curl: curl,
};
