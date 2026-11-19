# Roadmap Backend (Node.js)

Working through the roadmap.sh projects one at a time, in Node.js. This covers both:

- [Node.js projects](https://roadmap.sh/nodejs/projects)
- [Backend projects](https://roadmap.sh/backend/projects)

The two lists overlap a lot, so they're merged into one list below.

The goal is to become a strong backend engineer, so each project has to be finished, tested and documented before I start the next one.

---

## Rules

1. **One project at a time.** Don't start the next one until the current one is done.
2. **Read the spec first.** Before writing any code, write down the requirements in the project's own README.
3. **Build it yourself first.** Use docs, MDN and the Node docs. Only look at other people's solutions after you've shipped your own, and then compare them to yours.
4. **Make it work, then make it right.** Get a working version first, then refactor it, add error handling and clean up.
5. **Test it.** Every project gets at least basic tests (`node:test`, Jest or Vitest).
6. **Commit small and often.** Write meaningful commit messages, because the git history is part of the portfolio.
7. **Write it up.** Each project's README covers what it does, how to run it, what I learned and what I'd do differently.
8. **Submit it on roadmap.sh** and read the feedback.

## Definition of done

A project is done when it:

- [ ] Meets every requirement in the roadmap.sh spec
- [ ] Handles bad input and errors without crashing
- [ ] Keeps config and secrets in `.env` (with a committed `.env.example`, never the real `.env`)
- [ ] Has tests that pass
- [ ] Has a README with setup steps and example usage (curl or CLI commands)
- [ ] Has been pushed and submitted

---

## Repo structure

Each project gets its own folder, numbered by the order I build them in:

```
roadmap_backend_node/
├── README.md
├── 01-folder-info/
│   ├── README.md
│   ├── src/
│   ├── tests/
│   └── package.json
├── 02-file-counter/
└── ...
```

---

## Progress

> Order follows the roadmap.sh Node.js list, with the 2 backend-only projects added where they fit.
>
> **Source:** `Node` = Node.js path only · `Both` = on both lists · `Backend` = backend path only

### Beginner

| #  | Project                | Source | Main skills                          | Status |
|----|------------------------|--------|--------------------------------------|--------|
| 01 | [Folder Info](https://roadmap.sh/projects/nodejs-folder-info) | Node   | `fs`, `path`, directory traversal    | ⬜     |
| 02 | File Counter           | Node   | Reading files, streams, string work  | ⬜     |
| 03 | GitHub Profile Details | Node   | `fetch`, external APIs               | ⬜     |
| 04 | JSON Formatter         | Node   | JSON parsing, error handling         | ⬜     |
| 05 | Env Checker            | Node   | `process.env`, safe config handling  | ⬜     |
| 06 | Task Tracker           | Both   | `fs`, JSON storage, argv parsing     | ⬜     |
| 07 | GitHub User Activity   | Both   | HTTP requests, formatting output     | ⬜     |
| 08 | Expense Tracker        | Both   | CRUD, data aggregation               | ⬜     |
| 09 | Number Guessing Game   | Both   | `readline`, control flow             | ⬜     |
| 10 | Unit Converter         | Both   | Server-side rendering, forms         | ⬜     |
| 11 | Personal Blog          | Both   | Templating, basic auth, file storage | ⬜     |
| 12 | Weather API            | Both   | Redis caching, rate limiting, env    | ⬜     |
| 13 | Blogging Platform API  | Both   | REST design, database, CRUD          | ⬜     |
| 14 | Todo List API          | Both   | JWT auth, pagination, validation     | ⬜     |
| 15 | Expense Tracker API    | Both   | Auth, filtering, relational data     | ⬜     |
| 16 | GitHub Trending CLI    | Both   | API queries, CLI flags               | ⬜     |
| 17 | TMDB CLI Tool          | Both   | API keys, CLI design                 | ⬜     |

### Intermediate

| #  | Project                     | Source  | Main skills                          | Status |
|----|-----------------------------|---------|--------------------------------------|--------|
| 18 | Caching Proxy               | Both    | HTTP proxying, cache headers         | ⬜     |
| 19 | Markdown Note-taking App    | Both    | File uploads, Markdown parsing       | ⬜     |
| 20 | Node.js Service Deployment  | Node    | GitHub Actions, SSH, remote servers  | ⬜     |
| 21 | Linux Server Setup          | Backend | Linux, SSH, nginx, firewalls         | ⬜     |
| 22 | Dockerized Service          | Node    | Docker, CI/CD                        | ⬜     |
| 23 | Multi-Container Application | Backend | Docker Compose, networking           | ⬜     |
| 24 | URL Shortening Service      | Both    | Hashing, indexing, redirects         | ⬜     |
| 25 | Broadcast Server            | Both    | WebSockets, connection handling      | ⬜     |
| 26 | E-Commerce API              | Both    | Payments, carts, transactions        | ⬜     |
| 27 | Workout Tracker             | Both    | Data modeling, scheduling, reports   | ⬜     |
| 28 | Image Processing Service    | Both    | Cloud storage, queues, image work    | ⬜     |

### Advanced

| #  | Project                      | Source | Main skills                         | Status |
|----|------------------------------|--------|-------------------------------------|--------|
| 29 | Movie Reservation System     | Both   | Concurrency, seat locking, roles    | ⬜     |
| 30 | Real-time Leaderboard        | Both   | Redis sorted sets, WebSockets       | ⬜     |
| 31 | Database Backup Utility      | Both   | Multiple DBs, compression, CLI      | ⬜     |
| 32 | Scalable E-Commerce Platform | Both   | Microservices, Docker, API gateway  | ⬜     |

Status key: ⬜ not started · 🟨 in progress · ✅ done

---

## Things to study alongside the projects

Learn these as the projects need them:

- **Node.js core**: event loop, modules (ESM vs CommonJS), `fs`, `path`, streams, `process`, error handling
- **HTTP**: methods, status codes, headers, caching, CORS
- **Databases**: SQL (PostgreSQL), indexing, transactions, migrations, and NoSQL (MongoDB, Redis)
- **Auth**: sessions vs JWT, password hashing, OAuth
- **API design**: REST conventions, versioning, pagination, validation, error formats
- **Testing**: unit, integration and API tests
- **Security**: OWASP Top 10, input sanitization, rate limiting
- **DevOps**: Git, Linux, Docker, CI/CD, logging and monitoring
- **Scaling**: caching, queues, load balancing, horizontal scaling

## After each project

Answer these in the project's README:

- What was the hardest part?
- What would break first under real traffic?
- What would I change if I rebuilt it?

---

*Started: November 2026*
