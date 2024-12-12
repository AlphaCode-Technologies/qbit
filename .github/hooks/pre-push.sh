#!/bin/bash

# Author: Dulan Sudasinghe
# Date: 2024-11-28

prefix="feature|bugfix|chore|docs|hotfix|refactor|release"
project="ACEL"
title="[a-z0-9]+(-[a-z0-9]+)*"

convention="^($prefix)/$project-[0-9]+/[a-z0-9]+(-[a-z0-9]+)*$"

syntax="<$prefix>/$project-<ID>/<$title>"
example="feature/ACEL-123/feature-branch"

branch=$(git symbolic-ref --short HEAD)

if ! [[ $branch =~ $convention ]]; then
  echo "Invalid branch name: $branch"
  
  echo "Expected syntax: $syntax"
  echo "Example: $example"
  exit 1
fi