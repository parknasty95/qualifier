# Indiana SNAP Navigator V6

Deployable classroom prototype: deterministic eligibility screening + grounded AI explanation.

## Architecture

1. `index.html` performs deterministic screening and records a rule trace.
2. The browser sends only the user's question and (when available) the screening trace to `/api/ask`.
3. `functions/api/ask.js` retrieves matching passages from the approved knowledge base.
4. If no approved passage supports the question, the endpoint refuses to guess.
5. Only retrieved evidence is sent to the OpenAI Responses API for plain-language explanation.
6. The model cannot change the rules-engine result.

## Deploy on Cloudflare Pages

Because this project uses a Pages Function, deploy it from a Git repository or Wrangler rather than a static-file-only upload.

1. Create a GitHub repository and upload the contents of this folder, preserving `functions/api/ask.js`.
2. In Cloudflare, create a **Workers & Pages → Pages** project and connect the repository.
3. Use no framework/build command; the project root contains the static site.
4. After the first deployment, open **Settings → Variables and Secrets**.
5. Add `OPENAI_API_KEY` as an **encrypted secret**. Do not put the key in `index.html`, GitHub, or a Wrangler plaintext `vars` block.
6. Optional: add `OPENAI_MODEL` as a normal variable. Default in this prototype is `gpt-5.6-luna`.
7. Redeploy. The assistant will call `/api/ask` on the same domain.

Cloudflare will assign a public `*.pages.dev` URL. You can later attach a custom domain.

## Local development

Use Wrangler Pages local development if desired. Put secrets in `.dev.vars` (never commit it):

```
OPENAI_API_KEY="your_key_here"
OPENAI_MODEL="gpt-5.6-luna"
```

Then run Pages development from the project directory with Wrangler.

## Ground-truth maintenance

The approved passages in `functions/api/ask.js` are deliberately small for the class prototype. Before representing this as production-ready, expand them from the current Indiana FSSA policy manual and other official sources, attach effective dates/rule IDs, add automated source-update review, and test each rule branch against known cases.

## Important limitation

This is an educational screening tool, not Indiana FSSA and not an official eligibility determination.
