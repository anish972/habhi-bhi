import React from 'react';
import { Shield, Server, AlertTriangle, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PolicySection = ({ icon: Icon, title, content }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-400 mr-3" />
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
    <div className="text-gray-300 space-y-3">
      {content}
    </div>
  </div>
);

export default function UsagePolicy() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>Usage Policy | GameHub</title>
        <meta name="description" content="Learn about GameHub's usage policy and acceptable use guidelines." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
            Usage Policy
          </h1>
          <p className="text-lg text-gray-300">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          <PolicySection
            icon={CheckCircle}
            title="Acceptable Use"
            content={
              <>
                <p>
                  Our services are designed to support legitimate gaming activities and related applications. Acceptable uses include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Hosting game servers for supported games</li>
                  <li>Running gaming communities and forums</li>
                  <li>Streaming and content creation related to gaming</li>
                  <li>Educational gaming projects and research</li>
                  <li>Game development and testing</li>
                  <li>Voice communication servers (Discord bots, TeamSpeak, etc.)</li>
                </ul>
              </>
            }
          />

          <PolicySection
            icon={AlertTriangle}
            title="Prohibited Activities"
            content={
              <>
                <p>
                  The following activities are strictly prohibited on our network:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Illegal content distribution or file sharing</li>
                  <li>Cryptocurrency mining or blockchain operations</li>
                  <li>DDoS attacks or network scanning</li>
                  <li>Spam, phishing, or malicious software distribution</li>
                  <li>Adult content hosting or distribution</li>
                  <li>Proxy or VPN services for commercial use</li>
                  <li>High-frequency trading or financial applications</li>
                  <li>Excessive resource consumption that affects other users</li>
                </ul>
              </>
            }
          />

          <PolicySection
            icon={Server}
            title="Resource Usage Guidelines"
            content={
              <>
                <p>
                  To ensure fair usage for all customers, please observe these guidelines:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>CPU Usage:</strong> Sustained 100% CPU usage for extended periods may trigger review</li>
                  <li><strong>Memory:</strong> Use allocated RAM efficiently; memory leaks should be addressed promptly</li>
                  <li><strong>Bandwidth:</strong> Excessive bandwidth usage beyond fair use may incur additional charges</li>
                  <li><strong>Storage:</strong> Regular cleanup of logs and temporary files is recommended</li>
                  <li><strong>Network:</strong> Avoid activities that generate excessive network traffic</li>
                </ul>
                <p className="mt-4">
                  <strong>Fair Use Policy:</strong> We monitor resource usage to ensure optimal performance for all customers. Accounts consistently exceeding reasonable usage may be contacted for optimization or upgrade recommendations.
                </p>
              </>
            }
          />

          <PolicySection
            icon={Shield}
            title="Security Requirements"
            content={
              <>
                <p>
                  Customers are responsible for maintaining the security of their servers:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Keep game servers and applications updated</li>
                  <li>Use strong passwords and enable two-factor authentication</li>
                  <li>Regularly monitor server logs for suspicious activity</li>
                  <li>Implement appropriate firewall rules</li>
                  <li>Report security incidents promptly to our support team</li>
                  <li>Do not share account credentials with unauthorized users</li>
                </ul>
                <p className="mt-4">
                  <strong>Compromised Accounts:</strong> If your server is compromised and used for malicious activities, we may temporarily suspend the service to protect our network and other customers.
                </p>
              </>
            }
          />

          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              Policy Violations
            </h2>
            <div className="text-gray-300 space-y-3">
              <p>
                Violations of this usage policy may result in:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Warning:</strong> First-time minor violations receive a warning</li>
                <li><strong>Temporary Suspension:</strong> Repeated or serious violations may result in service suspension</li>
                <li><strong>Account Termination:</strong> Severe violations or repeated offenses may lead to permanent account closure</li>
                <li><strong>Legal Action:</strong> Illegal activities will be reported to appropriate authorities</li>
              </ul>
              <p className="mt-4">
                We reserve the right to take immediate action for activities that pose a threat to our network, other customers, or violate applicable laws.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h2 className="text-xl font-bold text-white mb-4">Questions About Usage Policy?</h2>
            <p className="text-gray-300 mb-4">
              If you're unsure whether your intended use complies with our policy, please contact our support team before proceeding.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 font-medium inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}