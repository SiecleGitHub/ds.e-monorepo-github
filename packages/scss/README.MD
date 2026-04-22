# General Project Guide

cd projects
~/projects

cd react
~/projects/react

mkdir ds.e
cd ds.e
~/projects/react/ds.e

mkdir scss
cd scss
~/projects/react/ds.e/scss
yarn init -y
yarn add normalize-scss
yarn add --dev stylelint stylelint-config-sass-guidelines stylelint-config-prettier stylelint-prettier prettier

  <!--
package.json
   "scripts": {
      "lint": "stylelint './**/*.scss'"
  }
   -->

yarn lint

<!--
package.json
  "scripts": {
    "lint": "stylelint './**/*.scss'",
    "lint:fix": "yarn lint --fix"
  }

  yarn lint:fix
  $ yarn lint --fix
  $ stylelint './**/*.scss' --fix
-->
