# InfinitePraveen Dark Glassmorphism Portfolio

A Flask-powered dark glassmorphism portfolio for Praveen Kumar / InfinitePraveen.

## Included

- Projects, Passionate Fields, and Special Projects tabs
- 50 research tasks with dedicated internal research article pages
- Two research links on every research card:
  - **Research Article** — opens `/research/<id>` and is marked **Working**
  - **YouTube Video** — opens the supplied/sample Part A YouTube topic link and is marked **Working**
- Separate Presentations tab for Part A (Research) and Part B (Subjects)
- Pull Request / open-source tab for the scikit-learn repository
- Dark glassmorphism responsive UI
- Search and filtering
- Profile photo in the navigation and hero card
- Flask, HTML, CSS, and JavaScript

## Run locally

```bash
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000`.

## Project structure

```text
.
├── app.py
├── data.json
├── requirements.txt
├── README.md
├── templates/
│   ├── index.html
│   └── research_article.html
└── static/
    ├── app.js
    ├── style.css
    └── assets/
        └── profile.jpg
```

The research article pages are generated from the supplied research dataset, so each of the 50 research records has a working dedicated page.
