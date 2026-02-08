# 🛒 PRO-CATALOG: E-Commerce Product Catalog

A high-performance, responsive product catalog built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project demonstrates modern state management, API integration, and a clean user experience.

---

## 🚀 Features

* **Global State Management**: Powered by Redux Toolkit for seamless data flow across the application.
* **Real-time API Integration**: Fetches live product data from the [Fake Store API](https://fakestoreapi.com/).
* **Dynamic Filtering**: Instantly filter products by category (Electronics, Jewelry, etc.).
* **Smart Sorting**: Sort products by price (Low to High / High to Low).
* **Optimized Loading**: Features a "Load More" pagination system to enhance performance and initial load speed.
* **Fully Responsive**: A mobile-first design that scales from 1 column on phones to 4 columns on large desktops.
* **Loading States**: Smooth UI feedback using animated Lucide-React spinners.

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite)
* **State Management**: Redux Toolkit (RTK)
* **Styling**: Tailwind CSS
* **Icons**: Lucide-React
* **Language**: TypeScript

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/efan12114/Resposive-Ecommerce.git](https://github.com/efan12114/Resposive-Ecommerce.git)
    ```

2.  **Navigate into the directory**:
    ```bash
    cd Resposive-Ecommerce
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  **Build for production**:
    ```bash
    npm run build
    ```

---

## 🏗️ Project Structure

```text
src/
├── store/
│   └── index.ts       # Unified Redux store & Product slice logic
├── App.tsx            # Main UI Component & Logic
├── main.tsx           # Entry point & Redux Provider setup
└── index.css          # Tailwind directives
```
## Deployment

```bash
    https://resposive-ecommerce-web.netlify.app/
```

