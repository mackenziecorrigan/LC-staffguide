# Life Church Staff AI Resource

A small website that helps staff know when to use AI in their work, plus a shared library of colleagues' real use cases.

- **Site:** plain HTML, CSS, and JavaScript. No build step.
- **Library:** one JSON file per use case in `library/entries/`. An automated check builds `library/index.json`.
- **Contributing:** see [CONTRIBUTING.md](CONTRIBUTING.md).

## One-time setup (maintainers)
1. Create the repository and upload all of these files, keeping the folder structure.
2. **Settings → Pages:** deploy from the `main` branch, root folder.
3. **Settings → Actions → General → Workflow permissions:** choose "Read and write permissions" and check "Allow GitHub Actions to create and approve pull requests."
4. **Issues → Labels:** create a label named `use-case`.
5. **Settings → Branches:** protect `main` and require a pull request review. (Allow the Actions bot to push the index, or bypass for it.)
6. Edit `config.js`: set `repo` to `your-org/your-repo` and optionally `contact`.
7. Edit `.github/CODEOWNERS` with your maintainers' handles.
8. Delete the three `sample-*.json` files when real entries arrive.

## Visibility
GitHub Pages sites from a public repository are public. If entries should be staff-only, check with your organization's GitHub plan about private Pages access, or host the folder on an internal site.

## Local preview
`python3 -m http.server` in this folder, then open http://localhost:8000.
