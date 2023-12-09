#!/usr/bin/env bash
set -e

bash /opt/wait.sh postgres:5432
npm run migration:run
npm run seed:run
npm run start:prod > /dev/null 2>&1 &
bash /opt/wait.sh maildev:1080
bash /opt/wait.sh localhost:3000
npm run lint
npm run test:e2e -- --runInBand
