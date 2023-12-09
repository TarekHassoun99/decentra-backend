#!/usr/bin/env bash
set -e

/opt/wait-for-it.sh postgres:5432
npm run migration:run
npm run seed:run
# Modified to from prod mode to dev mode for volumizing of application to take effect
npm run start:dev
