# :exclamation: Contributing to Abystar :exclamation:

:dizzy: :star2: Firstly, I extend a large welcome and thank you for showing interest towards contributing to the project! :star2: :dizzy:

**Abystar** reflects data from a game that is consistently under live development. Thus, there will be a continuous cycle in which new characters, weapons, artifacts, etc... must be hardcoded within the program for the forseeable future. Additionally, bugs and missing features may occur at any stage of release. We wish for those excited about this project to help, even if it means a small contribution!

The following is a set of guidelines which pertain to the fair-use of the open source project Abystar. While contributers should follow their own discretion, it is recommended to adhere to these guidelines if possible as to avoid general inconsistencies within the project, and to keep yourself in a non-disruptive workflow. Use your best judgement, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [:exclamation: Contributing to Abystar :exclamation:](#exclamation-contributing-to-abystar-exclamation)
  - [Table of Contents](#table-of-contents)
  - [How Can I Send An Issue?](#how-can-i-send-an-issue)
    - [Reporting Bugs and Requesting Features](#reporting-bugs-and-requesting-features)
      - [How Do I Submit A (Good) Bug Report?](#how-do-i-submit-a-good-bug-report)
      - [How Do I Submit A (Good) Enhancement Suggestion?](#how-do-i-submit-a-good-enhancement-suggestion)
    - [Types of Issues and Issue State](#types-of-issues-and-issue-state)
  - [How Can I Contribute?](#how-can-i-contribute)
    - [Your First Code Contribution](#your-first-code-contribution)
    - [Getting Setup](#getting-setup)
      - [Forking](#forking)
      - [Running Your Local Environment](#running-your-local-environment)
    - [Pull Requests](#pull-requests)
    - [Styleguides](#styleguides)
      - [Git Commit Messages](#git-commit-messages)
      - [TypeScript Styleguide](#typescript-styleguide)
    - [Implementing Characters](#implementing-characters)
      - [Choosing A Character](#choosing-a-character)
    - [Implementing Weapons](#implementing-weapons)
    - [Implementing Artifacts](#implementing-artifacts)

## How Can I Send An Issue?

### Reporting Bugs and Requesting Features

> [!IMPORTANT]
> If it's a simple inquiry, please don't file an issue. Read through this document first to find your problem. If need be, you may contact one of the maintainers: [jktrn](https://github.com/jktrn), [nilocnus](https://github.com/nilocnus), and [vinal2](https://github.com/vinal2) for any further questions.

Say you found a bug or error with Abystar in its current state. Perhaps you wish to add a feature that wasn't already requested within the [issues](https://github.com/jktrn/abystar/issues) tab. But maybe you don't want to go through the hassle of implementing them yourself. Make sure to take a thorough look through both the *Open* and *Closed* threads for any existing matches to your problem(s).

If not, you are free to open a new thread in the issues tab. While there are no strict rules for how you should structure it, try to make your text as clear as possible in the subject, and detail everything within the body.

#### How Do I Submit A (Good) Bug Report?

> [!NOTE]
> Remember, these are only guidelines, not hard strict rules. Follow your own discretion when necessary.

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. When listing steps, *don't just say what you did, but explain how you did it*.
- **Provide specific examples to demonstrate the steps**.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Try to include screenshots and animated GIFs and/or video** which show you following the described steps and clearly demonstrate the problem. You don't necessarily need these visual mediums, but they help.

At a baseline, please add the "*bug*" label before submitting the issue.

#### How Do I Submit A (Good) Enhancement Suggestion?

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you wish to see instead** and why. Applicable for if you're requesting enhancements.
- **Attempt to provide a visualization** either through a drawing, examples from other sites, anything that can display the enhancement's proof-of-concept in some way.
- **Explain why this feature would be useful**.

At a baseline, please add the "*enhancement*" label before submitting the issue.

***DO NOT*** assign maintainers/other contributors, even if they may seem relevant. If you do not plan to contribute directly towards the issue, leave the assignment blank. If you do choose to help contribute to your own issue, assign yourself. We may manually assign ourselves at some point if we are to fix or implement the issue.

If duplicate threads are found in the issues tab, it **will be closed** without exception.
> [!NOTE]
> If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one. IF you find an **Open** issue that follows this, do not open a new issue. Instead, make a comment in the issue.

### Types of Issues and Issue State

| Label name | Description |
| :--- | :--- |
| `enhancement` | Features and/or requests. |
| `bug` | Confirmed bugs or reports that are very likely to be bugs. |
| `dependencies` | Applied only on pull-requests which alter or update a dependency file. |
| `documentation` | Improvements or additions to existing, or new documentation. |
| `good-first-issue` | Good issues for newcomers. Thank you for contributing! |
| `question` | Further information is requested. This is not a label for asking general inquiries. |
| `help-wanted` | Extra attention may be needed. **Do not** use this label unless if you are a contributor. |
| `low-priority` | Doesn't require immediate attention. These issues may be a hindrance to the project but not to any significant degree. Will be assigned according to the pipeline. |
| `medium-priority` | Requires attention. These are issues that should be resolved relatively soon to ensure the project works properly. Will be assigned according to the pipeline. |
| `high-priority` | Requires immediate attention. These are issues that should be resolved ASAP. Will be assigned according to the pipeline. |
| `duplicate` | The issue or pull-request already exists. When assigned, the respective thread will be closed. |
| `invalid` | Something about the issue isn't right. Ex: *it's a bug that can't be replicated, is not a bug, a feature that isn't suitable, etc...* |
| `wontfix` | An acknowledgement that such a request or issue exists, but won't exist in the pipeline for implementation or fixing for whatever reason. |

## How Can I Contribute?

### Your First Code Contribution

Unsure where to begin contributing to Abystar? You can begin by looking through the `good-first-issue` and `help-wanted` issues. As stated in the issue states chart above, these are often solid challenges of varying difficulty.

Abystar is largely in need of help from hard-coding existing characters, weapons, artifacts, and the like whenever a new update for Genshin implements these. We will present you with a guide further down this document.

### Getting Setup

#### Forking

Abystar maintains its cleanliness as a repository. As a result, contributors unfortunately are not permitted to branch off of the main respository. Therefore, we ask all contributors to create a **local fork** of the project.

In the main page, select your option to create a fork in between the buttons of starring and watching. As stated by Github, forking a repository allows you to freely experiment with changes without affecting the original project. If you are not familiar with this, we suggest you take a further look into how they work.

When you create your fork, you are free to do whatever you like with it. Whether or not you decide to work off of the master branch from your own fork is up to you. Verify that regardless of which option you take, you are able to create a pull request that sends the desired commits. Whatever happens is strictly your responsibility, including any loss of data.

> [!WARNING]
> It is ***highly recommended*** to update the head your forked repository to the master branch of Abystar if it ever becomes desynced. If the head is mismatched, your pull requests may show past commits that are already merged with the master branch. However, we recommend you do this only when your pull-request is accepted and merged, otherwise you may lose progress from your local fork.

#### Running Your Local Environment

You may choose to use whatever text editor or IDE you prefer. However, make sure that it is up for the task as this is a large project. We recommend [Visual Studio Code](https://code.visualstudio.com/) with whatever setup to meet your fancy.

When cloning your forked repository, place it within a directory that you feel comfortable accessing. Don't throw it in a random spot. If you aren't sure how to do this, [check this out](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

You may setup your workspace to your pleasing, however, we recommend having two separate consoles open consecutively. One for running the development server, and one for running commands such as git commits.

In order to start the development server, we recommend you take a look at the [README.md](README.md) for instructions on how to start. Remember that this is a [Next.js](https://nextjs.org) project, so you must first run `npm install` within the terminal to install all the dependencies before beginning.

### Pull Requests

The process described here has several goals:

- Maintain Abystar's quality and consistency.
- Fix problems that are important to users.
- Enable a sustainable system for Abystar's maintainers to review contributions.

If you follow these steps when choosing to create a pull request, we will love you forever (legally non-binding statement):

1. Follow the [styleguides](#styleguides).
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

> [!IMPORTANT]
> If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will either re-run the status check, or manually accept the merge request.

While the prerequisites above must be satisfied prior to having your pull request reviewed, we may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted. Don't feel discouraged by this, if you have any concerns, make it clear and we will help.

### Styleguides

#### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for aligning consistency within the repository. We *highly recommend* you take a small moment to take a look through the linked webpage. The convention is largely intuitive, so we hope you will find easy to learn and understand.

> [!TIP]
> If you find trouble picking a relevant type, choose the one that makes the most sense to you. As long as it roughly aligns with the content of the commit, it's acceptable.

Additionally, here are some other tips for how you can structure your commit message(s):

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

#### TypeScript Styleguide

This is a [React](https://react.dev/)-based project, so we operate `.tsx` files to make use of its native [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html) functionality.

All TypeScript code is linted with [Prettier](https://prettier.io/).

- We largely prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`.
- We prefer not to inline any `export` instances with expressions. However, there are some exceptions within the repository.

  ```ts
  // Most of the time, we use this:
  class ClassName {

  }
  export default ClassName

  // Instead of:
  export default class ClassName {

  }

  // With some exceptions of course.
  ```

- We **ALWAYS** put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
- Nearly all variables and constants follow the CamelCase naming convention. For example, `characterBonus` over `character_bonus` or `CharacterBonus`. **Do not** use other naming conventions like SnakeCase or PascalCase for variables unless otherwise stated. They are reserved for the names of `.py`, `.tsx` files respectively.
- We mainly use the [K&R](https://en.wikipedia.org/wiki/Indentation_style#K&R) indentation style. Don't attempt to mix in other styles as it will create indentation inconsistencies within the code. If you have any trouble understanding how to structure your code consistently, we highly recommend you cross-reference files of similar nature.

### Implementing Characters

**Characters** are largely the most complex classes to implement. However, they are also the bread and butter to Abystar. Here, you will find a general guide to implementing characters. While it is recommended to maintain some level of programming experience for this section, don't be dissuaded if you're new and looking to learn. Take a shot at it!

#### Choosing A Character

Cross-reference the `issues` tab to make sure that it someone isn't already assigning themselves to the character that you wish to implement. If you aren't sure where to begin, choosing characters from earlier versions of the game is typically a good starting point as they often have simpler kits.

The most intuitive way of checking the current state of all implemented characters is to directly access Abystar either through the [main webpage](https://abystar.vercel.app), or through your localhost. Characters that are greyed out are not considered implemented.

This code is reflected through the `characters.json` file located in the `\src\components\data\characters` directory. Keep this file in mind, as it is crucial for finishing implementation later on.

### Implementing Weapons

> [!CAUTION]
> **W.I.P**: Guide not created yet.

### Implementing Artifacts

> [!CAUTION]
> **W.I.P:** Artifact system isn't implemented yet.

---

[Back to top :arrow_up:](#table-of-contents)
