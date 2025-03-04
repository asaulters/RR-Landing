// Hook for Google Analytics event tracking
const useAnalytics = () => {
  const trackEvent = (category, action, label) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };

  const trackFormSubmission = () => {
    trackEvent('Form', 'Submit', 'Contact Form');
  };

  const trackNavigation = (section) => {
    trackEvent('Navigation', 'Click', section);
  };

  return {
    trackEvent,
    trackFormSubmission,
    trackNavigation,
  };
};

export default useAnalytics;
