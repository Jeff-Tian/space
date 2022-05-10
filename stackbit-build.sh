#!/usr/bin/env bash

set -e
set -o pipefail
set -v

echo "stackbit-build.sh: start build..."

# fetch data from CMS through stackbit-pull
npm run pull

# build site
npm run build

echo "stackbit-build.sh: finished build"
