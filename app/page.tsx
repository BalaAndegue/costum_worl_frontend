"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import SearchBar from '@/components/search-bar';
import BrandLogos from '@/components/brand-logos';
import Sidebar from '@/components/sidebar';
import ProductGrid from '@/components/product-grid';

import Footer from '@/components/footer';

export default function Home() {
  const [currentMegaMenu, setCurrentMegaMenu] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    protection: [] as string[],
    materials: [] as string[],
    sort: 'Les plus populaires'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentMegaMenu={currentMegaMenu}
        setCurrentMegaMenu={setCurrentMegaMenu}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Ajout d'un wrapper sticky pour la search bar et les logos */}
        <div className="sticky top-0 z-10 bg-gray-50 pt-4 pb-4">
          <SearchBar />
          <BrandLogos 
            selectedBrand={selectedBrand}
            onBrandSelect={setSelectedBrand}
          />
        </div>
        
        <div className="flex gap-8">
          <Sidebar 
            selectedBrand={selectedBrand}
            selectedModel={selectedModel}
            onModelSelect={setSelectedModel}
            filters={filters}
            onFiltersChange={setFilters}
          />
          <ProductGrid 
            selectedBrand={selectedBrand}
            selectedModel={selectedModel}
            filters={filters}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}