#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

SKILLS_DIR="skills"
ISSUES=0
WARNINGS=0
PASSED=0

echo "Auditing Brand Building Skills"
echo "=============================="
echo ""

for skill_dir in "$SKILLS_DIR"/*/; do
    skill_name=$(basename "$skill_dir")
    skill_file="$skill_dir/SKILL.md"

    echo -e "${BLUE}Checking: $skill_name${NC}"

    # Check SKILL.md exists
    if [ ! -f "$skill_file" ]; then
        echo -e "  ${RED}FAIL${NC}: SKILL.md not found"
        ((ISSUES++))
        continue
    fi

    # Extract name from frontmatter
    name_value=$(grep -m1 '^name:' "$skill_file" | sed 's/name: *//' | tr -d '"' | tr -d "'" | xargs)

    # Check name matches directory
    if [ "$name_value" != "$skill_name" ]; then
        echo -e "  ${RED}FAIL${NC}: name '$name_value' does not match directory '$skill_name'"
        ((ISSUES++))
    else
        echo -e "  ${GREEN}PASS${NC}: name matches directory"
        ((PASSED++))
    fi

    # Check name format (lowercase, hyphens only, 1-64 chars)
    if [[ ! "$name_value" =~ ^[a-z0-9-]{1,64}$ ]]; then
        echo -e "  ${RED}FAIL${NC}: name '$name_value' contains invalid characters or is too long (max 64)"
        ((ISSUES++))
    else
        echo -e "  ${GREEN}PASS${NC}: name format valid"
        ((PASSED++))
    fi

    # Check description exists and length
    desc_line=$(grep -m1 '^description:' "$skill_file")
    if [ -z "$desc_line" ]; then
        echo -e "  ${RED}FAIL${NC}: description field missing"
        ((ISSUES++))
    else
        desc_length=$(echo "$desc_line" | wc -c)
        if [ "$desc_length" -lt 10 ]; then
            echo -e "  ${RED}FAIL${NC}: description too short"
            ((ISSUES++))
        elif [ "$desc_length" -gt 1024 ]; then
            echo -e "  ${YELLOW}WARN${NC}: description may be too long (>1024 chars)"
            ((WARNINGS++))
        else
            echo -e "  ${GREEN}PASS${NC}: description present"
            ((PASSED++))
        fi
    fi

    # Check SKILL.md line count
    line_count=$(wc -l < "$skill_file")
    if [ "$line_count" -gt 500 ]; then
        echo -e "  ${YELLOW}WARN${NC}: SKILL.md is $line_count lines (recommended: under 500)"
        ((WARNINGS++))
    else
        echo -e "  ${GREEN}PASS${NC}: SKILL.md length OK ($line_count lines)"
        ((PASSED++))
    fi

    echo ""
done

echo "=============================="
echo -e "${GREEN}Passed:${NC}   $PASSED"
echo -e "${YELLOW}Warnings:${NC} $WARNINGS"
echo -e "${RED}Issues:${NC}   $ISSUES"
echo ""

if [ "$ISSUES" -gt 0 ]; then
    echo -e "${RED}Validation failed with $ISSUES issue(s)${NC}"
    exit 1
else
    echo -e "${GREEN}All skills valid!${NC}"
    exit 0
fi
