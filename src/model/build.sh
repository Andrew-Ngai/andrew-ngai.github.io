#!/bin/sh
# Bundles the tokens-to-turbines model with three.js into model/model.js.
# THREE points at a checkout of github.com/mrdoob/three.js (r187).
set -e
cd "$(dirname "$0")/../.."
THREE="${THREE:-../three.js}"
esbuild src/model/model.js --bundle --minify --format=esm --target=es2020 \
  --alias:three="$THREE/src/Three.js" --alias:three-addons="$THREE/examples/jsm" \
  --banner:js="/*! three.js r187 | MIT License | Copyright © 2010-2025 three.js authors */" \
  --outfile=model/model.js
