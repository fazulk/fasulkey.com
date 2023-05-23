#!/bin/bash

# Fetch the latest changes from origin
git fetch origin

# Checkout to the main branch
git checkout main

# Pull the latest changes from origin's main branch
git pull origin main

# Get the current date/time in ISO 8601 format, and remove colons (:) and hyphens (-) as they are not valid in git branch names
TIMESTAMP=$(date -u +"%Y%m%dT%H%M%S")

# Create a new branch with the timestamp in the name
git checkout -b release/$TIMESTAMP

git push -u origin release/$TIMESTAMP
# Run npm package bump
npm bumpp
