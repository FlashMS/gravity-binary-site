import json

with open("capsule_registry.json") as f:
    registry = json.load(f)

required_fields = ["capsule_id", "language", "trust_level"]

for capsule in registry.get("capsules", []):
    for field in required_fields:
        if field not in capsule:
            print(f"❌ Missing field: {field} in capsule {capsule.get('capsule_id', 'unknown')}")
        else:
            print(f"✅ {field} present in capsule {capsule['capsule_id']}")
