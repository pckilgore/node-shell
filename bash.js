'use-strict';

const commands = {
  exit: () => process.exit(),
  pwd: () => {
    process.stdout.write(process.cwd());
  },
};

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  try {
    commands[cmd]();
  } catch (err) {
    process.stdout.write(`You typed: ${cmd}, but that doesn't mean anything.`);
  }

  process.stdout.write('\nprompt > ');
});
