<div align="center">

# 🧊 Three.js Experiments

A collection of small Three.js experiments exploring 3D scenes, lighting, and interactivity — built both with vanilla Three.js and with React Three Fiber.

![Three.js](https://img.shields.io/badge/Three.js-black?style=flat&logo=three.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Overview

This repo contains three small, self-contained 3D demos:

| Demo | Description | Stack |
|------|--------------|-------|
| **Rotating Cube** | A basic spinning cube lit by a directional light | Vanilla Three.js |
| **Cube + Sparkles** | A glowing rotating cube with orbit controls and a sparkle particle field | React + React Three Fiber (`@react-three/fiber`, `@react-three/drei`) |
| **Donut & Platform** | A rotating torus floating above a flat platform, with ambient + spot lighting and orbit controls | Vanilla Three.js |

Each demo is a minimal, focused sandbox for experimenting with Three.js primitives, materials, lighting, and camera controls.

## ✨ Features

- 🔷 Basic geometries: box, torus, and custom materials (`MeshLambertMaterial`, `MeshStandardMaterial`)
- 💡 Multiple lighting setups: directional, ambient, and spot lights
- 🕹️ Interactive orbit controls (zoom, pan, rotate, with damping)
- ✨ Particle effects via `Sparkles` (React Three Fiber / drei)
- 🔁 Continuous animation loops via `requestAnimationFrame`
- ⚛️ Side-by-side comparison of vanilla Three.js vs. React Three Fiber approaches

## 📁 Project Structure

```
├── vanilla-cube/
│   ├── index.html      # Entry point with import map for Three.js CDN
│   └── index.js         # Scene, cube, light, and render loop
│
├── react-fiber-scene/
│   ├── App.jsx           # Canvas, rotating cube, sparkles, orbit controls
│   ├── App.css
│   ├── main.jsx           # React app entry point
│   └── index.css           # Tailwind import + full-height layout
│
├── vanilla-donut/
│   ├── main.js            # Scene, torus, platform, lights, orbit controls
│   └── style.css           # Base reset styles
│
└── README.md
```

> Adjust the folder names above to match how you've organized the files in your repo.


Then open the local URL Vite prints (e.g. `http://localhost:5173`).

**Dependencies:** `three`, `@react-three/fiber`, `@react-three/drei`, `tailwindcss`

## 🧠 How Each Demo Works

### Rotating Cube (vanilla)
Creates a scene, perspective camera, and a `BoxGeometry` cube with a Lambert material, lit by a single directional light. The render loop increments the cube's rotation on every frame.

### Cube + Sparkles (React Three Fiber)
Wraps the scene in a `<Canvas>` component. A `RotatingCube` component uses the `useFrame` hook to rotate the mesh each frame. `OrbitControls` enables mouse-driven camera movement, and `Sparkles` adds an animated particle field around the scene.

### Donut & Platform (vanilla)
Builds a `TorusGeometry` donut and a flat `BoxGeometry` platform, lit with ambient and spot lights. `OrbitControls` (with damping) lets you freely rotate, pan, and zoom around the scene while the donut and platform slowly spin.

## 🛠️ Tech Stack

| Layer        | Technology                                  |
|--------------|-----------------------------------------------|
| 3D Engine    | [Three.js](https://threejs.org/)              |
| React binding | [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) |
| React helpers | [@react-three/drei](https://github.com/pmndrs/drei) |
| Styling      | CSS3, Tailwind CSS (React demo only)          |
| Bundler      | Vite (React demo only)                        |

## 🗺️ Possible Improvements

- [ ] Add a shared landing page linking to each demo
- [ ] Add texture-mapped materials
- [ ] Add GUI controls (e.g. `lil-gui`) for tweaking lights and materials live
- [ ] Add physics (e.g. `cannon-es` or `@react-three/rapier`)
- [ ] Convert vanilla demos to TypeScript

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/your-repo-name/issues) or open a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with 🧊 and Three.js
</div>
