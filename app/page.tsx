'use client';

import { ArrowRight, Sparkles, Globe, Eye, Search } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Sparkles,
    title: 'Generate Content',
    description: 'Create SEO-friendly blog posts and articles using AI with customizable tone and style.',
    color: 'text-blue-500'
  },
  {
    icon: Eye,
    title: 'Accessibility Check',
    description: 'Automatically scan content for accessibility issues and get actionable improvement suggestions.',
    color: 'text-emerald-500'
  },
  {
    icon: Globe,
    title: 'Smart Translation',
    description: 'Translate content into multiple languages while preserving formatting and structure.',
    color: 'text-purple-500'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Analyze and optimize content for search engines with AI-powered recommendations.',
    color: 'text-amber-500'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Content Management
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}for Storyblok
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your content workflow with intelligent generation, accessibility checks, 
            translation services, and SEO optimization—all powered by advanced AI.
          </p>
          <Link href="/dashboard">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center">
              Open Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className={`inline-flex p-3 rounded-xl bg-gray-50 mb-4 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Content Workflow?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the future of content management with AI-powered tools that save time and improve quality.
          </p>
          <Link href="/dashboard">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}