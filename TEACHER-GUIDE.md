# Discover Toronto — teacher guide

Start here: open `website/index.html` in a browser and open the same file in your editor. The complete site is your reference answer, not the first file the student should copy.

## What is included

Plain HTML, one independent CSS file per page, Ionicons, Google Fonts, 12 themed city images plus a reusable placeholder for lab experiments, local sample media, and separate scripts only for later interactive lessons. There is no npm install, bundler, framework or database.

All place descriptions, events, prices and contact details are classroom samples. Booking and contact forms navigate to a demo confirmation; they do not reserve, email or store requests.

## How to prepare

1. Clone the repository with `git clone https://github.com/JamshidElmi/w3-schools-practice-01.git`, or use Code → Download ZIP on GitHub. Keep the folder structure intact.
2. Open `website/index.html` to inspect the finished result. The same site is live at https://jamshidelmi.github.io/w3-schools-practice-01/ for students without a local copy; it updates about a minute after each push to `main`.
3. Make an empty `student-work` folder beside `website`. Build there during lessons, using the finished source as a reference.
4. Open `website/teacher-guide.html` for this guide in your browser. The `chapter-map.html` checklist maps each current tutorial lesson and sublesson to a file/block.
5. For ordinary HTML/CSS, opening files is enough. For Workers, predictable storage and SSE, install Python if needed, open a terminal in the project folder and run `python server.py` (Windows may use `py server.py`). Visit `http://localhost:8000`. Stop with Ctrl+C. The server binds only to localhost. The SSE demo does not work on the live GitHub Pages site.
6. Internet is required for Google Fonts, Ionicons and the optional YouTube embed. Local text, fallback fonts, image and media continue to work without it.

## Your repeatable teaching routine

Use a flexible 45–75 minute session: 5 minutes of recall; 10 minutes explaining one idea; 15 minutes building together; 15 minutes of independent change; 5 minutes where the student explains the result. Split a lesson when needed. Advanced labs usually need several shorter sessions.

Find the comment label with editor search, for example `H04` in `index.html`, then `C05` in `css/index.css`. H labels mark normal HTML sections, L labels mark lab experiments, C labels mark CSS blocks and J labels mark JavaScript. IDs are local to each file, so always name the file too.

Do not read all CSS at once. Start with content, then apply only the rules needed for that lesson. For each property ask: what does it select, what does it change, what happens if we remove it? Every session ends with a visible result and an explanation from the student.

## Important scope decisions

The chapter map contains all 78 HTML and 197 CSS tutorial/subtopic links captured from the supplied tutorial sidebars on September 15, 2026, ending before certification sections. Quizzes, duplicate links, challenges, exhaustive references and the separate Sass course are not additional implementation requirements. W3Schools can change its menus; use the saved map as this project's baseline.

Most rows point to implemented examples. Rows marked Comparison, Modern equivalent, Ionicons adaptation, Internet demo or Local server are intentionally different: XHTML and obsolete plug-ins are explained rather than installed; alternate icon libraries are compared with the requested Ionicons; framework/template lessons are comparisons so the beginner project remains plain HTML/CSS. This is chapter coverage, not a claim that every property, every W3Schools example or every legacy technology is implemented.

All ordinary pages have their own CSS and no shared CSS imports. C01–C04 and C90–C91 are repeated deliberately for independent study. A later refactoring lesson may move shared rules into a common stylesheet, but that is not necessary for this course. The isolated inline/internal CSS comparison is in `lab-css.html` only.

## Lesson sequence

### 01. Start with an empty file

**Open:** index.html · H01–H03; css/index.css · C01

**Explain:** HTML is a tree of elements. The doctype selects modern parsing. head contains metadata; body contains visible content. title is the browser tab label, while h1 is the page heading. lang and charset serve different purposes.

**Demonstrate:** Create a new student folder and type the document skeleton, heading and paragraph. Do not copy the completed page. Add the stylesheet link only after the student sees the unstyled document.

**Student task:** Change the title and h1 independently. Add a second paragraph.

**Checkpoint:** Student identifies an opening tag, closing tag, element, attribute and text node.

**Watch for:** Saving as index.html.txt; putting visible content in head.

### 02. Links, folders and navigation

**Open:** index.html · H02, H90; css/index.css · C02

**Explain:** Relative paths are resolved from the current file. A nav contains a list of links. A class is reusable; an id is unique. aria-current identifies the current page. The skip link targets main.

**Demonstrate:** Create attractions.html with a heading and link back. Make the navigation work before styling it.

**Student task:** Add a link to contact.html and return to Home.

**Checkpoint:** Every link reaches the intended local file; Tab reaches the skip link.

**Watch for:** Using a Windows disk path in href; using # as an unfinished destination.

### 03. Images and the hero

**Open:** index.html · H04; css/index.css · C05

**Explain:** src locates the image, alt supplies a text alternative, dimensions reserve space. figure and figcaption relate media to its caption. Decorative images need empty alt; each image here has an alt that describes what is actually in it.

**Demonstrate:** Open assets/imgs/illustrated-skyline-hero.webp directly in the browser, then find its img element in H04. Temporarily change src to a missing filename and observe the alt fallback. Restore it.

**Student task:** Swap the hero for another image from assets/imgs/ and rewrite its alt to describe the new picture.

**Checkpoint:** Student explains why alt should describe the actual image, not say image of.

**Watch for:** Using an image as text; forgetting the path from CSS starts inside css/.

### 04. Your first CSS rules

**Open:** css/index.css · C01–C03

**Explain:** A rule has a selector and declarations. Each declaration has a property and value. A semicolon separates declarations. Element selectors match tags; .class selectors match class attributes. Some properties inherit.

**Demonstrate:** Change body colour, then heading font-size. Use DevTools to disable one rule.

**Student task:** Give one featured card a new class and a different border.

**Checkpoint:** Student points to the selector, property and value without help.

**Watch for:** Writing HTML attributes inside a CSS rule; missing braces.

### 05. Spacing and the box model

**Open:** lab-css.html · L11; css/lab-css.css · C11; css/index.css · C03

**Explain:** Content, padding, border and margin form the box. border-box includes padding and border in declared width. Outline is outside the box and does not reserve layout space. Adjacent vertical margins can collapse.

**Demonstrate:** Inspect the box-model panel and compare 20px padding with 20px margin. Toggle box-sizing on the example.

**Student task:** Give the CTA more inside space while keeping the same outside gap.

**Checkpoint:** Student predicts the total width before and after changing box-sizing.

**Watch for:** Using repeated br tags for space; expecting outline to affect width.

### 06. Readable type, colour and icons

**Open:** index.html · H01, H91; lab-css.html · L10, L12

**Explain:** Google Fonts loads DM Sans from another service; Arial and sans-serif are fallbacks. rem follows root size, em follows the relevant font size, and px is a CSS pixel. Ionicons is a web component library. Icons beside text are decorative.

**Demonstrate:** Disable the font request to observe fallback. Change line-height and compare a paragraph. Explain colour contrast.

**Student task:** Add a decorative Ionicon beside a heading without replacing its words.

**Checkpoint:** The page still makes sense when icons and fonts are unavailable.

**Watch for:** Removing visible labels; relying only on colour; assuming a CDN works offline.

### 07. Semantics and rich content

**Open:** attraction.html · H04–H05; lab.html · H05

**Explain:** Choose elements for meaning: strong and em express importance/emphasis; b and i have other semantic uses. blockquote is a block quotation; q is inline. ul, ol and dl represent different relationships. article can stand alone; aside supplements it.

**Demonstrate:** Mark up a short waterfront article, then add a packing list and an itinerary.

**Student task:** Add one abbreviation with a title and a short quotation with attribution.

**Checkpoint:** Student chooses an ordered list only when order matters.

**Watch for:** Using headings for bigger text; choosing every element only for its default appearance.

### 08. Flexbox before Grid

**Open:** index.html · H04; css/index.css · C05; lab-layout.html · L30

**Explain:** Flexbox lays out children along a main axis. gap separates children. flex-wrap allows a new row. flex-basis is a starting size; grow and shrink control available space.

**Demonstrate:** Resize the hero. Then change flex-direction in the lab and ask which axis justify-content now affects.

**Student task:** Make a two-part hero with readable text and an image.

**Checkpoint:** Student identifies the flex container and its direct flex items.

**Watch for:** Applying flex to the children instead of their parent; fixed widths that overflow.

### 09. Cards and Grid

**Open:** attractions.html · H04; css/attractions.css · C03; lab-layout.html · L31

**Explain:** Grid defines tracks in rows and columns. repeat(3, 1fr) makes three equal tracks. A gap is not padding. Named areas help describe larger layouts.

**Demonstrate:** Build one complete card, then duplicate it with different content.

**Student task:** Add a fourth card and predict its row.

**Checkpoint:** Cards wrap by grid placement; heading levels remain logical.

**Watch for:** Copying duplicate ids; using visual order to repair wrong HTML reading order.

### 10. Responsive design

**Open:** index.html · H01; css/index.css · C90; gallery.html · H04

**Explain:** The viewport meta tag enables useful mobile sizing. A media query condition changes selected rules. Fluid images use max-width and auto height. picture chooses sources, while object-fit controls cropping.

**Demonstrate:** Compare widths above and below 700px, then 200% zoom.

**Student task:** Change the card breakpoint and describe the before/after layout.

**Checkpoint:** No page-wide sideways scroll; all text and controls remain readable.

**Watch for:** Making a second mobile HTML page; setting width without accounting for padding.

### 11. Tables for data

**Open:** events.html · H05; css/events.css · C05

**Explain:** caption describes the table. th and scope identify headers. thead and tbody group rows. colspan merges columns; rowspan merges rows. colgroup styles whole columns.

**Demonstrate:** Build the simplest two-column table first; add headers and the merged schedule cells after.

**Student task:** Add a Friday row with a time and activity.

**Checkpoint:** Each row has a consistent logical column count, including spans.

**Watch for:** Using a table for page layout; forgetting merged cells when counting columns.

### 12. Forms from the inside out

**Open:** booking.html · H04; css/booking.css · C05

**Explain:** label for matches id; name is the submitted key. fieldset and legend group related inputs. required is browser validation, not security. GET serializes values into the URL. A real service needs backend validation.

**Demonstrate:** Submit empty fields, then use fictional values and inspect the resulting query string.

**Student task:** Add a required select with meaningful choices.

**Checkpoint:** Clicking a label focuses its control; invalid fields block ordinary submission.

**Watch for:** Placeholder-only labels; omitting name; putting passwords or real personal data in a GET form.

### 13. Form types and attributes

**Open:** lab-forms.html · H04–H05; js/forms.js · J01

**Explain:** Explore every input type in small groups. readonly values submit; disabled values do not. hidden is visible in source. The form attribute links outside controls. Uploads need multipart/form-data and a server.

**Demonstrate:** Compare radio grouping with independent checkboxes; change min, max and step. Use the output calculation after explaining the JavaScript dependency.

**Student task:** Create a date, number and colour input with labels.

**Checkpoint:** Student explains why changing type changes both UI and validation.

**Watch for:** Expecting identical date widgets in every browser; treating a file chooser as a completed upload.

### 14. Gallery and embedded documents

**Open:** gallery.html · H04–H05; contact.html · H06; map.html · H04

**Explain:** A figure is not just a styled div. Lazy loading delays offscreen images. An iframe loads an independent document; it needs a title. A native dialog handles modal focus and Escape after JavaScript opens it.

**Demonstrate:** Open and close the large gallery image using keyboard controls. Inspect the iframe source.

**Student task:** Create another local information page and embed it with a descriptive title.

**Checkpoint:** The student distinguishes a link, an image and an iframe.

**Watch for:** Using an iframe for a normal link; assuming cross-origin iframe contents can be freely styled.

### 15. Audio, video and graphics

**Open:** media.html · H04–H07; lab.html · H06–H07

**Explain:** Media source type declares format. Controls provide native playback. Captions and transcripts make information accessible. SVG is vector markup; canvas needs script to paint pixels. Image-map coordinates depend on rendered size.

**Demonstrate:** Play the bundled silent video and tone. Show the captions, SVG route and canvas data text.

**Student task:** Change the SVG stroke colour and a canvas bar height.

**Checkpoint:** Media sources load; the student can explain SVG versus canvas.

**Watch for:** Autoplaying sound; treating a poster image as a playable video; installing obsolete plug-ins.

### 16. Selectors and the cascade

**Open:** lab-css.html · L13, L22; css/lab-css.css · C13, C22

**Explain:** Specificity, importance and source order resolve competing declarations. Descendant and child selectors are different. Pseudo-classes select states; pseudo-elements target generated portions. Inline and internal styles are comparison examples only.

**Demonstrate:** Inspect the scoped !important example and remove the important flag. Observe which colour wins.

**Student task:** Write one child selector, one adjacent sibling selector and one focus rule.

**Checkpoint:** Student explains the winning declaration using DevTools evidence.

**Watch for:** Solving every conflict with !important; removing focus outlines.

### 17. Position, float and navigation

**Open:** lab-css.html · L14–L15, L18; lab-layout.html · L33

**Explain:** Relative establishes a positioning context; absolute uses the containing block. Fixed uses the viewport in this example. Sticky stays within its scrolling container. Float lets inline text wrap; clear moves below floats.

**Demonstrate:** Compare display:none and visibility:hidden. Scroll the sticky demo. Open details by keyboard.

**Student task:** Move the absolute badge without changing its parent position.

**Checkpoint:** Student names which box defines the offsets and sees why z-index is contextual.

**Watch for:** Using absolute positioning for the entire page; hover-only access on touch devices.

### 18. Polish and advanced visual CSS

**Open:** lab-css.html · L16–L19, L23; lab-layout.html · L32

**Explain:** Gradients are images. Shadows do not change layout size. Transforms change appearance, transitions interpolate changes, and keyframes define animation stages. Masks use alpha/luminance; clip-path clips geometry. 3D needs perspective and preserve-3d.

**Demonstrate:** Change one property in each experiment; do not teach every effect in one sitting. Check reduced-motion settings.

**Student task:** Build one subtle transition with a keyboard equivalent.

**Checkpoint:** Student identifies which styles are optional decoration rather than structure.

**Watch for:** Animating essential information; confusing transform with layout movement.

### 19. Variables, units and feature queries

**Open:** lab-css.html · L20–L21; css/lab-css.css · C20; js/lab-css.js

**Explain:** A custom property stores a reusable value. var has a fallback. @property registers a type. calc, min, max and clamp calculate values. @supports tests browser capability, while media queries test media conditions.

**Demonstrate:** Change --space, then use the button that changes --panel-accent. Resize the viewport.

**Student task:** Create a spacing variable and use it twice.

**Checkpoint:** Student explains the difference between CSS variables and JavaScript variables.

**Watch for:** Assuming a custom property knows its type without registration; using experimental features without fallbacks.

### 20. Print, columns and counters

**Open:** guide.html · H05–H06; css/guide.css · C05–C06, C91; lab-css.html · L20

**Explain:** Columns flow content in reading order. Counters generate presentation, not essential source text. Print is a media type; screen-only navigation can be hidden.

**Demonstrate:** Use browser Print Preview and compare the site with the printed guide.

**Student task:** Add a third itinerary step and confirm numbering adjusts.

**Checkpoint:** The guide remains readable with no background colours.

**Watch for:** Putting essential words only in pseudo-elements; designing only for the screen.

### 21. JavaScript extension: local itinerary

**Open:** planner.html · H04–H05; js/planner.js · J01–J04

**Explain:** This is beyond HTML/CSS. Variables hold state, events trigger actions, DOM methods update the page, and JSON serializes arrays. localStorage survives reload on this origin; it is not a database.

**Demonstrate:** Add stops, reload and clear them. Try dragging and the equivalent Add button.

**Student task:** Change one available stop and its data-stop value.

**Checkpoint:** Saved stops restore; blocked storage shows a useful message.

**Watch for:** Using innerHTML for user data; expecting browser storage to synchronize across devices.

### 22. JavaScript extension: APIs and server

**Open:** lab.html · H08–H10; js/lab.js; js/route-worker.js; server.py

**Explain:** Geolocation requires permission and a secure context. A Worker has no document. EventSource receives events from a server. HTML does not implement these behaviours by itself.

**Demonstrate:** Run python server.py, visit localhost:8000/lab.html, calculate the route and start/stop the sample stream. Deny location permission once.

**Student task:** Explain each API in one sentence before editing any code.

**Checkpoint:** The worker returns 9 km; the stream changes sample seat counts and Stop closes it.

**Watch for:** Expecting SSE on a static file host; calling APIs without handling denial or errors.

### 23. Final review and student ownership

**Open:** All pages; chapter-map.html; css/* · C04, C90, C91

**Explain:** Accessibility includes semantic structure, text alternatives, focus, labels and readable contrast. Optimization includes sensible image sizes and lazy loading. Framework and icon-provider chapters are comparisons: we intentionally use plain CSS and Ionicons.

**Demonstrate:** Navigate the entire site by keyboard, resize it, inspect missing assets and read the chapter map.

**Student task:** Have the student add one new page with its own CSS and explain every block.

**Checkpoint:** Student can rebuild one card, one form field and one responsive layout without copying.

**Watch for:** Claiming a topic is mastered because it appears in the final source.

## File-by-file route

| File | Purpose | Start here |
|---|---|---|
| index.html + css/index.css | Home and foundational styles | H01, then H02, H03, H04, H05, H06 |
| attractions.html + css/attractions.css | Repeating cards | H04 / C03 |
| attraction.html + css/attraction.css | Semantic article and lists | H04–H05 / C05 |
| events.html + css/events.css | Dates and accessible data table | H04–H05 / C05 |
| booking.html + css/booking.css | Useful beginner form | H04 / C05 |
| confirmation.html + css/confirmation.css | Static form destination | H04 |
| contact.html + css/contact.css | Contact form and iframe | H04–H06 |
| map.html + css/map.css | Local iframe document | H04 |
| gallery.html + css/gallery.css | Responsive images and dialog | H04–H05 / C05 |
| guide.html + css/guide.css | Columns, counters and print | H04–H06 / C05, C06, C91 |
| media.html + css/media.css | Local audio/video and embeds | H04–H07 / C05 |
| planner.html + css/planner.css | Later storage/drag lesson | H04–H05 + js/planner.js |
| lab.html + css/lab.css | Specialized HTML and APIs | H04–H11 + js/lab.js |
| lab-forms.html + css/lab-forms.css | Every input type | H04–H05 + js/forms.js |
| lab-css.html + css/lab-css.css | Isolated styling experiments | L10–L23 |
| lab-layout.html + css/lab-layout.css | Advanced layout | L30–L35 |
| teacher-guide.html + css/teacher-guide.css | Teaching sequence | Guide sections |
| chapter-map.html + css/chapter-map.css | Topic coverage checklist | HTML and CSS tables |

## Images

The content pages (home, attractions, attraction, events, gallery and map) use 12 themed city images in `website/assets/imgs/`, named by subject, for example `market-street.webp` or `lakeside-music-sunset.webp`. They are WebP files at 1536×1024, compressed to roughly 45–430 KB each, which is why every img keeps `width="1536" height="1024"`. To swap one, save the new image at the same 3:2 size (or update width and height), change src and rewrite alt to describe the new picture. Keep files small: export photos as WebP or JPG around 1536 px wide rather than full-size camera files, and check the Network panel.

`website/assets/placeholder.png` is a generic placeholder kept for the lab experiments: the image map, float, filters, sprites, masks, form image button, object/embed and the video poster. Replacing that one file updates all of those demos at once. CSS paths use `../assets/` because CSS files are one folder deeper. SVG route, favicon and mask are code examples, not photographic placeholders. `sample-video.mp4` is a silent five-second still-image clip; replace its source, caption track and transcript together. `sample-tone.wav` is a generated two-second tone.

## Common debugging checklist

- Is the file saved and the correct page open?
- Does the path match spelling and uppercase/lowercase exactly?
- Is the stylesheet link inside head and pointing to this page's CSS?
- Is the selector matching an existing class or id?
- Did a missing quote, brace or semicolon break parsing?
- Does a more specific declaration override this one? Inspect Computed styles.
- Is the rule inside a media query that is currently false?
- Is an apparent HTML/CSS issue actually a JavaScript or server requirement?

## Completion assessment

Ask the student to build a new attraction page without copying a complete page, then explain its structure. Require a correct document head, navigation, semantic content, descriptive image alt, labeled form control, matching CSS file, one Flexbox or Grid layout, and a small-screen rule. Assess their explanation and debugging process, not how quickly they type.

## Sources

- [W3Schools HTML tutorial and chapter navigation](https://www.w3schools.com/html/default.asp)
- [W3Schools CSS tutorial and chapter navigation](https://www.w3schools.com/css/default.asp)
- [Ionicons usage](https://ionic.io/ionicons/usage)

All project explanations and examples are original teaching material. This project is not affiliated with W3Schools.
