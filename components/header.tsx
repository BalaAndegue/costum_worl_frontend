"use client";

import { useState } from 'react';
import { Search, User, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenuProducts from '@/components/mega-menu-products';
import MegaMenuMotifs from '@/components/mega-menu-motifs';

interface HeaderProps {
  currentMegaMenu: string | null;
  setCurrentMegaMenu: (menu: string | null) => void;
}

export default function Header({ currentMegaMenu, setCurrentMegaMenu }: HeaderProps) {
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setCurrentMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setCurrentMegaMenu(null);
    }, 150);
    setMenuTimeout(timeout);
  };

  const handleMenuMouseEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
  };
  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            DeinDesign.
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Produits
              </button>
            </div>
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('motifs')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Motifs
              </button>
            </div>
            <button className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
              Personnaliser
            </button>
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
              Deal
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              <User className="h-4 w-4 mr-1" />
              Se connecter
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Panier d'achat
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menus */}
      {currentMegaMenu === 'products' && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenuProducts />
        </div>
      )}

      {currentMegaMenu === 'motifs' && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenuMotifs />
        </div>
      )}
    </header>
  );
}