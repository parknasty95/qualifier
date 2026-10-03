# Qualifier — Indiana Benefits Navigator

Deployable classroom prototype for preliminary screening across:
- SNAP
- Medicaid
- WIC
- LIHEAP / Indiana Energy Assistance Program
- Housing Choice Voucher (Section 8)
- CHIP / Hoosier Healthwise Package C
- Free / Reduced-Price School Meals
- TANF Cash Assistance

## Architecture
Official government sources → structured questionnaire → deterministic program-specific screening → reason codes → approved-source retrieval → grounded OpenAI explanation.

The AI does not determine eligibility or invent thresholds. When the approved evidence or encoded rule is insufficient, Qualifier flags the issue for agency review.

## Deployment
Keep this structure at the repository root:

functions/
  api/
    ask.js
index.html
README.md

Cloudflare Pages:
- Build command: exit 0
- Build output directory: .
- Secret: OPENAI_API_KEY
- Optional variable: OPENAI_MODEL

## Important
This is a preliminary screening prototype, not an official benefits determination. Rules and thresholds must be revalidated as agencies update policy.
