# CV Maker

A React-based CV builder that lets you create, edit, and download a professional CV as a PDF — all in the browser, no account needed.

---

## Features

- Live-edit your CV with an intuitive form-based editor
- Add and remove entries across multiple sections (Experience, Education, and more)
- Instant preview that updates as you type
- Download your CV as a PDF with a single click
- Clean, minimal UI focused on content

---

## Tech Stack

- **React** — component-based UI
- **JavaScript (ES6+)**
- **CSS** — custom styling
- **PDF generation** — browser-based download

---

## Project Structure

```
src/
├── App.jsx          # Root component — holds global CV state
├── Editor/
│   ├── Editor.jsx   # Left panel — renders all editable sections
│   ├── Section.jsx  # Wrapper for each CV section (Experience, Education, etc.)
│   ├── FormList.jsx # Renders a list of form entries within a section
│   └── Forms.jsx    # Individual form fields for each entry
└── index.js
```

### Component Hierarchy

```
App
└── Editor
    └── Section
        └── FormList
            └── Forms
```

State lives in `App` and flows down via props. Add/delete handlers are defined in `App` and passed down to the relevant child components.

---

## Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/cv-maker.git
cd cv-maker
npm install
```

### Run Live

https://cv-application-self-phi.vercel.app/

### Build for Production

```bash
npm run build
```

---

## Usage

1. Fill in your personal details at the top.
2. Use the **Experience** and **Education** sections to add relevant entries.
3. Click **Add** to insert a new entry or the **delete** icon to remove one.
4. Your CV preview updates in real time.
5. Click **Download PDF** to save your CV.

---

## Roadmap

- [ ] Multiple CV templates
- [ ] Drag-and-drop section reordering
- [ ] Local storage persistence
- [ ] Export to DOCX
- [ ] Dark mode

---

## License

 Free to use and modify.

---

## Author

**Rehan**
Chemistry Teacher | Full Stack AI-Integrated React Developer |  