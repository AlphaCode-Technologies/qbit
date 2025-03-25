# Code Review Guidelines

## Table of content

- [Code Review Guidelines](#code-review-guidelines)
  - [Table of content](#table-of-content)
  - [Description](#description)
  - [General guidelines](#general-guidelines)
  - [Developer (self) review](#developer-self-review)
  - [Peer review](#peer-review)
  - [Lead review](#lead-review)

## Description

This article describes the code review guidelines for AlphaCode Technologies (Pvt.) Ltd.

## General guidelines

1. Be polite and constructive.
2. Give compliments for exemplary and outstanding work.
3. Keep comments concise and to the point.
4. Resolve all review comments before merging.

## Developer (self) review

1. Has all development criteria/functionality been met?
2. Has proper nomenclature and scaffolding structure been followed?
   1. Folder names should always be in simple kebab-case. `E.g:- my-components`
   2. If the folder represent a collection of files. The folder should always be in plural form. `E.g:- utilities, types`
   3. Components should be in pascal case. `E.g:- DateAndTime, RadioGroup`
3. Does the classes, methods, and functions proper nomenclature and scaffolding?:
   1. Be in camel case. `E.g:- getSomething`
   2. Be concise and meaningful.
   3. Follow _`<verb>[<Adjective>]<Noun>`_ format. `E.g:- getFormattedString, setValue`
   4. Almost always be pure functions.
   5. Separate side effects to another function if possible.
   6. Use KISS principle.
   7. Be checked for edge cases.
   8. have error handling.
4. Are the data types?:
   1. Specified in the `@types` folder.
   2. Checked against existing similar data types and should be reused.
   3. Component types should be grouped together and regions should be defined.
5. Has the branching strategy being followed? - refer [DEVELOPER.md](DEVELOPER.md)
6. Has the commit strategy being followed? - refer [DEVELOPER.md](DEVELOPER.md)
7. Has the variable naming conventions followed?:
   1. Be concise and meaningful.
   2. Use const if the value doesn't change else let,
   3. Be in camel case, unless it is seen as a configuration, in which case should be upper snake case. `E.g:- compoundResult, sum, DEFAULT_TIME_OUT`
   4. Define global constants under `fixtures`.
8. Has unit tests being developed:
   1. Code coverage > 75%.
   2. follow nomenclature & scaffolding guidelines.
   3. Test the code before a PR.
9. Has Storybook documentation been created?
10. Is their any spelling or grammatical errors?
11. Has new libraries been introduced or installed without prior permission?
12. Has the `Package-lock.yaml` been updated?
13. Has proper documentation and comments been provided?
14. Are all console log statements removed?
15. Are their `FIXME` or `TODO` comments for future references?
16. Are their any unused or temporary code?
17. Has the imports been organized under meaningful groups.
18. Has cross-browser compatibility checked? at least fpr the ever-green browsers.
19. Was the project built and tested for any issues and errors prior to committing or raising PR?

## Peer review

1. Are all self-review points covered?
2. Is the code easy to understand?
3. Is the code easy to maintain?
4. Can the time & space complexity be reduced?
5. Can the code be simplified or broken down into palatable chunks?
6. Can the code be optimized for performance?
7. Are best practices being followed?
8. Are their code duplications?
9. Should some of the code be migrated to utility classes/functions?
10. Has accessibility criteria being met?

## Lead review

1. Has architecture compliance been met?
2. Has code quality guidelines been adhered too?
3. Has code reviews been performed?
4. Has code coverage been met?
5. Has unit test been performed?
6. Has the necessary approvals been granted?
7. Has code and data security been met?
