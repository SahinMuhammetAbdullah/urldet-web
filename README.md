# URLDet - Web

![URLDet Logo](https://urldet.masahin.dev/android-icon-72x72.png)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE) [![React](https://img.shields.io/badge/React-Vite-61DAFB?logo=react&logoColor=white)](https://reactjs.org/) [![Website](https://img.shields.io/badge/Website-urldet.masahin.dev-blue?logo=googlechrome&logoColor=white)](https://urldet.masahin.dev) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./.github/CONTRIBUTING.md)

URLDet Web is the React-based frontend website for the URLDet project. It allows users to manually enter and analyze any URL through a clean interface, view detailed threat reports, and learn more about the project. The live version is accessible at [urldet.masahin.dev](https://urldet.masahin.dev).

[**See the Browser Extension**](https://chromewebstore.google.com/detail/urldet-url-g%C3%BCvenlik-anali/phjancankjcbmdjcdlipmhlnjhljakjf) | [**Read in Turkish (Türkçe Oku)**](./README.tr.md)

## 🔗 Related Repositories

| Repository | Description |
|---|---|
| [**urldet-extension**](https://github.com/SahinMuhammetAbdullah/urldet-extension) | Chrome extension that integrates URL analysis into Google search results |
| [**urldet-web**](https://github.com/SahinMuhammetAbdullah/urldet-web) | React-based website (this repo) |
| [**urldet-api**](https://github.com/SahinMuhammetAbdullah/urldet-api) | Flask backend API powering the ML-based URL analysis engine |

## ✨ Features

- **Manual URL Analysis:** Enter any URL and get an instant detailed safety report.
- **Detailed Results:** View risk scores, threat categories, and analysis breakdowns.
- **Multi-Language Support:** Interface available in English and Turkish.
- **Light & Dark Mode:** Comfortable viewing experience at any time of day.
- **Responsive Design:** Works seamlessly on desktop and mobile browsers.

## 🛠️ Built With

- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Backend (API):** [URLDet Flask API](https://github.com/SahinMuhammetAbdullah/urldet-api)

## 🚀 Getting Started

To run a local development copy, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- A running instance of the [URLDet Flask API](https://github.com/SahinMuhammetAbdullah/urldet-api)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/SahinMuhammetAbdullah/urldet-web.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd urldet-web
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

### Build for Production

```sh
npm run build
```

The output will be in the `dist/` folder, ready to be served by any static file host.

## 🤝 Contributing

Contributions are welcome and greatly appreciated. Please see [`CONTRIBUTING.md`](./.github/CONTRIBUTING.md) for details on the code of conduct and the process for submitting pull requests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Muhammet Abdullah Şahin - [GitHub Profile](https://github.com/SahinMuhammetAbdullah)

Project Link: [https://github.com/SahinMuhammetAbdullah/urldet-web](https://github.com/SahinMuhammetAbdullah/urldet-web)