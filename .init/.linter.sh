#!/bin/bash
cd /home/kavia/workspace/code-generation/hindu-temple-architecture-showcase-1435-1449/frontend_nextjs
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

