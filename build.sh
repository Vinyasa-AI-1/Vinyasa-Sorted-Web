#!/bin/bash

# Build script for Vercel deployment
echo "Building Vinyasa-AI for Vercel deployment..."

# Build the frontend with Vite
echo "Building frontend..."
npm run build

# Move files from dist/public to dist for Vercel
echo "Organizing build files for Vercel..."
if [ -d "dist/public" ]; then
    echo "Moving files from dist/public to dist..."
    cp -r dist/public/* dist/
    rm -rf dist/public
    echo "Files moved successfully"
else
    echo "No dist/public directory found"
fi

# Verify index.html is in the right place
if [ -f "dist/index.html" ]; then
    echo "✅ index.html found in dist/"
else
    echo "❌ index.html not found in dist/ - build may have failed"
fi

echo "Build complete! Ready for Vercel deployment."