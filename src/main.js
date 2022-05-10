import inquirer from "inquirer";
import fetch from "node-fetch";
import fs from "fs";
import getBasePath from "./getBasePath.js";
import waitForEnter from "./waitForEnter.js";

const basePath = getBasePath();

(async () => {
  const credentials = await inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "What is your MyCP username?",
    },
    {
      name: "password",
      type: "password",
      message: "What is your MyCP password?",
    },
  ]);

  const tokenResponse = await fetch(
    "https://my.chili-publish.com/api/v1/Auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials)
    }
  );

  if (!tokenResponse.ok) {
    await waitForEnter("Status was not okay, something is wrong");
    process.exit(1);
  }

  const tokeResponseJson = await tokenResponse.json();

  if (tokeResponseJson.token == null) {
    await waitForEnter("Token not found, something is wrong. I would check your password.");
    process.exit(1);
  }

  const token = tokeResponseJson.token;

  const csvResponse = await fetch(
    "https://my.chili-publish.com/api/v1/internal/compliance",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      }
    }
  );

  await new Promise((resolve, reject) => {
    const dest = fs.createWriteStream(basePath + "/compliance.csv");
    csvResponse.body.pipe(dest);
    csvResponse.body.on("end", () => resolve("it worked"));
    dest.on("error", reject);
  });

  await waitForEnter("File downloaded to compliance.csv");
  process.exit(1);
})();
