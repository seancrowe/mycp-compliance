import readline from "readline";

export default function waitForEnter(message = "Press enter to exit")
{
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(message, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}
