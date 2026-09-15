# Discover Toronto — HTML & CSS teaching project

Live site: https://jamshidelmi.github.io/w3-schools-practice-01/ (published from `website/` by GitHub Pages on every push to `main`).

1. Clone the repository (`git clone https://github.com/JamshidElmi/w3-schools-practice-01.git`) or use Code → Download ZIP on GitHub.
2. Read TEACHER-GUIDE.md first.
3. Open website/index.html in your browser, or use the live site.
4. Open the same folder in your editor. Each page has its own CSS file under website/css/.
5. Teach in a separate empty student-work folder. The finished website is the reference answer.

No npm install or build step is required. Internet is needed only for Google Fonts, Ionicons and the optional YouTube example.

For the later API lessons, run `python server.py` (or `py server.py` on Windows) from this folder and visit http://localhost:8000. Ctrl+C stops the server. The server is not needed for ordinary HTML/CSS lessons.

Read CHAPTER-MAP.md or website/chapter-map.html to find each lesson's exact file and comment block. H = HTML; L = lab; C = CSS; J = JavaScript. The map includes 275 unique tutorial/subtopic links; comparison and adaptation rows are explicitly marked.

Use fictional form values. Booking and contact forms do not send emails or create reservations. The GET demonstrations expose entered values in the URL.

The lab has an intentionally invalid CSS value under C21 to teach browser error handling. All other lessons use normal working rules. The SSE example requires the included server and does not work on the GitHub Pages site.

Images: the content pages (home, attractions, attraction, events, gallery, map) use 12 themed city images in website/assets/imgs/. They are WebP files at 1536×1024, named by subject (for example `market-street.webp`), each roughly 45–430 KB. website/assets/placeholder.png is a generic placeholder kept for the lab experiments (image map, float, filters, sprites, masks, form image button, object/embed and video poster). SVG route, favicon and mask are simple code demonstrations.

Hosting: .github/workflows/pages.yml uploads only the website/ folder to GitHub Pages. The guides and server.py at the repository root are not part of the live site.

Verification: local HTML links, assets, unique IDs, label targets and all chapter-map comment labels checked; JavaScript syntax checked; local server and SSE checked. After deployment, every live image link on the content pages was checked and the home page was viewed in a browser.
