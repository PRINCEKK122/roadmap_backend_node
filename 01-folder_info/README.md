# 01 · Folder Info

A small Node.js command-line tool that reports what's inside a folder: its name, its full path, and how many files and subfolders it holds.

Part of my [roadmap.sh Node.js projects](https://roadmap.sh/nodejs/projects) series. See the [main README](../README.md) for the full list.

## Requirements

- Accept an optional folder path as a command-line argument.
- Fall back to the current working directory when no path is given.
- Print the folder's name, absolute path, number of files and number of subfolders.
- Handle bad input (missing paths, files instead of folders) without crashing.

## Usage

Requires Node.js 18 or newer (built and tested on v22). There are no dependencies to install.

```bash
# Inspect the folder you're currently in
node folder-info.js

# Inspect a specific folder (relative or absolute path)
node folder-info.js src
node folder-info.js ../some/other/folder
```

### Example output

```
$ node folder-info.js
Folder: 01-folder_info
Path: /home/user/roadmap_backend_node/01-folder_info
Files: 3
Folders: 1
```

If the folder can't be read, the tool prints an error and exits with status code `1`:

```
$ node folder-info.js nope
error: could not read folder: nope
```

## How it works

1. Reads the path from `process.argv[2]`, or uses `process.cwd()` if there isn't one, and resolves it to an absolute path with `path.resolve`.
2. Lists the folder's direct contents with `fs.promises.readdir(path, { withFileTypes: true })`, which returns `Dirent` objects instead of plain names.
3. Uses `entry.isFile()` and `entry.isDirectory()` to sort each entry into a count.
4. Prints the results. If reading the folder fails, it prints an error message and sets `process.exitCode = 1` instead of throwing.

### Counting rules

- **Only the top level is counted.** Files inside subfolders aren't included.
- **Hidden entries are skipped.** Names starting with `.` (such as `.git` or `.env`) aren't counted as files or folders.
- **Symlinks aren't counted.** A symbolic link is neither a file nor a folder as far as `Dirent` is concerned.

## Project structure

```
01-folder_info/
├── folder-info.js   # the CLI
├── src/             # sample folder for trying the tool
│   └── text3.txt
├── text1.txt        # sample files
└── text2.txt
```

## What I learned

- **Async code runs later.** A variable assigned inside `.then()` is still `undefined` on the next line. Code that needs the result has to run after the Promise settles, either inside `.then()` or after an `await`.
- **`async/await` with `try/catch`** does the same job as `.then()/.catch()`, but reads top to bottom.
- **CommonJS vs ES modules.** Top-level `await` only works in ES modules. In a `require()`-based file, `await` has to live inside an `async` function.
- **`process.stdout.write` isn't `console.log`.** Its second argument is an encoding, it only accepts strings or Buffers, and it doesn't add a newline.
- **Block scope.** A `const` declared inside `try { }` doesn't exist outside it.
- **`readdir` never returns `.` or `..`**, and a leading dot only hides a name. `.env` is still a file and `.git` is still a folder.
- **`process.cwd()` vs `__dirname`.** `process.cwd()` is where you ran the command from, and `__dirname` is where the script file lives.

## Next steps

- [ ] Add tests with `node:test`, using a temporary folder with known contents
- [ ] Separate the counting logic from the CLI so it can be imported and tested
- [ ] Include the error code (`ENOENT`, `ENOTDIR`, `EACCES`) in error messages
- [ ] Add a `--recursive` flag
- [ ] Add a `package.json`

## Reflection

- **What was the hardest part?** _TODO_
- **What would break first under real use?** _TODO_
- **What would I change if I rebuilt it?** _TODO_
