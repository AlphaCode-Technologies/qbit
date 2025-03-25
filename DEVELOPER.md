# Alpha Elements

## Description

It's a React library built as part of the design system for the "KOMODO" platform.

## Table of content

- [Alpha Elements](#alpha-elements)
  - [Description](#description)
  - [Table of content](#table-of-content)
  - [How to install](#how-to-install)
  - [How to setup the SSH](#how-to-setup-the-ssh)
  - [How to run](#how-to-run)
  - [How to build](#how-to-build)
  - [How to run test](#how-to-run-test)
  - [How to run storybook](#how-to-run-storybook)
  - [Folder structure](#folder-structure)
  - [Branching strategy](#branching-strategy)
    - [Naming for branch](#naming-for-branch)
    - [Components of the Branch Name](#components-of-the-branch-name)
    - [Branch name examples](#branch-name-examples)
    - [Additional notes](#additional-notes)
  - [Commit guidelines](#commit-guidelines)
    - [Commit examples](#commit-examples)
  - [Code review guidelines](#code-review-guidelines)

## How to install

- Set your SSH key to github
- Go to the Alpha Elements Repository in Github
- Clone it in your dev machine
- After initial open on the VScode it will recommend some extension to make the development easier please install them. you can check it on `.vscode/extensions.json`
- The project require node js version 22.11.0
- Use pnpm to install dependency and run this project

## How to setup the SSH

- for Windows
  - Goto your cmd then type `ssh-keygen`
  - It will save your key in a specific folder the file name will like id_rsa.pub
  - Goto your github account in the settings option you have an option to update your ssh key info copy & paste your key there.
- for mac
  - Open the terminal
  - Type `ssh-keygen -t rsa`
  - Enter a file name to save the key
  - Enter a passphrase
  - You can copy the ssh public key to your clipboard by running the command `cat ~/ .ssh/id_rsa.pub | pbcopy`
- for linux
  - Open the terminal
  - Run the `ssh-keygen` command
  - use the -t option to specify the type of the key to create
  - Enter the path to the file in which you want to save the key
  - Enter a passphrase
  - key will be created in the ~/.ssh directory you can copy and paste it in your github account

## How to run

In this project we are using `node` & `pnpm`, so need to install them then only you can run it in dev machine.

- Install nvm

  - for windows (ref : <https://github.com/coreybutler/nvm-windows#readme>)

  - for linux/mac (ref: <https://codedamn.com/news/nodejs/nvm-installation-setup-guide>)

    ```bash
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
      nvm --version
    ```

- Install node (v22.11.0)

  ```bash
    nvm install 22.11.0
  ```

- Install pnpm

  - for windows

    ```bash
      nvm pnpm install
    ```

  - for mac/linux

    ```bash
      nvm pnpm install
      corepack enable
      corepack prepare pnpm@latest --activate
    ```

- Install project dependency

  ```bash
    pnpm install
  ```

- Run project

  ```bash
    pnpm dev
  ```

- After running the project you can get more option by pressing `h + enter` for extra option
- Press `o + enter` to Open with your browser to see the result.

## How to build

- Build project

  ```bash
    pnpm build
  ```

- To run the build file

  ```bash
    pnpm dev:preview
  ```

## How to run test

- Test project

  - option 1 (you can able to check the test cases and results by click the icon named testing in code editor)

    ```bash
      pnpm test
    ```

  - option 2 (UI for testing it will open on browser with test cases and results)

    ```bash
      pnpm test:ui
    ```

## How to run storybook

```bash
  pnpm storybook
```

## Folder structure

Use this structure as a template for all components in the project:

Below is the folder structure for the `Checkbox` component.

```bash
src
  └── components
    └── elementType (example: inputs)
      └── elementVariant (example: choices)
        └── element (example: checkbox)
          └── skin
            ├── Default.tsx
            ├── index.ts
            ├── Skin1.tsx  (example: Switch.tsx)
            ├── Skin2.tsx  (example: Padlock.tsx)
          ├── Element.manifest.json (example: Checkbox.manifest.tsx)
          ├── Element.story.tsx (example: Checkbox.story.tsx)
          └── Element.tsx  (example: Checkbox.tsx)
          └── Element.test.tsx (example: Checkbox.test.tsx)
        ├── index.ts
```

## Branching strategy

### Naming for branch

All branches must follow the naming convention: `<prefix>/ACEL-<ID>/<title>`

### Components of the Branch Name

- **`<prefix>`** : Indicates the purpose of the branch. Use one of the following:

  - `feature` : For new features
  - `bugfix` : For bug fixes
  - `chore` : For Initial
  - `docs` : For documentation updates
  - `hotfix` : For urgent fixes
  - `refactor` : For code refactoring
  - `release` : For release preparation

- **`<ID>`** : The Jira ticket ID associated with the task.

- **`<title>`** : A brief, descriptive title for the branch, written in lowercase with words separated by hyphens.

### Branch name examples

1. `feature/ACEL-1234/feature-branch`
2. `chore/ACEL-1235/creating-checkbox`
3. `bugfix/ACEL-1236/bugfix-checkbox`

### Additional notes

- Make sure the branch name is short and clear.
- Use the Jira ticket ID to keep track of your code and the project management tool.
- Avoid using special characters in the `<title>` section.

Using this naming system keeps the code organized and easy for everyone to use.

## Commit guidelines

We follow the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) standard for writing commit messages. The commit message format is: `<type>[optional scope]: <description>`

1. **`<type>`** : Indicates the purpose of the change.

   - `feat` : Introducing a new feature
   - `fix` : Fixing a bug
   - `docs` : Documentation changes
   - `style` : Code style changes
   - `refactor` : Changes in code that do not fix a problem or add something new.
   - `test` : Adding or updating tests
   - `chore` : Maintenance tasks or configuration changes
   - `perf` : Performance improvements
   - `build` : Changes related to build systems or dependencies
   - `ci` : Changes to CI configuration files or scripts

2. **`<scope>`**: Describes the specific area of the codebase affected by the change. Use scopes to clarify which part of the project the commit applies to.

   - Example scopes: `setup`, `ui`, `build`, `testing`, `docs`

3. **`<description>`**: A brief summary of the change that focuses on actions. (e.g., "add," "fix," "update", "setup").

### Commit examples

1. `docs(baseline): add developer.md`
2. `chore(setup): setup tailwindcss`
3. `fix(ui): fix checkbox logic`

For more info about Conventional Commits, visit <https://www.conventionalcommits.org/en/v1.0.0/>

## Code review guidelines

Find the code review guide [here](CODE-REVIEW-GUIDE.md).
