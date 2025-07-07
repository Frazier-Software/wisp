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
minify src/wisp.css > dist/wisp.css.mini
minify src/wisp.js > dist/wisp.js.mini

for file in dist/*.mini; do
  echo "$banner" | cat - "$file" > "${file%.mini}"
  rm -f "$file"
done
