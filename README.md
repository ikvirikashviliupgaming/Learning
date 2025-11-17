## PixiJS 8 + Spine 4.2 (Vite)

### Prerequisites
- Node 18+

### Install
```
npm install
```

### Run (dev)
```
npm run dev
```
- Opens `http://localhost:5173/`
- Static files served from `assets/` (Vite `publicDir`)

### Build
- Development build:
```
npm run build:dev
```
- Production build:
```
npm run build
```
- Preview built files:
```
npm run preview
```

### Spine assets
- Place JSON, `.atlas`, and images under `assets/test/` (or another folder in `assets/`).
- Example used in code:
  - `assets/test/celestial-circus-pro.json`
  - `assets/test/celestial-circus-pro.atlas`
  - images referenced in the atlas
- They resolve at:
  - `/test/celestial-circus-pro.json`
  - `/test/celestial-circus-pro.atlas`

### Code entry points
- `src/main.ts`: initializes Pixi, loads Spine via aliases, creates `SpineView`, attaches by aliases, starts the first animation.
- `src/spine/spine.view.ts`: Spine wrapper used by `main.ts`.

### Troubleshooting
- 404 JSON/atlas/images: verify files under `assets/` and atlas paths match.
- Blank screen: check DevTools console and confirm the animation name exists.

