import { serve } from "bun";
import layout from "./layout";
import { Homepage } from "./pages/home";
import { ArcjetChallenge } from "./pages/arcjet-challenge-accepted";

const server = serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === "/") {
      return new Response(layout(Homepage()), {
        headers: { "Content-Type": "text/html" },
      });
    }
    
    if (url.pathname === "/arcjet-challenge-accepted") {
      return new Response(layout(ArcjetChallenge()), {
        headers: { "Content-Type": "text/html" },
      });
    }
    
    // Serve static files
    if (url.pathname.startsWith("/")) {
      const file = Bun.file("public" + url.pathname);
      return new Response(file);
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Listening on http://localhost:${server.port}...`);