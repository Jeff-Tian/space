#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5e66132d688f7500194fdd6a/webhook/build/pull > /dev/null
if [[ -z "${UNI_HEART_STACKBIT_API_KEY}" ]]; then
    echo "WARNING: No UNI_HEART_STACKBIT_API_KEY environment variable set, skipping stackbit-pull"
else
    export STACKBIT_API_KEY=$UNI_HEART_STACKBIT_API_KEY
    npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5e66132d688f7500194fdd6a
fi
curl -s -X POST https://api.stackbit.com/project/5e66132d688f7500194fdd6a/webhook/build/ssgbuild > /dev/null
npm run build
curl -s -X POST https://api.stackbit.com/project/5e66132d688f7500194fdd6a/webhook/build/publish > /dev/null
