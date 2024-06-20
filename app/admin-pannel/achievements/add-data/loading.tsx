import React from 'react'

// components/Loading.tsx

const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="relative flex space-x-2">
          <div
            className="w-6 h-6 bg-red-500 rounded-full animate-pulse"
            style={{ animationDelay: '0s' }}
          ></div>
          <div
            className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="w-6 h-6 bg-red-500 rounded-full animate-pulse"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default Loading;