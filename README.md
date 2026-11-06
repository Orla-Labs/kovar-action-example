# kovar-action-example

A working example of the [Kovar](https://github.com/Orla-Labs/kovar) GitHub Action.

`server.js` is a tiny fixture app: `/secure` sends good security headers, `/insecure` sends none. The workflow in [`.github/workflows/security.yml`](.github/workflows/security.yml):

1. starts the app,
2. runs `Orla-Labs/kovar/.github/actions/security-check@v0.7.0` against `/secure` (passes) and `/insecure` (fails, as expected),
3. posts one PR comment with the score and findings, updated in place on every push,
4. uploads the SARIF report to GitHub code scanning (see the Security tab).

Point `url:` at your own staging URL to use it. Docs: [kovar.orlalabs.com/ci/github-action](https://kovar.orlalabs.com/ci/github-action/).
