import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, ChevronDown, X, CheckCircle, AlertCircle } from 'lucide-react';

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqData = [
    {
      question: "What are your gym's operating hours?",
      answer: "Our gym is open 24/7 for member access. Staffed hours are from 6 AM to 10 PM Monday through Friday, and 8 AM to 8 PM on weekends.",
      category: "facilities"
    },
    {
      question: "How do I cancel or freeze my membership?",
      answer: "You can cancel or freeze your membership by visiting the front desk or through your online member portal. A 30-day notice is required for cancellations.",
      category: "membership"
    },
    {
      question: "Do you offer personal training services?",
      answer: "Yes! We offer one-on-one personal training, small group training, and specialized fitness programs. Our certified trainers can help you achieve your fitness goals.",
      category: "workouts"
    },
    {
      question: "What's included in the membership?",
      answer: "Basic membership includes access to all gym equipment, locker rooms, and group fitness classes. Premium memberships include additional perks like towel service and guest passes.",
      category: "membership"
    },
    {
      question: "Do you offer nutrition counseling?",
      answer: "Yes, we have certified nutritionists on staff who can provide personalized meal plans and nutrition advice to complement your fitness routine.",
      category: "nutrition"
    }
  ];

  useEffect(() => {
    filterFAQs();
  }, [searchQuery, selectedCategory]);

  const filterFAQs = () => {
    let filtered = faqData;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredFAQs(filtered);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setNotification({
        show: true,
        message: 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }

    // Simulate email subscription
    setNotification({
      show: true,
      message: 'Successfully subscribed to updates!',
      type: 'success'
    });
    setEmail('');

    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 mb-4"
        >
          Frequently Asked Questions
        </motion.h1>
        <p className="text-gray-400 text-lg">
          Find answers to common questions about our gym and services
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto mb-12">
        <AnimatePresence>
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <div
                className="mb-4 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition duration-200"
              >
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${expanded === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-8"
          >
            No questions found matching your search.
          </motion.div>
        )}
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto"
      >
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-orange-500" size={24} />
            <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest updates, fitness tips, and exclusive offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg flex items-center gap-2 ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              } text-white`}
          >
            {notification.type === 'success' ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span>{notification.message}</span>
            <button
              onClick={() => setNotification({ show: false, message: '', type: '' })}
              className="ml-2"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQSection;