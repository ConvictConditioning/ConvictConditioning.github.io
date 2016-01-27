npm run dist
cp -rf ./dist/* ./
git commit -a -m'release'
git push
