# IT Class 10 - Question Answers

CBSE Class 10 Information Technology (Code 402) study modules for employability and subject-specific skills.

## Live Website

Remote: https://studentcbseit10hub.vercel.app/

GitHub Pages deployment is also available from the repository's Pages environment after the deployment workflow succeeds.

## Run Locally

### Requirements

- Ruby
- Bundler

### Steps

```bash
git clone https://github.com/nareshgrampalli-coder/StudentCBSEIT10Hub.git
cd StudentCBSEIT10Hub
bundle install
bundle exec jekyll serve --source docs
```

Open http://localhost:4000/ in a browser.

For example, the exact Jekyll path names are:

- Source folder: `docs`
- Destination folder: `_site`
- Homepage file: `docs/index.md`
- Module folder: `docs/modules`
- Assets folder: `docs/assets`

To build the static site without starting the server:

```bash
bundle exec jekyll build --source docs --destination _site
```

The generated files are written to `_site/`.

## Project Structure

- `docs/index.md` - Home page
- `docs/modules/` - Student study modules
- `docs/assets/` - Images and styles
- `vercel.json` - Vercel build configuration