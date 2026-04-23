# Rollup and Parcel-Bundler install Guide

cd packages
cd react
yarn init -y
yarn add --dev react @types/react typescript
yarn add --dev rollup rollup-plugin-typescript2
yarn build
cd ..
git branch -m main
git status
cd scss
cd ..
cd react
cd ..
git add .
git commit -m "Fixed markup warnings in MD-files"
git status
git add README-git-monorepo.MD
cd ..
git add .
git commit --amend --no-edit
git config -l
git push
git commit -m "Rollup flatten modules fixed"
git push
git add .
git commit -m "Installed husky in the root"
yarn lint
git add .
git commit -m "Fixed upcomming compatibility issue with husky 10"
git push
yarn build
git add .
git commit -m "Added Button.ts to rollup file"
git push
cd playgounds/react
yarn init -y
y
cd playgrounds/react
yarn init -y
yarn add --dev react @types/react typescript parcel-bundler
...
yarn add --dev react-dom @types/react-dom
