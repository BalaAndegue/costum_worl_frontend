"use client";

import { useState } from 'react';
import { Search, User, ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MegaMenuProducts from '@/components/mega-menu-products';
import MegaMenuMotifs from '@/components/mega-menu-motifs';

interface HeaderProps {
  currentMegaMenu: string | null;
  setCurrentMegaMenu: (menu: string | null) => void;
}

export default function Header({ currentMegaMenu, setCurrentMegaMenu }: HeaderProps) {
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setCurrentMegaMenu(null);
  };

  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header */}
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-black flex-shrink-0">
            DeinDesign.
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:block bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
              Deal
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hidden sm:flex">
              <User className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Se connecter</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hidden sm:flex">
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Panier</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 sm:hidden">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => {
                  setCurrentMegaMenu(currentMegaMenu === 'products' ? null : 'products');
                }}
              >
                Produits
              </div>
              
              {currentMegaMenu === 'products' && (
                <div className="px-4 py-2">
                  <MegaMenuProducts mobile />
                </div>
              )}

              <div 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => {
                  setCurrentMegaMenu(currentMegaMenu === 'motifs' ? null : 'motifs');
                }}
              >
                Motifs
              </div>
              
              {currentMegaMenu === 'motifs' && (
                <div className="px-4 py-2">
                  <MegaMenuMotifs mobile />
                </div>
              )}

              <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 w-full text-left">
                Personnaliser
              </button>

              <div className="pt-4 pb-2 border-t border-gray-200">
                <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600">
                  <User className="h-4 w-4 mr-2" />
                  Se connecter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Mega Menus */}
      {currentMegaMenu === 'products' && !mobileMenuOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50 hidden lg:block"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenuProducts />
        </div>
      )}

      {currentMegaMenu === 'motifs' && !mobileMenuOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50 hidden lg:block"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenuMotifs />
        </div>
      )}
    </header>
  );
}