import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-10 md:p-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
          <p className="mb-6 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to the Sharda Welfare Foundation. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@shardawelfare.org.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Information We Collect</h2>
          <p className="mb-6">
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website, or otherwise contacting us.
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect can include the following: Name and Contact Data, Credentials, and Payment Data.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="mb-6">
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To send administrative information to you.</li>
            <li>To protect our Services.</li>
            <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
            <li>To respond to legal requests and prevent harm.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Will Your Information Be Shared With Anyone?</h2>
          <p className="mb-6">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this policy, you may email us at info@shardawelfare.org or by post to:<br/><br/>
            <strong>Sharda Welfare Foundation</strong><br/>
            Plot no 32, 34, Knowledge Park III,<br/>
            Greater Noida, Uttar Pradesh 201310
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
