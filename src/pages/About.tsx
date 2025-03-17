import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About <span className="text-primary-500">Petzliva</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're dedicated to providing the highest quality healthcare services for your beloved pets
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To revolutionize pet healthcare by making it accessible, efficient, and stress-free for both pets and their owners through our innovative digital platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To become the world's most trusted platform for pet healthcare services, where every pet receives the care they deserve.
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="h-8 w-8 text-primary-500" />,
              title: 'Compassion',
              description: 'We treat every pet with love and care',
            },
            {
              icon: <Award className="h-8 w-8 text-primary-500" />,
              title: 'Excellence',
              description: 'We strive for the highest quality in everything we do',
            },
            {
              icon: <Users className="h-8 w-8 text-primary-500" />,
              title: 'Collaboration',
              description: 'We work together to achieve the best outcomes',
            },
            {
              icon: <Clock className="h-8 w-8 text-primary-500" />,
              title: 'Reliability',
              description: '24/7 support for your pet care needs',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Dr. Sarah Johnson',
              role: 'Chief Medical Officer',
              image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
            },
            {
              name: 'Michael Chen',
              role: 'Chief Technology Officer',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
            },
            {
              name: 'Dr. Emily Davis',
              role: 'Head of Veterinary Services',
              image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary-500 text-white p-12 rounded-xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl mb-8">Help us make pet healthcare better for everyone</p>
        <button className="bg-white text-primary-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}