import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell me about your project or inquiry..."
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-400 rounded-lg">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-400 rounded-lg">
          Failed to send message. Please try again or email me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

const ContactCard = ({ icon, title, info, link, color }) => (
  <div className="break-words bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
      <span className="text-xl">{icon}</span>
    </div>
    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{info}</p>
    {link && (
      <a
        href={link}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect →
      </a>
    )}
  </div>
);

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      info: 'email.chris.sanchez@icloud.com',
      link: 'mailto:email.chris.sanchez@icloud.com',
      color: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      info: 'Connect with me professionally',
      link: 'https://linkedin.com/in/csanchez11/',
      color: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      info: 'Check out my open source work',
      link: 'https://github.com/csanchez11',
      color: 'bg-gray-100 dark:bg-gray-800'
    }
  ];

  const availability = [
    { type: 'Full-time Opportunities', status: 'Open', color: 'text-green-600 dark:text-green-400' },
    { type: 'Freelance Projects', status: 'Open', color: 'text-green-600 dark:text-green-400' },
    { type: 'Consulting', status: 'Available', color: 'text-blue-600 dark:text-blue-400' },
    { type: 'Speaking Engagements', status: 'Available', color: 'text-blue-600 dark:text-blue-400' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Ready to discuss your next project or opportunity? Let's connect!
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => (
          <ContactCard key={index} {...method} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Send me a message</h3>
          <ContactForm />
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Availability Status */}
          <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Availability Status</h3>
            <div className="space-y-3">
              {availability.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.type}</span>
                  <span className={`text-sm font-medium ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">📍</span>
                <span className="text-gray-700 dark:text-gray-300">Long Beach, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">🕐</span>
                <span className="text-gray-700 dark:text-gray-300">PST (UTC-8)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">💬</span>
                <span className="text-gray-700 dark:text-gray-300">English</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">⚡</span>
                <span className="text-gray-700 dark:text-gray-300">Usually responds within 24h</span>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-900 dark:text-white">Currently Available</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I'm actively looking for new opportunities and interesting projects.
              Let's discuss how we can work together!
            </p>
          </div>
        </div>
      </div>

      {/* Response Time Stats */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Communication Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">&lt; 24h</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Response Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">5.0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;