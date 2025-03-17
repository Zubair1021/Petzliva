import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Shield, MessageSquare, Star, Heart, Clock, Award } from 'lucide-react';
import ChatBot from '../components/ChatBot';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Expert Pet Care at Your
            <span className="text-primary-500"> Fingertips</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with qualified veterinarians, samplers, and groomers for comprehensive pet healthcare services.
          </p>
          <div className="flex justify-center gap-4">
            <Link to='/book-appointment'>
            <button className="bg-primary-500 text-white px-4 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-semibold hover:bg-primary-600 transition-colors">
              Book Appointment
            </button>
            </Link>
            <button className="bg-white dark:bg-gray-800 text-primary-500 px-4 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-semibold border-2 border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2000+', label: 'Happy Pets' },
              { number: '150+', label: 'Expert Vets' },
              { number: '98%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-500">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Us</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Experience the best in pet healthcare services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="h-8 w-8 text-primary-500" />,
                title: 'Easy Scheduling',
                description: "Book appointments with just a few clicks, 24/7",
              },
              {
                icon: <Users className="h-8 w-8 text-primary-500" />,
                title: 'Expert Care',
                description: 'Access to qualified veterinarians and pet care specialists',
              },
              {
                icon: <Shield className="h-8 w-8 text-primary-500" />,
                title: 'Secure Platform',
                description: "Your pet's health data is safe and protected",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary-500" />,
                title: 'AI Support',
                description: '24/7 chatbot assistance for quick answers',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive pet care services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Veterinary Care',
                description: 'Complete health checkups and medical treatments for your pets',
                image: 'https://images.unsplash.com/photo-1733783506192-653df6185a7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmV0ZXJpbmFyeSUyMENhcmV8ZW58MHx8MHx8fDA%3D',
                features: ['Health Checkups', 'Vaccinations', 'Surgery', 'Emergency Care'],
              },
              {
                title: 'Pet Sampling',
                description: 'Professional sample collection for accurate diagnosis',
                image: 'https://plus.unsplash.com/premium_photo-1661930499786-47423192e185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D',
                features: ['Blood Tests', 'Urine Analysis', 'Tissue Sampling', 'Lab Reports'],
              },
              {
                title: 'Pet Grooming',
                description: 'Keep your pets clean, healthy, and looking their best',
                image: 'https://plus.unsplash.com/premium_photo-1664300949075-b4241ea33f1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGV0JTIwR3Jvb21pbmd8ZW58MHx8MHx8fDA%3D',
                features: ['Bath & Brush', 'Nail Trimming', 'Ear Cleaning', 'Styling'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Star className="h-4 w-4 text-primary-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Pet Parents Say</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Trusted by thousands of happy pet owners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                pet: 'Max the Golden Retriever',
                image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=400',
                text: 'The veterinary care at Petzliva is exceptional. They truly understand and care for our pets.',
              },
              {
                name: 'Michael Chen',
                pet: 'Luna the Persian Cat',
                image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80&w=400',
                text: 'Professional grooming services that made my Luna look and feel amazing. Highly recommended!',
              },
              {
                name: 'Emily Davis',
                pet: 'Rocky the Bulldog',
                image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400',
                text: 'Quick and efficient sampling service. The staff was very gentle with my nervous dog.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.pet}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                <div className="mt-4 flex text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Give Your Pet the Best Care?</h2>
          <p className="text-xl mb-8">Join thousands of happy pet parents today!</p>
          <button className="bg-white text-primary-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>



      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}