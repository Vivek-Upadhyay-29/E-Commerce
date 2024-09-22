import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found flex flex-col items-center justify-center h-screen">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9w-00zDGFh6VtxNsOtRMeflVFF6GQunbMrA&s" alt="Page Not Found" className="w-1/2 h-auto max-w-md mb-8" />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Oops! It seems like the page you're looking for doesn't exist.
      </p>
      <div className="text-center mb-4">
        <Link to="/auth" className="text-blue-500 hover:underline">
          Take me home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;