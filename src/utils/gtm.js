export const GTMPageView = (url) => {
  const pageEvent = {
    event: 'pageView',
    Ecommerce: {
      pageName: (window && window.location.pathname.slice(1)) || 'Home',
      pageUrl: url,
    },
  };
  // ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};

export const addGTMFormEvent = (event) => {
  if (process.env.MODE === 'prod' && typeof window !== 'undefined') {
    event['formPage'] = window.location.href;
    //ts-ignore
    window.dataLayer && window.dataLayer.push(event);
  }
  return event;
};
