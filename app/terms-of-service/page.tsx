
import { FileText, Scale } from "lucide-react";

export default function GeneralTermsOfService() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 py-16 sm:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 mb-6 bg-emerald-100 rounded-2xl text-emerald-600">
                            <Scale className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-slate-600">
                            Please read these terms carefully before using our website or applications.
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
                        <h2 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the Boa App Studio website and our mobile applications, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">2. Use License</h2>
                        <p>
                            Permission is granted to download and use our applications for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>
                        <p>Under this license, you may not:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            <li>Modify or copy the materials;</li>
                            <li>Attempt to decompile or reverse engineer any software contained in our applications;</li>
                            <li>Remove any copyright or other proprietary notations from the materials.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on Boa App Studio's website and applications are provided on an 'as is' basis. Boa App Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">4. Limitations</h2>
                        <p>
                            In no event shall Boa App Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our applications.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
