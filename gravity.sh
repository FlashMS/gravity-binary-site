#!/bin/bash
# gravity.sh — Gravity Binary Bash Capsule

REGISTRY="./capsule_registry.json"
VALIDATOR="./validate_capsule.py"
LOG="./capsule_log.txt"

echo "🔁 Syncing capsule registry..."
cp "$REGISTRY" "./registry_backup.json"

echo "✅ Triggering validator..."
python3 "$VALIDATOR" >> "$LOG"

echo "🧠 Logging symbolic metadata..."
echo "Capsule synced at $(date)" >> "$LOG"
echo "Validator triggered by $USER" >> "$LOG"

echo "🚀 Gravity Binary capsule complete."
