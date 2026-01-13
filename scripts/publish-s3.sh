#!/bin/bash

set -e

# Publish DMG to S3
# Usage: ./scripts/publish-s3.sh --bucket <bucket> --prefix <prefix> --profile <profile>

BUCKET=""
PREFIX=""
PROFILE=""

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --bucket)
      BUCKET="$2"
      shift 2
      ;;
    --prefix)
      PREFIX="$2"
      shift 2
      ;;
    --profile)
      PROFILE="$2"
      shift 2
      ;;
    -h|--help)
      echo "Usage: $0 --bucket <bucket> --prefix <prefix> --profile <profile>"
      echo ""
      echo "Options:"
      echo "  --bucket   S3 bucket name (required)"
      echo "  --prefix   S3 key prefix, e.g., 'releases/mac' (required)"
      echo "  --profile  AWS CLI profile name (required)"
      echo "  -h, --help Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Validate required arguments
if [[ -z "$BUCKET" ]]; then
  echo "Error: --bucket is required"
  exit 1
fi

if [[ -z "$PREFIX" ]]; then
  echo "Error: --prefix is required"
  exit 1
fi

if [[ -z "$PROFILE" ]]; then
  echo "Error: --profile is required"
  exit 1
fi

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
DIST_DIR="$PROJECT_ROOT/dist"

# Find DMG file
DMG_FILE=$(find "$DIST_DIR" -maxdepth 1 -name "*.dmg" -type f | head -1)

if [[ -z "$DMG_FILE" ]]; then
  echo "Error: No DMG file found in $DIST_DIR"
  echo "Run 'pnpm build:mac' first to create the DMG"
  exit 1
fi

DMG_NAME=$(basename "$DMG_FILE")

# Remove trailing slash from prefix if present
PREFIX="${PREFIX%/}"

S3_PATH="s3://$BUCKET/$PREFIX/$DMG_NAME"

echo "Publishing to S3..."
echo "  Source: $DMG_FILE"
echo "  Destination: $S3_PATH"
echo "  Profile: $PROFILE"
echo ""

# Upload to S3 with public-read ACL
aws s3 cp "$DMG_FILE" "$S3_PATH" --profile "$PROFILE" --acl public-read

echo ""
echo "Successfully published: $S3_PATH"

# Also upload latest-mac.yml for auto-updates if it exists
LATEST_YML="$DIST_DIR/latest-mac.yml"
if [[ -f "$LATEST_YML" ]]; then
  echo "Uploading latest-mac.yml for auto-updates..."
  aws s3 cp "$LATEST_YML" "s3://$BUCKET/$PREFIX/latest-mac.yml" --profile "$PROFILE" --acl public-read
  echo "Successfully published: s3://$BUCKET/$PREFIX/latest-mac.yml"
fi

# Upload blockmap for delta updates if it exists
BLOCKMAP_FILE="${DMG_FILE}.blockmap"
if [[ -f "$BLOCKMAP_FILE" ]]; then
  echo "Uploading blockmap for delta updates..."
  aws s3 cp "$BLOCKMAP_FILE" "s3://$BUCKET/$PREFIX/$DMG_NAME.blockmap" --profile "$PROFILE" --acl public-read
  echo "Successfully published: s3://$BUCKET/$PREFIX/$DMG_NAME.blockmap"
fi
