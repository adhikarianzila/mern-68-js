#basic programming concept(js-ts)
-Js programming 
-Naming Conventions
    -camelCase - every word's first letter captial except first word
    -PascalCase - every word's first letter captial 
    - snake_case -every word is separated by _ and is in small letter
    - kebab_case -every word is separated by - and is in small letter
    - SCREAMING_SNAKE_CASE= every word is separated by _ and is in  Capital letter

    -variables => camelCase
    - contants => SCREAMING_SNAKE_CASE or camelCase
    -function -> camelCase
    -classes => PascalCase
    -object/properties -> camelCase or snake_case or kebab-case
    -file/folder Name -> kebab-case
    -db properties ->camelCase, sql - snake_case

    -Git- Github
    * version controlling*
    *collabration*
    * Automation(Deployment)*
    Features
    *Issue Tracking/Project Tracking /Forums/Documents**

    we need git - on your working machine -> install git
                -on online provider(Repository provider/Repo provider)- github/gitlab/bitbucket

#OOP
- 4 pillars of OOP
    -`Abstraction`
    -`Encapsulation`
    -`Inheritance`
    -`Polymorphism`
- Object Oriented Programming
- `Class` and `Object`
- CLasses are the blueprint or representation of something (data)
    - A class contains 2 things, `function` and `data`


Nodejs
Every node project contains `package.json` on root location(Imp.)
package.json stores the overall information about all the dependencies that are being used in out project,configuration for the `js/ts`, compiler definition ,envuronment, about project(package), version, scripts, and manymore
-we manage packages and scripts(run) from `Package Managers`
-There are 3 major type of  `Package/Dependency`
    - **Dependency/Local Dependency**
    -e.g. every Next.js project ust have `react, next, react-dom` packages, you need to have `tailwindcss` package in your project to use `Tailwind` in your project
    -Install command `npm install/i <dependency/libraryname[version] [--save] --[force]`
    -e.g. `npm i tailwindcss`
    - **Dev-Dependency**
    -some libraries/packages only needed for development
    -e.g. `nodemon` is only used in order to monitor your node project but only in your local machine but not needed in live/production environment
    -testing related packages.
    -Install command 'npm i --save-dev/ -D <dependency/packageName>'
    -e.g. `npm i --save-dev modemon`
    -e.g. `npm i -D nodemon -D`
    - **Global Dependency**
    -some dependencies required by all or every project you develop
    -e.g. for BE development,if you need to setup a node you need `http` as a package,if you need to use typescript as a language for your project, then you need to setup `typescript` as a global package
    - install `npm i pnpm -g`