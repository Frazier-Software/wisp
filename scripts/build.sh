#!/bin/sh
set -e
cd "$(dirname "$0")/../"

banner="/*
 * Wisp v${npm_package_version}
 * ${npm_package_homepage}
 *
 * Copyright (c) $(date +%Y) Chris Frazier
 * Licensed under the ${npm_package_license} license
 */"

rm -rf dist
mkdir -p dist
lightningcss src/wisp.css --minify -o dist/wisp.css.mini
minify src/wisp.js > dist/wisp.js.mini

echo "$banner" | cat "docs/normalize.css" - "dist/wisp.css.mini" > "dist/wisp.css"
rm -f "dist/wisp.css.mini"

echo "$banner" | cat - "dist/wisp.js.mini" > "dist/wisp.js"
rm -f "dist/wisp.js.mini"
