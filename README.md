# blog-next

A personal blog frontend rebuilt with Next.js 16 (app router), migrating from a previous React SPA implementation.
The main goal of this project was to achieve better performance overall.

**Live**: [https://kangko.org](https://kangko.org)
**Backend Repository** https://github.com/kangko05/blog-go

# Tech Stack

**Frontend**
- Next.js 16 (App Router)
- Typescript
- TailwindCSS
- Shadcn ui

**Backend**
- Go (Gin)
- Sqlite

# Performance Comparison

measured using lighthouse (3 runs per page)

## Mobile

```
| Page     | SPA FCP | SPA LCP | Next FCP | Next LCP |
|----------|---------|---------|----------|----------|
| Home     | 3.8s    | 3.9s    | 0.9s     | 2.3s     |
| Notes    | 3.8s    | 3.8s    | 0.9s     | 2.0s     |
| Projects | 3.8s    | 3.8s    | 0.9s     | 2.1s     |
| About    | 3.8s    | 3.8s    | 0.9s     | 2.0s     |
```

## Desktop

```
| Page     | SPA FCP | SPA LCP | Next FCP | Next LCP |
|----------|---------|---------|----------|----------|
| Home     | 0.7s    | 0.7s    | 0.2s     | 0.4s     |
| Notes    | 0.7s    | 0.7s    | 0.2s     | 0.4s     |
| Projects | 0.7s    | 0.7s    | 0.2s     | 0.4s     |
| About    | 0.7s    | 0.7s    | 0.2s     | 0.4s     |

```

## Conclusion

achieved around 3~4 times faster performance across both mobile and desktop.
additionally SEO and Accessability scores improved, as measured by lighthouse.

# Project Structure

```
app/
  about/
  notes/
  projects/
  layout.tsx
  page.tsx
components/
  client/
  server/
  ui/ # shadcn ui components
lib/
  api.ts
  types.ts
```
