import React from "react";

export default function PrivacyPolicy({
  appName = "stockbook",
  lastUpdated = "04/11/2025",
  contactEmail = "ankit79eo@gmail.com",
}) {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-start justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
          <p className="mt-2 text-gray-700">This Privacy Policy describes how <strong>{appName}</strong> ("we", "us" or "our") handles information when you use our mobile application and related services.</p>
        </header>

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-medium">1. Information We Collect</h2>
            <p className="text-gray-700 mt-2">
              Currently, <strong>{appName}</strong> does <strong>not collect, store, or share any personal information</strong> from users. 
              The app is designed to run locally on your device, and any data you input remains only on your device.
            </p>
            <p className="text-gray-700 mt-2">
              If in the future we introduce features that require storing your information (for example, cloud backup or account login), 
              we will clearly update this Privacy Policy and ask for your consent before collecting any data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">2. Data Storage &amp; Security</h2>
            <p className="text-gray-700 mt-2">Since we do not store user data on our servers, you are fully in control of your information. However, any data you save within the app is stored locally on your device, and you are responsible for backups and device security.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium">3. Data Loss &amp; Liability</h2>
            <p className="text-gray-700 mt-2">
              While we aim for reliability, the developers of <strong>{appName}</strong> are 
              <strong>not responsible for any data loss, corruption, or unauthorized access</strong> caused by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Device malfunction or software failure</li>
              <li>App uninstallation or update errors</li>
              <li>Third-party tools, libraries, or storage</li>
              <li>User deletion or resetting of data</li>
            </ul>
            <p className="text-gray-700 mt-2">
              You use {appName} at your own risk, and we shall not be liable for any damages or losses arising from data-related issues.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">4. Third-Party Services</h2>
            <p className="text-gray-700 mt-2">
              Our app currently does not use any third-party analytics, login, or payment services. 
              If such integrations are added in the future, they will follow their own privacy policies, and we will update this page accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">5. Children’s Privacy</h2>
            <p className="text-gray-700 mt-2">The App is not intended for children under 13. We do not knowingly collect personal data from children.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium">6. Future Updates</h2>
            <p className="text-gray-700 mt-2">If we ever begin collecting user information, this Privacy Policy will be updated and users will be notified. We will always seek explicit consent before storing or sharing data.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium">7. Contact Us</h2>
            <p className="text-gray-700 mt-2">If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${contactEmail}`} className="text-blue-600 underline">{contactEmail}</a>.</p>
          </div>

          <footer className="mt-6 text-sm text-gray-500">
            <p><strong>Disclaimer:</strong> This Privacy Policy is provided for informational purposes only and does not constitute legal advice. Please consult a legal expert for compliance with laws applicable to your app.</p>
          </footer>
        </section>
      </div>
    </div>
  );
}
