# Evan Tan — Engineering Portfolio

A deliberately lightweight portfolio for software engineering, machine learning, and forward-deployed engineering roles.

The site focuses on shipped systems and measurable constraints: agentic document processing, production recovery, governed full-stack workflows, low-latency inference, and embedded sensor fusion.

## Highlights

- 1,600+ automated records protected through defensive, idempotent ontology edits
- 174 validated geospatial polygons recovered and visualised for operations
- Sub-100ms dual-model credit decision API
- 100 Hz embedded sensor polling with more than 6.5 hours of runtime

## Stack

The website uses semantic HTML, modern CSS, and a small amount of vanilla JavaScript. There are no frameworks, package managers, web fonts, trackers, or runtime dependencies.

```text
index.html              content and document structure
styles.css              layout, responsive design, and motion
script.js               navigation, scroll reveals, and copy-email interaction
Evan_Tan_Resume.pdf     downloadable résumé
```

## Run locally

Any static file server will work:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Quality decisions

- Responsive layouts tested at desktop and mobile breakpoints
- Reduced-motion support for users who disable animation
- Keyboard-visible focus styles and semantic heading order
- No third-party requests or client-side data collection
- Résumé, LinkedIn, GitHub, and email paths available from every device size

## Contact

- [LinkedIn](https://linkedin.com/in/evan-tan-3b0b59323)
- [GitHub](https://github.com/Evannoshy)
- [Email](mailto:evan_tan@u.nus.edu)

