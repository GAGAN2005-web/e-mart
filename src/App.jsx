import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import Signup from "./stores/pages/Signup";
import Signin from "./stores/pages/Signin";
import "./App.css";

import LandingPage from "./stores/pages/LandingPage";
import KitchenPage from "./stores/pages/KitchenPage";
import MobilePage from "./stores/pages/MobilePage";
import CompPage from "./stores/pages/CompPage";
import WatchPage from "./stores/pages/WatchPage";
import MenPage from "./stores/pages/MenPage";
import WomanPage from "./stores/pages/WomanPage";
import FurniturePage from "./stores/pages/FurniturePage";
import AcPage from "./stores/pages/AcPage";
import FridgePage from "./stores/pages/FridgePage";

import MobileSingle from "./stores/singles/MobileSingle";
import ComputerSingle from "./stores/singles/ComputerSingle";
import FurnitureSingle from "./stores/singles/FurnitureSingle";
import KitchenSingle from "./stores/singles/KitchenSingle";
import AcSingle from "./stores/singles/AcSingle";
import MenSingle from "./stores/singles/MenSingle";
import WatchSingle from "./stores/singles/WatchSingle";
import WomanSingle from "./stores/singles/WomanSingle";
import FridgeSingle from "./stores/singles/FridgeSingle";
import UserCart from "./stores/UserCart";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>;
  }

  return (
    <div>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protected Routes - visible only after login */}
        {user ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mobiles" element={<MobilePage />} />
            <Route path="/computers" element={<CompPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/fridge" element={<FridgePage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/woman" element={<WomanPage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/ac" element={<AcPage />} />
            <Route path="/kitchen" element={<KitchenPage />} />
            <Route path="/mobiles/:id" element={<MobileSingle />} />
            <Route path="/cart" element={<UserCart />} />
            <Route path="/ac/:id" element={<AcSingle />} />
            <Route path="/computers/:id" element={<ComputerSingle />} />
            <Route path="/furniture/:id" element={<FurnitureSingle />} />
            <Route path="/kitchen/:id" element={<KitchenSingle />} />
            <Route path="/men/:id" element={<MenSingle />} />
            <Route path="/watch/:id" element={<WatchSingle />} />
            <Route path="/woman/:id" element={<WomanSingle />} />
            <Route path="/fridge/:id" element={<FridgeSingle />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signin" replace />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
