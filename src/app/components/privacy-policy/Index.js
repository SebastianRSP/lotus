
export const PrivacyPolicy = () => {
    return (
        <section className="w-full forced-full-width fade-in-out">
            <div className="flex">
        <div className="max-w-screen-lg mx-auto py-16 px-6 text-gray-800 m-auto mt-[80px]">
            <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
            <p className="text-lg text-center mb-8">
                <span className="font-semibold">Lotus Global Projects Ltd (Lotus Data Group)</span>
                <br />
                Effective Date: December 1, 2024
            </p>
            <p className="mb-6">
                Lotus Global Projects Ltd (“we,” “our,” or “us”) values your privacy and is committed to safeguarding your personal data. This policy explains how we collect, use, share, and protect your information and your rights under the British Virgin Islands Data Protection Act, 2021.
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Identity Information: Full name, date of birth, nationality, and government-issued identification documents.</li>
                    <li>Contact Information: Residential address, email address, and phone number.</li>
                    <li>Financial Information: Bank account details, transaction histories, and documentation to verify the source of funds.</li>
                    <li>Usage Data: Data collected through interactions with our website and platforms.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Purpose of Data Collection</h2>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>Identity Verification: To comply with Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements.</li>
                    <li>Transaction Processing: To facilitate token issuance under SAFT agreements.</li>
                    <li>Regulatory Compliance: To comply with the laws and regulations of the British Virgin Islands and other applicable jurisdictions.</li>
                    <li>Fraud Prevention: To detect and prevent illegal activities, such as money laundering and terrorist financing.</li>
                </ol>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Lawful Basis for Processing</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Consent: Where required, you provide explicit consent for us to process your data.</li>
                    <li>Legal Obligation: Compliance with AML/KYC regulations and other legal requirements.</li>
                    <li>Contractual Necessity: To fulfill the terms of agreements, such as SAFT instruments for token purchases.</li>
                    <li>Legitimate Interests: To ensure the security of our systems and protect against fraud.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Third-Party Providers: Such as Plaid for secure identity verification. 
                        <span className="text-blue-500 underline cursor-pointer"> (Plaid’s Privacy Policy)</span>.
                    </li>
                    <li>Regulatory Authorities: To comply with legal and regulatory obligations.</li>
                    <li>Affiliates and Service Providers: Entities assisting with token issuance, AML/KYC checks, or legal compliance.</li>
                </ul>
                <p className="mt-4">
                    We ensure that all third-party recipients of your data adhere to equivalent data protection standards.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive information.</li>
                    <li>Secure storage systems.</li>
                    <li>Controlled access to personal data.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Access: To obtain confirmation of whether your data is being processed and to access your personal data.</li>
                    <li>Rectification: To request correction of inaccurate or incomplete data.</li>
                    <li>Erasure: To request deletion of your data in specific circumstances.</li>
                    <li>Restriction: To restrict the processing of your data in certain situations.</li>
                    <li>Objection: To object to processing based on legitimate interests.</li>
                    <li>Data Portability: To receive your data in a commonly used, machine-readable format.</li>
                </ul>
                <p className="mt-4">
                    To exercise these rights, contact us at <a href="mailto:info@lotusdatagroup.com" className="text-blue-500 underline">info@lotusdatagroup.com</a>
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                <p>
                    We retain personal data only as long as necessary for:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Fulfilling the purposes outlined in this policy.</li>
                    <li>Complying with legal obligations.</li>
                    <li>Resolving disputes and enforcing agreements.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
                <p>
                    If your personal data is transferred outside the BVI, we ensure that adequate safeguards are in place to protect your information, in compliance with the Data Protection Act, 2021.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Breach Notification</h2>
                <p>
                    In the event of a data breach, we will notify affected individuals and relevant authorities, as required by law.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Updates to this Policy</h2>
                <p>
                    This policy may be updated periodically to reflect changes in legal or operational requirements. Updated versions will be posted on our website.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p>
                    If you have questions or concerns about this policy or our data handling practices, please contact us:
                </p>
                <ul className="list-none mt-2 space-y-2">
                    <li>Email: <a href="mailto:info@lotusdatagroup.com" className="text-blue-500 underline">info@lotusdatagroup.com</a></li>
                    <li>Address: 3rd Floor, Palm Grove House, Road Town, Tortola, VG1110, British Virgin Islands</li>
                </ul>
            </div>
        </div>
            </div>
        </section>
    )
}