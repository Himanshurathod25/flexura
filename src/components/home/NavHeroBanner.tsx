import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavHeroBanner: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center justify-between mt-3 px-3">
      <div className="inline-flex items-center bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full text-xs font-medium border border-orange-200">
        <div className="flex items-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.873 1.402-8.172L.132 9.21l8.2-1.192z" />
          </svg>
          <span className="text-sm font-semibold">4.5/5</span>
        </div>
        <span className="ml-2 text-xs text-gray-600">Customer Rating</span>
      </div>

      <div className="flex-1 px-4 text-center">
        <h2 className="text-sm lg:text-base font-semibold text-white tracking-tight">
          Save 80% Time, Earn 24/7 with <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Automations</span> &amp; <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">AI</span>
        </h2>
        <p className="text-xs text-gray-300 mt-1 max-w-2xl mx-auto">We design AI-powered Voice Agents &amp; automation workflows that save time, cut costs, and scale your business 24/7.</p>
      </div>

      <div className="flex-shrink-0">
        <Link to="/contact">
          <Button variant="gradient" className="rounded-full px-4 py-2">Get Unfazed Today</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavHeroBanner;
