#!/bin/bash

while inotifywait -e modify "sc.ts"; do
    tsc --noEmitOnError "sc.ts"
done