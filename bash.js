const bash = require('./bashcmd');

process.stdout.write('\nprompt > ');

process.stdin.on('data', data => {
  const cmd = data
    .toString()
    .trim()
    .split(' ');

  switch (cmd[0]) {
    case 'pwd':
      bash.pwd();
      break;

    case 'ls':
      bash.ls();
      break;

    case 'curl':
      bash.curl(cmd[1]);
      break;

    case 'cat':
      if (cmd[1]) bash.cat(cmd[1]);
      break;

    default:
      process.stdout.write(`${cmd[0]} is not a valid command.`);
      process.stdout.write('\nprompt > ');
  }
});
