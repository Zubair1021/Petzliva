import { motion } from 'framer-motion';
import { Stethoscope, Scissors, FlaskRound as Flask, Calendar, Clock, DollarSign } from 'lucide-react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive pet healthcare services tailored to your pet's needs
        </p>
      </motion.div>

      {/* Main Services */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Stethoscope className="h-12 w-12 text-primary-500" />,
            title: 'Veterinary Care',
            description: 'Professional medical care for your pets',
            features: [
              'Regular Health Checkups',
              'Vaccinations',
              'Disease Treatment',
              'Surgery Services',
              'Dental Care',
              'Emergency Care',
            ],
            image: 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmV0ZXJpbmFyaWFufGVufDB8fDB8fHww     ',
          },
          {
            icon: <Flask className="h-12 w-12 text-primary-500" />,
            title: 'Pet Sampling',
            description: 'Accurate diagnostic services',
            features: [
              'Blood Tests',
              'Urine Analysis',
              'Tissue Sampling',
              'Pathology Services',
              'Quick Results',
              'Expert Analysis',
            ],
            image: 'https://images.unsplash.com/photo-1700665537604-412e89a285c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHx8MA%3D%3D',
          },
          {
            icon: <Scissors className="h-12 w-12 text-primary-500" />,
            title: 'Pet Grooming',
            description: 'Professional grooming services',
            features: [
              'Bath & Brush',
              'Hair Trimming',
              'Nail Clipping',
              'Ear Cleaning',
              'Teeth Brushing',
              'Style Grooming',
            ],
            image: 'https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwZ3Jvb21pbmd8ZW58MHx8MHx8fDA%3D',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                {service.icon}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="h-2 w-2 bg-primary-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Calendar className="h-8 w-8 text-primary-500" />,
              title: 'Book Appointment',
              description: 'Choose your service and preferred time slot',
            },
            {
              icon: <Clock className="h-8 w-8 text-primary-500" />,
              title: 'Confirmation',
              description: 'Receive instant confirmation and reminders',
            },
            {
              icon: <DollarSign className="h-8 w-8 text-primary-500" />,
              title: 'Payment',
              description: 'Secure and flexible payment options',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Basic Care',
              price: '10',
              features: [
                'Regular Checkup',
                'Basic Grooming',
                'Vaccination Updates',
                'Email Support',
              ],
            },
            {
              name: 'Premium Care',
              price: '50',
              features: [
                'All Basic Care features',
                'Advanced Health Screening',
                'Priority Booking',
                '24/7 Support',
              ],
              highlighted: true,
            },
            {
              name: 'Ultimate Care',
              price: '78',
              features: [
                'All Premium Care features',
                'Emergency Services',
                'Home Visits',
                'Specialized Treatments',
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${
                plan.highlighted
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-gray-800'
              } rounded-xl shadow-lg p-8`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center"
                  >
                    <span className={`h-2 w-2 ${
                      plan.highlighted ? 'bg-white' : 'bg-primary-500'
                    } rounded-full mr-3`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg ${
                  plan.highlighted
                    ? 'bg-white text-primary-500 hover:bg-gray-100'
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                } transition-colors`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white p-12 rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Book your first appointment today and give your pet the care they deserve</p>
        <button className="bg-white text-primary-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Book Now
        </button>
      </motion.div>
    </div>
  );
}