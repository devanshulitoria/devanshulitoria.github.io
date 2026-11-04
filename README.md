# devanshulitoria.github.io
Devanshu Litoria's machine learning blog, built with Jekyll and Minima on GitHub Pages.

## Local Preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open http://127.0.0.1:4000. For a production build, run `JEKYLL_ENV=production bundle exec jekyll build` on a POSIX shell, or `$env:JEKYLL_ENV = 'production'; bundle exec jekyll build` in PowerShell.

## Writing Posts

Add Markdown files under `_posts` using the `YYYY-MM-DD-title.md` naming convention. Include `layout: post`, `title`, `date`, a concise `description`, and an `excerpt` in the YAML front matter. Use descriptive headings, link to original sources, and explain the context and results of code examples. Preserve existing post URLs when updating content; use `last_modified_at` with the actual update date for substantive revisions.

## Search and AI Discovery

Minima's SEO tags and `jekyll-seo-tag` provide canonical URLs, descriptions, social metadata, and JSON-LD structured data. `jekyll-sitemap` generates `/sitemap.xml`, and `jekyll-feed` generates `/feed.xml`. The public `/robots.txt` allows all crawlers, including Googlebot, OpenAI's OAI-SearchBot and ChatGPT-User, and training crawlers such as GPTBot. This is a permissive policy, not a way to force a crawl.

The generated `/llms.txt` provides a concise Markdown index of the author, pages, posts, and external videos. It is an emerging convention, not a standard that guarantees ChatGPT, Google, or any other service will use it. Server-rendered, accessible HTML and accurate source content remain the primary discovery surface.

After deploying:

1. Confirm GitHub Pages has built successfully and that `/robots.txt`, `/sitemap.xml`, `/feed.xml`, and `/llms.txt` are publicly accessible without unresolved Liquid tags.
2. Verify ownership of `https://devanshulitoria.github.io/` in [Google Search Console](https://search.google.com/search-console), submit `https://devanshulitoria.github.io/sitemap.xml`, and use URL Inspection to request indexing of the homepage and posts. Verification requires access to your Google account; add only the verification token Google actually issues.
3. Optionally submit the sitemap in [Bing Webmaster Tools](https://www.bing.com/webmasters/).
4. Monitor indexing reports, keep links and metadata accurate, and publish useful original content. Indexing and inclusion in AI answers are controlled by each service and cannot be guaranteed. There is no universal ChatGPT submission or verification endpoint.

## Favorite YouTube Videos

Edit [_data/youtube_videos.json](_data/youtube_videos.json) to add, remove, or reorder videos in the homepage grid. The included videos are starter examples; replace them with your favorites.

Each entry has a `title`, `channel`, `youtube_id`, and optional `note`. Use the video ID from a YouTube URL (for example, `aircAruvnKk` from `https://www.youtube.com/watch?v=aircAruvnKk`). Thumbnails and links are generated automatically, and videos appear in the same order as the data file.
