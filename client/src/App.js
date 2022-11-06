import React, { lazy, Suspense } from "react";
import "./App.css";

// Lazy loading
const Header = lazy(() => import("./components/Header"));

const renderLoader = () => {
    <div className="loader">
        <strong>Loading......</strong>
    </div>;
};

function App() {
    return (
        <div>
            <Suspense fallback={renderLoader()}>
                <Header />
            </Suspense>
        </div>
    );
}

export default App;
