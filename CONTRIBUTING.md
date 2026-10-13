# Contributing

Thank you for sharing what works. Every entry helps a colleague save time.

## Easiest way (no coding)
1. Open the site's **Share yours** page and fill it in, or go to **Issues → New issue → Share a use case**.
2. Submit. A pull request is created for you automatically.
3. A maintainer reviews it and, once merged, it appears in the **Team library** within a minute or two.

## Adding it yourself
Create a file in `library/entries/` named like `my-use-case.json`:

```json
{
  "title": "Weekend volunteer reminder messages",
  "category": "Communicate",
  "team": "Kids",
  "summary": "Turns the schedule into friendly reminders.",
  "tool": "Any AI assistant",
  "timeSaved": "about 1 hour a week",
  "prompt": "Here is the schedule: [paste]. Write a short reminder for each role...",
  "tips": "Read each message before sending.",
  "assetText": "Optional reusable template text",
  "assetLink": "https://optional-link-to-a-shared-file",
  "contributor": "Optional name",
  "date": "2026-10-13"
}
```
`category` must be Organize, Create, Communicate, Plan, Collaborate, or Think. `title`, `category`, and `summary` are required, plus at least one of `prompt`, `assetText`, or `assetLink`. Do not edit `library/index.json`; it is built automatically.

## Please keep it safe
- No private information about people: prayer requests, counseling, health, finances, or children's details.
- Use [brackets] for names and specifics in prompts.
- Link to shared files rather than uploading anything confidential.
