import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">The page you are looking for does not exist.</p>
      <Link 
        to="/"
        className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}