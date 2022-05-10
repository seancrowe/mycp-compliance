import path from "path";

export default function getBasePath() {
  return typeof process.pkg === "undefined"
    ? process.cwd()
    : path.dirname(process.execPath);
}
