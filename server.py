
from http.server import HTTPServer, BaseHTTPRequestHandler
import time

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        time.sleep(0.1)
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(b"OK")

server = HTTPServer(("127.0.0.1", 8000), Handler)

print("Server running at http://127.0.0.1:8000")
server.serve_forever()
