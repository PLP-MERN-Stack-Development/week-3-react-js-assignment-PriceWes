import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 mt-8">
    <p className="text-gray-600 dark:text-gray-400">
      &copy; {new Date().getFullYear()} MyApp. All rights reserved.
    </p>
  </footer>
);

export default Footer;