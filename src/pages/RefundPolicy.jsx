import React from 'react';
import { Shield, Clock, CreditCard, AlertCircle } from 'lucide-react';
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

export default function RefundPolicy() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      <Helmet>
        <title>Refund Policy | GameHub</title>
        <meta name="description" content="Learn about GameHub's refund policy and money-back guarantee." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
            Refund Policy
          </h1>
          <p className="text-lg text-gray-300">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-8">
          <PolicySection
            icon={Shield}
            title="Money-Back Guarantee"
            content={
              <>
                <p>
                  We offer a 7-day money-back guarantee for all new customers. If you're not satisfied with our service within the first 7 days of your initial purchase, you can request a full refund.
                </p>
                <p>
                  This guarantee applies to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>First-time purchases of game server hosting plans</li>
                  <li>VPS hosting services</li>
                  <li>Web hosting packages</li>
                </ul>
              </>
            }
          />

          <PolicySection
            icon={Clock}
            title="Refund Timeframes"
            content={
              <>
                <p>
                  <strong>7-Day Guarantee:</strong> Full refund available within 7 days of initial service activation.
                </p>
                <p>
                  <strong>Pro-rated Refunds:</strong> For annual plans cancelled after the 7-day period, we provide pro-rated refunds for unused months, minus a $25 processing fee.
                </p>
                <p>
                  <strong>Monthly Plans:</strong> No refunds are provided for monthly plans after the 7-day guarantee period.
                </p>
              </>
            }
          />

          <PolicySection
            icon={CreditCard}
            title="Refund Process"
            content={
              <>
                <p>
                  To request a refund:
                </p>
                <ol className="list-decimal list-inside ml-4 space-y-2">
                  <li>Contact our support team via ticket or email</li>
                  <li>Provide your account details and reason for refund</li>
                  <li>Allow 3-5 business days for processing</li>
                  <li>Refunds are processed to the original payment method</li>
                </ol>
                <p className="mt-4">
                  <strong>Processing Time:</strong> Refunds typically appear in your account within 5-10 business days, depending on your payment provider.
                </p>
              </>
            }
          />

          <PolicySection
            icon={AlertCircle}
            title="Refund Exclusions"
            content={
              <>
                <p>
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Domain name registrations and renewals</li>
                  <li>SSL certificates</li>
                  <li>Setup fees and one-time charges</li>
                  <li>Services terminated due to Terms of Service violations</li>
                  <li>Dedicated server hardware costs</li>
                  <li>Third-party software licenses</li>
                </ul>
                <p className="mt-4">
                  <strong>Abuse Policy:</strong> Customers who repeatedly purchase and refund services may be restricted from future refund eligibility.
                </p>
              </>
            }
          />

          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h2 className="text-xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about our refund policy or need to request a refund, our support team is here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 font-medium"
              >
                Contact Support
              </a>
              <a
                href="mailto:billing@gamehub.com"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all font-medium"
              >
                Email Billing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}