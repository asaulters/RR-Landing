import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useAnalytics from '../../hooks/useAnalytics';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const { trackFormSubmission } = useAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_tha4zap',
        'template_tp4xfxh',
        form.current,
        'PFvlmyYdcd7cW58F1'
      );
      
      setSubmitStatus('success');
      setFormData({ from_name: '', email: '', phone: '', message: '' });
      trackFormSubmission();
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Start Preserving Memories</h2>
          <p>
            Ready to capture your family's precious stories? We'd love to help you get started.
            Reach out to learn more about bringing Recorded Roots to your community or loved ones.
          </p>
          <div className="contact-details">
            <div>
              <span>📧</span>
              <p>contact@recordedroots.com</p>
            </div>
            <div>
              <span>📱</span>
              <p>(915) 236-1188</p>
            </div>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(xxx) xxx-xxxx"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help you preserve your family's stories?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="submit-status success">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="submit-status error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
