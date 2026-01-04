
import { Cookie } from "lucide-react";

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 py-16 sm:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 mb-6 bg-amber-100 rounded-2xl text-amber-600">
                            <Cookie className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Cookie Policy
                        </h1>
                        <p className="text-lg text-slate-600">
                            How we use cookies and similar technologies.
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

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. What are Cookies?</h2>
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h2>
                        <p>
                            Boa App Studio uses minimal cookies solely for the purpose of analyzing website traffic and improving user experience. We do not use cookies for targeted advertising or user profiling.
                        </p>
                        <p className="mt-4 font-semibold text-slate-900">Types of cookies we may use:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-600">
                            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Managing Cookies</h2>
                        <p>
                            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
