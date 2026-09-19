# Editing Website Content

This guide explains how to add or update content on the lab website, like a new lab member, a new publication, a news item; all of these without writing code. All the examples given here are using the name Suyash Jadhav.

All content is stored in one single file:

```
src/lib/lab-data.ts
```

The file has a `.ts` (TypeScript) extension, but the content itself is plain text arranged in a repeating, fill-in-the-blanks pattern. Editing it means copying an existing block, pasting it where needed, and changing the words inside the quotation marks. No new code needs to be written.

---

## 0. Two rules before editing

1. Every block starts with `{` and ends with `},`. When copying a block, copy it in full, including the braces.
2. All text must stay inside straight double quotes: `"like this"`. Do not compose the text in Word or Google Docs first and paste it in — those programs convert straight quotes into curly quotes (`"` `"`), which will break the file. Edit directly on GitHub (see Section 4), or in a plain text editor.

Following the templates below and changing only the text inside quotation marks will not affect anything else on the page.

---

## 1. Adding or editing a lab member

Find this line:

```
export const people: Person[] = [
```

Below it is a list of blocks, one per person. For example, Suyash Jadhav's entry looks like this:

```ts
{
  slug: "suyash-jadhav",
  name: "Suyash Jadhav",
  role: "Ph.D. Student",
  group: "student",
  photo: photoSuyashJadhav,
},
```

### Editing an existing person

Change the text between the quotes. For example, to update Suyash Jadhav's role:

```ts
role: "Ph.D. Student",
```
becomes
```ts
role: "Senior Research Fellow",
```

Leave the field names on the left of each `:` (`slug`, `name`, `role`, and so on) unchanged.

### Adding a new person

1. Copy a full block, from `{` to `},`, belonging to someone in the same category (see `group` below), and paste it above or below their entry. For example, to add Suyash Jadhav for the first time, a block would be copied from another Ph.D. student's entry.
2. Fill in the fields:

| Field | What to enter | Example |
|---|---|---|
| `slug` | The person's name in lowercase, separated by hyphens, no spaces or punctuation. This becomes the address of their profile page. | `"suyash-jadhav"` |
| `name` | Full display name | `"Suyash Jadhav"` |
| `role` | Their title | `"Ph.D. Student"` |
| `group` | One of: `"pi"`, `"scientist"`, `"student"`, `"staff"`, or `"alumni"`. This determines which section of the People page they appear in. | `"student"` |
| `photo` | See "Adding a photo" below | `photoSuyashJadhav` |

### Adding a photo

This is the one step that involves two different parts of the file, since image files are stored separately from the text.

**Step A.** Add the photo file to:
```
src/assets/people/
```
Name it to match the slug — for Suyash Jadhav, this is `suyash-jadhav.jpg`.

**Step B.** Near the top of `lab-data.ts`, find the block of lines that begin with `import photo`, for example:

```ts
import photoSuyashJadhav from "@/assets/people/suyash-jadhav.jpg";
```

A new person's entry would need a line following the same pattern, with their own name and file in place of Suyash Jadhav's.

**Step C.** In the person's block further down the file, add:
```ts
photo: photoSuyashJadhav,
```

If a photo is not available, this step can be skipped. The site will show the person's initials instead.

### Optional fields for a fuller profile page

Some entries (for example, Dr. Dhotre, Madhumita Bhattacharyya) have a fuller profile page: a bio, education, prior positions, awards, publications, a quote, and interests outside the lab. These fields are all optional — add only the ones for which text is available. Using Suyash Jadhav as an example:

```ts
bio: "Suyash Jadhav is a Ph.D. student in the DDOmics Lab, working on comparative genomics and bioinformatics tool development for probiotic strain verification.",
researchFocus: "Comparative genomics of probiotic strains, and building tools to automate strain verification workflows.",
joinedYear: "2023",
quote: "A short personal quote from Suyash Jadhav.",
outsideLab: "Hobbies or interests outside the lab.",
education: [
  { degree: "M.Sc. Bioinformatics", place: "Savitribai Phule Pune University", period: "2021 – 2023" },
],
experience: [
  { role: "Research Intern", place: "DDOmics Lab, NCCS, Pune", period: "2022 – 2023" },
],
awards: [
  "CSIR-UGC NET JRF, CSIR (2023)",
],
publications: [
  { title: "Title of Suyash Jadhav's paper", venue: "Journal name", year: "2024", doi: "10.xxxx/xxxxx" },
],
```

For `education`, `experience`, `awards`, and `publications`, each item between `{ }` (or in quotes, for awards) is a separate entry. Copy a line to add another entry, or remove a line if there is only one. `doi` is optional and can be left out for a paper that does not have one.

---

## 2. Adding a publication

Find this line:

```
export const publications: Publication[] = [
```

Each entry follows this format:

```ts
{
  title: "Title of Suyash Jadhav's paper on probiotic strain verification",
  authors: "Jadhav, S., Dhotre, D. P.",
  venue: "Journal Name Volume(Issue), Pages",
  year: 2024,
  topic: "Bioinformatics & Multi-omics",
  doi: "10.xxxx/xxxxxxx",
  selected: true,
},
```

To add a new entry, copy a full block and update:

| Field | Notes |
|---|---|
| `title` | Full paper title, in quotes |
| `authors` | Author list as it should be displayed, e.g. `"Jadhav, S., Dhotre, D. P."` |
| `venue` | Journal name with volume/pages |
| `year` | A plain number, without quotes — for example `2024`, not `"2024"` |
| `topic` | Must match exactly one of: `"Human Microbiome & Disease"`, `"Gluten-Related Disorders"`, `"Bioinformatics & Multi-omics"`, `"Pathogen Genomics"`, `"Environmental Microbiology"` |
| `doi` | Optional. Remove the line if there is no DOI. |
| `selected` | Optional. Add `selected: true,` only if the paper should also appear in the "Selected Publications" list; otherwise remove the line. |

---

## 3. Adding a news item

News items cover announcements, media mentions, talks, and similar updates. Find this line:

```
export const newsItems: NewsItem[] = [
```

Each entry follows this format:

```ts
{
  category: "Publication",
  author: "Suyash Jadhav",
  date: "6/18/26",
  iso: "2026-06-18",
  title: "Publication Alert: Short headline about Suyash Jadhav's work",
  excerpt: "One or two sentences summarising the news item.",
  image: artData,
},
```

To add a new item, copy a full block and paste it as the first block in the list, since newer items are listed first. Then update:

| Field | Notes |
|---|---|
| `category` | Must match exactly one of: `"Publication"`, `"Media"`, `"Talks"`, `"Announcements"`, `"Career Notification"` |
| `author` | Who is posting the item, e.g. `"Suyash Jadhav"` |
| `date` | Display format `M/D/YY` — for example `"8/29/26"` |
| `iso` | The same date, written as `"YYYY-MM-DD"` — for example `"2026-08-29"`. This is used for sorting, so it must match `date`. |
| `title` | Headline |
| `excerpt` | One or two summary sentences |
| `image` | Reuse an existing imported image (for example `artData`, `artGut`, `artMicrobes`; see the `import art...` lines near the top of the file), or add a new one following the steps in "Adding a photo" above |

---

## 4. Publishing a change

Changes can be made directly through [github.com](https://github.com), without installing anything locally.

1. Open the repository and navigate to `src/lib/lab-data.ts`.
2. Click the edit icon in the top-right of the file view to edit it directly in the browser.
3. Make the change, following the templates above.
4. Scroll to "Commit changes" and choose "Create a new branch and start a pull request." Do not commit directly to `main`.
5. Give the pull request a short, descriptive title, such as "Update Suyash Jadhav's profile," and open it.
6. Check the Actions tab, or the checks shown on the pull request, after a few minutes. A passing check means the site built successfully. A failing check means something in the edit does not match the expected format; opening it will usually point to the exact line to fix, most often a missing comma or a straight quote that was converted to a curly quote.
7. Once the checks pass, ask Dr. Dhiraj, or whoever has merge access, to merge the pull request. The live site updates automatically after that.

This process catches formatting mistakes before they reach the live site, since a failing check blocks the merge until it is fixed.

---

## Common mistakes

| Mistake | Fix |
|---|---|
| Text composed in Word or Google Docs, then pasted in | Curly quotes break the file. Edit directly on GitHub, or use a plain text editor. |
| Missing comma after a block or a field | Every field and every block needs a trailing comma, with the exception of the last one before a closing `]` (an extra comma there is harmless in this project). |
| Mismatched `{` or `[` | Every `{` needs a matching `}`, and every `[` a matching `]`. |
| A `group`, `topic`, or `category` value that is not in the allowed list | Use one of the exact allowed values listed in the tables above; spelling and capitalization must match exactly. |
| A new photo added without the matching `import photo...` line | The photo will not display, or the build will fail, if the name used in `photo: photoSuyashJadhav,` was not imported at the top of the file. |

If an edit causes unexpected problems, the file history on GitHub can be used to revert it, and the change can be retried in smaller steps.
