const spinner = function (rotations) {
  animation = ['|', '/', '-', '\\'];
  fullRotations = rotations * 2;
  let delay = 100;
  for (let i = 0; i < fullRotations; i++) {
    for (let frame of animation) {
      setTimeout(() => {
        process.stdout.write(`\r${frame}  `);
      }, delay);
      delay += 200;
    }
  }
  setTimeout(() => {
    process.stdout.write('\r|  \n');
  }, delay);
};

spinner(1);