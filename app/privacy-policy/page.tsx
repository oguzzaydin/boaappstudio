
import { Shield, Eye, Lock, Server, FileText } from "lucide-react";
import Link from "next/link";

export default function GeneralPrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 py-16 sm:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 mb-6 bg-blue-100 rounded-2xl text-blue-600">
                            <Shield className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-slate-600">
                            At Boa App Studio, we are committed to building software and digital experiences that respect your privacy. Transparency and data minimization are core principles of our approach.
                        </p>
                        <p className="mt-4 text-sm text-slate-500">
                            Last Updated: January 2026
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Scope of This Privacy Policy</h2>
                        <p>
                            This Privacy Policy applies only to the Boa App Studio website and our general website-related operations.
                        </p>
                        <p>
                            Each mobile application published by Boa App Studio has its own app-specific privacy policy, which is available on the respective application page or app store listing.
                            This website policy does not replace or override any app-specific privacy policies.
                        </p>
                    </section>

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Information We Collect</h2>

                        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Website Visitors</h3>
                        <p>
                            We may collect limited, anonymous usage data to understand how our website is used and to improve its performance. This may include:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Page views and navigation patterns</li>
                            <li>Approximate device or browser information</li>
                            <li>Aggregated usage statistics</li>
                        </ul>
                        <p className="mt-4">
                            We do not track individual users across websites, and we do not attempt to identify website visitors.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Support Inquiries</h3>
                        <p>
                            If you contact us via email, we collect:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Your email address</li>
                            <li>The content of your message</li>
                        </ul>
                        <p className="mt-4">
                            This information is used solely to respond to your inquiry and is not used for marketing or advertising purposes.
                        </p>
                    </section>

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Cookies and Analytics</h2>
                        <p>
                            The Website may use basic cookies or similar technologies for essential functionality and anonymous analytics.
                            These technologies do not contain personally identifiable information and are not used for cross-site tracking.
                        </p>
                    </section>

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Data Sharing</h2>
                        <p>
                            We do not sell, rent, or trade personal data.
                            Any data collected through the Website is used only for operational and support purposes.
                        </p>
                    </section>

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Data Security</h2>
                        <p>
                            We implement reasonable, industry-standard security measures to protect the limited information we process.
                            However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Your Rights</h2>
                        <p>
                            You may contact us at any time to:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Ask questions about this Privacy Policy</li>
                            <li>Request clarification regarding data related to website communications</li>
                        </ul>
                        <p className="mt-4">
                            We will make reasonable efforts to respond in a timely manner.
                        </p>
                    </section>

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <div className="flex justify-center mb-12">
                        <hr className="w-16 border-t-2 border-slate-200" />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="font-medium text-slate-900 mb-2">
                                Email: <a href="mailto:contact@boaappstudio.com" className="text-blue-600 hover:underline">contact@boaappstudio.com</a>
                            </p>
                            <p className="font-medium text-slate-900">
                                Website: <Link href="https://boaappstudio.com" className="text-blue-600 hover:underline">https://boaappstudio.com</Link>
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
