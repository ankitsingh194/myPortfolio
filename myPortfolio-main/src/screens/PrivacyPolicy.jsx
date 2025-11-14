import React from 'react';

// StockbookPrivacyPolicyComponent.jsx
// Single-file React component (Tailwind CSS classes) that renders
// the Stockbook Privacy Policy. Default export a React component.

export default function StockbookPrivacyPolicy({
  effectiveDate = 'November 14, 2025',
}) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl text-gray-800">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Stockbook — Privacy Policy</h1>
        <p className="text-sm text-gray-500">Effective Date: {effectiveDate}</p>
      </header>

      <article className="space-y-6 leading-relaxed text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>
            Thank you for using <strong>Stockbook</strong>. This Privacy Policy describes how
            Stockbook handles user data. Stockbook is designed to respect your privacy by storing
            all your data <strong>locally on your device</strong>. The app does not collect,
            transmit, or store your personal trade data on any external server unless you explicitly
            enable an export or use a third-party backup service.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">1. Data We Store</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Manually entered stock trades and portfolio data (stored locally)</li>
            <li>Locally generated analytics (charts, pie charts, graphs)</li>
            <li>App preferences and settings</li>
            <li>Exported backup files (XLSX) you create and choose where to save</li>
          </ul>
          <p className="mt-2">
            Stockbook <strong>does not</strong> upload your trade data to the developer's servers or
            otherwise transmit it off-device by default.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">2. Local Analytics & Features</h3>
          <p className="mt-2">
            Stockbook can generate analytics locally using the trades you enter. Features include:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Charts and graphical views (line charts, bar charts)</li>
            <li>Pie charts and allocation breakdowns</li>
            <li>Profit/loss summaries and trade performance insights</li>
            <li>Exporting trades as <code>.xlsx</code> files for backup or external use</li>
          </ul>
          <p className="mt-2">
            All analytics are computed on the device using your local data. Exported files are
            created locally and then saved wherever you choose .
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">3. Export & Backups</h3>
          <p className="mt-2">
            You can export your trades to XLSX files for backup. When you export, you choose where
            to save or share the file (for example, iCloud, Google Drive, email). Stockbook does
            not track exported files or access their destination — third-party services that you
            choose to use will govern how that data is stored and protected.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">4. Responsibility for Data Loss</h3>
          <p className="mt-2">
            Because Stockbook stores all data locally on your device, <strong>you are solely
            responsible</strong> for protecting and backing up your data. The developer is not
            responsible for data loss due to device loss, theft, damage, accidental deletion, or
            hardware failure. We strongly recommend that you regularly export your trades or use
            device-level backups  if you want restore capability.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">5. No Third-Party Data Collection by Default</h3>
          <p className="mt-2">
            Stockbook does not include analytics SDKs, advertising, cloud sync, or third-party
            trackers by default. If third-party services are added in the future, this Privacy
            Policy will be updated and users will be informed accordingly.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">6. Device Permissions</h3>
          <p className="mt-2">
            The app may request permissions such as storage or file access only to support features
            you choose (for example, exporting an XLSX file). Permissions are not used to collect
            or transmit your trade data to the developer.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">7. Children’s Privacy (Under 18)</h3>
          <p className="mt-2">
            Stockbook is <strong>not intended for individuals under the age of 18</strong>. We do not
            knowingly collect, store, or process personal data from users under 18. Because data
            remains local to the device, parents or guardians are responsible for supervising the
            device and any data stored in the app.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">8. Policy Changes & Updates</h3>
          <p className="mt-2">
            We may update this Privacy Policy to reflect changes to the app. The effective date
            shown at the top will be revised when material changes occur. You should review the
            policy periodically.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">9. Contact</h3>
          <p className="mt-2">
            For questions about this policy, please contact:
          </p>
          <p className="mt-1 text-sm text-gray-600">
            <strong>Email:</strong> ankit79eo@gmail.com
          </p>
        </section>

        <section>
          <h3 className="text-lg font-medium">10. How to Protect Your Data (Recommendations)</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Enable device backups (iCloud, Google Backup) if you want restore capability</li>
            <li>Regularly export your trades to XLSX for offline backup</li>
            <li>Use a device PIN/biometrics to prevent unauthorized access</li>
            <li>Keep your device OS updated</li>
          </ul>
        </section>
      </article>

      <footer className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
        <p>
          This template is not legal advice. Consider consulting a lawyer before publishing the
          policy. Replace the support email above with your real contact before release.
        </p>
      </footer>
    </div>
  );
}
