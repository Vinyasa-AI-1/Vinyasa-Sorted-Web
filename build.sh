#!/bin/bash

# Build script for Vercel deployment
echo "Building Vinyasa-AI for Vercel deployment..."

# Build the frontend with Vite
echo "Building frontend..."
npm run build

# Move files from dist/public to dist for Vercel
echo "Organizing build files for Vercel..."
if [ -d "dist/public" ]; then
    cp -r dist/public/* dist/
    rm -rf dist/public
fi

# Copy API functions to the correct location for Vercel
echo "Setting up API functions..."
mkdir -p dist/api
cp -r api/* dist/api/

echo "Build complete! Ready for Vercel deployment."