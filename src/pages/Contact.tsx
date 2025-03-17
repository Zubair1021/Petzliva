import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're here to help with any questions about our pet healthcare services
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            {[{
              icon: <Phone className="h-6 w-6 text-primary-500" />, title: 'Phone', content: '+1 (555) 123-4567', link: 'tel:+15551234567',
            }, {
              icon: <Mail className="h-6 w-6 text-primary-500" />, title: 'Email', content: 'support@petzliva.com', link: 'mailto:support@petzliva.com',
            }, {
              icon: <MapPin className="h-6 w-6 text-primary-500" />, title: 'Address', content: '123 Pet Care Street, Veterinary District, CA 90210', link: '#',
            }].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea id="message" rows={6} className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
