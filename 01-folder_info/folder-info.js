const fs = require("node:fs/promises");
const path = require("node:path");

async function main() {
  const folder = process.argv[2];
  const folderPath = !folder ? process.cwd() : path.resolve(folder);

  try {
    const entries = await fs.readdir(folderPath, {
      // recursive: true,
      withFileTypes: true,
    });

    let filesCount = 0;
    let dirCount = 0; // since it has a hidden folder of . which represents itself
    for (const entry of entries) {
      if (entry.isFile() && !entry.name.startsWith(".")) filesCount++;
      else if (entry.isDirectory() && !entry.name.startsWith(".")) dirCount++;
    }

    return {
      folder: path.basename(folderPath),
      folderPath,
      filesCount,
      dirCount,
    };
  } catch (error) {
    console.error(`error: could not read folder: ${process.argv[2]}`);
    process.exitCode = 1;
    return null;
  }
}

async function run() {
  const result = await main();
  if (!result) return;

  const { folder, folderPath, filesCount, dirCount } = result;
  console.log(`Folder: ${folder}`);
  console.log(`Path: ${folderPath}`);
  console.log(`Files: ${filesCount}`);
  console.log(`Folders: ${dirCount}`);
}

run()
