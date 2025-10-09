import React from 'react';
export function Logo({
  className = ''
}) {
  return <a href='/#' className={`flex items-center ${className}`}>
      <div className="relative mr-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-tl-xl rounded-br-xl transform rotate-12"></div>
        <div className="absolute top-1 left-1 w-8 h-8 bg-orange-500 rounded-tr-xl rounded-bl-xl transform -rotate-12 opacity-80"></div>
      </div>
      <span className="text-xl font-bold text-gray-900">
        Nexus<span className="text-indigo-600">Studio</span>
      </span>
    </a>;
}