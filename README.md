🛒 PRO-CATALOG: E-Commerce Product Catalog

A super fast product catalog using React, Redux Toolkit, and Tailwind CSS. This showcases modern state management, API integration and a good user experience.

- Features

Global State Managment: Keeping things up-to-date with Redux Toolkit for easy one way data flow across the app.

Live API Connection: * pulls live product data from the Fake Store API.

Dynamic Filtering: Filter products by category (Electronics, Jewelry, etc.) on the fly.

smart Sorting: Sort products by price, high and low, or price- -Product (Weight), can also be fuzzy matching sort.HasKey.assertIsNotBlank()ancellable.

Optimized Loading: Features a "Load More" pagination system to enhance performance and initial load speed.

Fully Responsive: A mobile-first design that scales from 1 column on phones to 4 columns on large desktops.

Loading States: Smooth UI feedback using animated Lucide-React spinners.

- Tech Stack
Frontend: React (Vite)

State Management: Redux Toolkit (RTK)

Styling: Tailwind CSS

Icons: Lucide-React

Language: TypeScript

- Installation & Setup
Clone the repository:

Bash
git clone [your-repository-link]
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Build for production:

Bash
npm run build
🏗️ Project Structure
Plaintext
src/
├── store/
│   └── index.ts       # Unified Redux store & Product slice logic
├── App.tsx            # Main UI Component & Logic
├── main.tsx           # Entry point & Redux Provider setup
└── index.css          # Tailwind directives

💡 Implementation Details
Redux Logic: The app uses createAsyncThunk to handle the asynchronous API call, managing idle, loading, and succeeded states to ensure the UI stays in sync with the data.

TypeScript: Implements strict type checking for the Product interface and Redux hooks (AppDispatch and RootState) to prevent runtime errors.

Deployment:- used netlify for deployment with the following link below

https://resposive-ecommerce-web.netlify.app/
