import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import type { Photo } from "./types/photo";
import SearchBar from "./components/searchBar";
import PhotoGrid from "./components/photoGrid";
import Footer from "./components/Footer";
import { fetchPhotos } from "./utils/api";


const App: React.FC = () => {
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await fetchPhotos();
      setFilteredPhotos(data);
    };

    loadPhotos();
  }, []);

  const handleSearch = async (query: string) => {
    const data = await fetchPhotos(query);
    setFilteredPhotos(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <main className="flex-grow">
        <PhotoGrid photos={filteredPhotos} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
