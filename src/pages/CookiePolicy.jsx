import React, { useState, useEffect } from 'react';
import LegalPage from './LegalPage';
import policiesData from '../components/policies.json';
import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => {
  const [gdprData, setGdprData] = useState({});

  useEffect(() => {
    setGdprData(policiesData.cookiePolicy || {});
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookie Policy | GameHub</title>
        <meta name="description" content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting." />
      </Helmet>

      <LegalPage
        title="Cookie Policy"
        lastUpdated={gdprData.lastUpdated || '[Insert Date]'}
        sections={[
          {
            title: "What Are Cookies?",
            content: gdprData.content || "Content is not available.",
          },
          {
            title: "Contact Us",
            content: gdprData.contactUs ? (
              <>
                <p className="mb-2">If you have any questions, please contact us:</p>
                <ul className="list-disc list-inside">
                  <li>Email: <a href={`mailto:${gdprData.contactUs.email}`} className="text-blue-400 hover:underline">{gdprData.contactUs.email}</a></li>
                  <li>Website: <a href={gdprData.contactUs.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{gdprData.contactUs.website}</a></li>
                </ul>
              </>
            ) : "Contact information is not available.",
          }
        ]}
      />
    </>
  );
};

export default CookiePolicy;
