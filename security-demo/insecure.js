/*
  Intentionally vulnerable code for SAST demo
  This file exists only to trigger CodeQL/Semgrep alerts.
  Do NOT use patterns below in production code.
*/

// 1) Dangerous eval with user-controlled input (CodeQL: js/eval-call, Semgrep: javascript.lang.security.eval-detected)
const userCode = process.env.USER_CODE;
if (userCode) {
  // eslint-disable-next-line no-eval
  eval(userCode);
}

// 2) Command injection risk via child_process.exec (CodeQL: js/command-line-injection, Semgrep: detect-child-process)
const { exec } = require('child_process');
const userCmd = process.env.USER_CMD;
if (userCmd) {
  exec(userCmd, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout || stderr);
  });
}

// 3) Weak hashing algorithm usage (CodeQL: js/weak-cryptographic-algorithm, Semgrep: weak-hash)
const crypto = require('crypto');
const weakHash = crypto.createHash('md5').update('example').digest('hex');
console.log('Weak hash (demo only):', weakHash);

