import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./views";

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
