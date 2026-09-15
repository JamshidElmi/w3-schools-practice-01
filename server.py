"""Optional teacher extension. Run: python server.py
Open http://localhost:8000 . No packages required. Ctrl+C stops it.
This file stays outside the public website folder.
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from functools import partial
import time

# ========== S01: STATIC FILES AND ONE EVENT STREAM ==========
class ClassroomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path != '/events':
            return super().do_GET()
        self.send_response(200)
        self.send_header('Content-Type', 'text/event-stream')
        self.send_header('Cache-Control', 'no-cache')
        self.end_headers()
        try:
            for seats in range(12, 7, -1):
                # SSE requires 'data:' and two newline characters.
                message = f'data: Sample seats remaining: {seats}\n\n'
                self.wfile.write(message.encode('utf-8'))
                self.wfile.flush()
                time.sleep(2)
        except (BrokenPipeError, ConnectionResetError):
            pass

# ========== S02: LOCALHOST ONLY ==========
root = Path(__file__).parent / 'website'
if not root.exists():
    root = Path(__file__).parent / 'dist'
handler = partial(ClassroomHandler, directory=str(root))
print('Open http://localhost:8000 — press Ctrl+C to stop.')
ThreadingHTTPServer(('127.0.0.1', 8000), handler).serve_forever()
