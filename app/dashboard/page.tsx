'use client';

import { useState } from 'react';
import { Brain, Sparkles, Eye, Globe, Search, CheckCircle, AlertTriangle, TrendingUp, FileText, Languages, Zap } from 'lucide-react';
import Link from 'next/link';

const tabs = [
  { id: 'generate', label: 'Generate Content', icon: Sparkles, color: 'text-blue-500' },
  { id: 'accessibility', label: 'Accessibility', icon: Eye, color: 'text-emerald-500' },
  { id: 'translate', label: 'Translate', icon: Globe, color: 'text-purple-500' },
  { id: 'seo', label: 'SEO', icon: Search, color: 'text-amber-500' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('generate');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [accessibilityResults, setAccessibilityResults] = useState<any>(null);
  const [translationResults, setTranslationResults] = useState<any>(null);
  const [seoResults, setSeoResults] = useState<any>(null);

  const handleGenerate = () => {
    if (!topic || !tone) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const content = `# ${topic}: A ${tone} Guide

## Introduction
Welcome to this comprehensive guide about ${topic.toLowerCase()}. This ${tone} approach ensures you get the most valuable insights and practical knowledge you can apply immediately.

## Key Points

### Foundation Knowledge
Understanding the core principles is essential for success. Here are the fundamental concepts you need to master:

- **Core Concepts**: The building blocks that form the foundation
- **Best Practices**: Industry-standard approaches that deliver results
- **Common Pitfalls**: Mistakes to avoid based on real-world experience

### Practical Applications
Real-world implementation strategies that you can use right away:

1. **Getting Started**: Step-by-step approach for beginners
2. **Intermediate Techniques**: Advanced methods for experienced users
3. **Expert Strategies**: Professional-level tactics for maximum impact

### Implementation Guide
- Start with the basics and build your knowledge gradually
- Practice regularly to develop your skills
- Seek feedback and continuously improve your approach
- Stay updated with the latest trends and developments

## Conclusion
This comprehensive overview provides the foundation needed to move forward confidently with your ${topic.toLowerCase()} initiatives. Remember that success comes from consistent application of these principles combined with continuous learning and adaptation.

## Next Steps
1. Review the key concepts outlined above
2. Choose one area to focus on initially
3. Create an action plan with specific milestones
4. Begin implementation with small, manageable steps
5. Track your progress and adjust as needed

*Generated with AI assistance - Review and customize as needed for your specific use case.*`;

      setGeneratedContent(content);
      setIsLoading(false);
    }, 1500);
  };

  const runAccessibilityCheck = () => {
    setIsLoading(true);
    setTimeout(() => {
      setAccessibilityResults({
        score: 85,
        issues: [
          { type: 'error', message: 'Missing alt text for 2 images', count: 2 },
          { type: 'warning', message: 'Low contrast ratio on 3 elements', count: 3 },
          { type: 'info', message: 'Consider adding ARIA labels to form inputs', count: 5 }
        ],
        suggestions: [
          'Add descriptive alt text to all images',
          'Increase contrast ratio for better readability',
          'Add ARIA labels for screen reader compatibility',
          'Ensure proper heading hierarchy (h1, h2, h3)',
          'Add focus indicators for keyboard navigation'
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const runTranslation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTranslationResults({
        originalLanguage: 'English',
        translations: [
          { language: 'Spanish', status: 'completed', wordCount: 1250 },
          { language: 'French', status: 'completed', wordCount: 1180 },
          { language: 'German', status: 'completed', wordCount: 1320 },
          { language: 'Italian', status: 'completed', wordCount: 1200 },
          { language: 'Portuguese', status: 'completed', wordCount: 1275 }
        ],
        totalCost: '$45.50',
        estimatedTime: '2-3 hours'
      });
      setIsLoading(false);
    }, 2500);
  };

  const runSEOAnalysis = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSeoResults({
        overallScore: 78,
        metrics: {
          titleTag: { score: 90, status: 'good' },
          metaDescription: { score: 85, status: 'good' },
          headings: { score: 70, status: 'warning' },
          keywords: { score: 65, status: 'warning' },
          readability: { score: 88, status: 'good' },
          imageAlt: { score: 60, status: 'error' }
        },
        suggestions: [
          'Add more relevant keywords to your content',
          'Optimize image alt text for better SEO',
          'Improve heading structure (H1, H2, H3)',
          'Increase content length to 1500+ words',
          'Add internal links to related content',
          'Optimize page loading speed'
        ],
        keywords: ['AI content', 'content management', 'SEO optimization', 'digital marketing']
      });
      setIsLoading(false);
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'generate':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-blue-500" />
                AI Content Generator
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                  <input
                    type="text"
                    placeholder="Enter your content topic (e.g., Digital Marketing Strategies)"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tone & Style</label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select tone and style</option>
                    <option value="professional">Professional & Authoritative</option>
                    <option value="casual">Casual & Conversational</option>
                    <option value="playful">Playful & Creative</option>
                    <option value="technical">Technical & Detailed</option>
                    <option value="educational">Educational & Informative</option>
                  </select>
                </div>

                <button 
                  onClick={handleGenerate} 
                  disabled={isLoading || !topic || !tone}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-3 rounded-md font-medium flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Content...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </button>
              </div>
            </div>

            {generatedContent && (
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-green-500" />
                  Generated Content
                </h3>
                <textarea
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                  className="w-full h-64 p-3 border border-gray-300 rounded-md resize-none font-mono text-sm"
                />
                <div className="flex space-x-3 mt-4">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium">
                    Save to Storyblok
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                    Copy to Clipboard
                  </button>
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium">
                    Export as Markdown
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'accessibility':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-emerald-500" />
                Accessibility Checker
              </h2>
              <p className="text-gray-600 mb-4">
                Scan your content for accessibility issues and get actionable recommendations.
              </p>
              <button 
                onClick={runAccessibilityCheck}
                disabled={isLoading}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-md font-medium flex items-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Scanning...
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 mr-2" />
                    Run Accessibility Check
                  </>
                )}
              </button>
            </div>

            {accessibilityResults && (
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Accessibility Report</h3>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-emerald-600 mr-2">
                      {accessibilityResults.score}
                    </span>
                    <span className="text-gray-500">/100</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {accessibilityResults.issues.map((issue: any, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      {issue.type === 'error' && <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />}
                      {issue.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />}
                      {issue.type === 'info' && <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5" />}
                      <div>
                        <p className="font-medium text-gray-900">{issue.message}</p>
                        <p className="text-sm text-gray-600">{issue.count} instances found</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {accessibilityResults.suggestions.map((suggestion: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'translate':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-purple-500" />
                Smart Translation
              </h2>
              <p className="text-gray-600 mb-4">
                Translate your content into multiple languages while preserving formatting and context.
              </p>
              <button 
                onClick={runTranslation}
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-md font-medium flex items-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Translating...
                  </>
                ) : (
                  <>
                    <Languages className="h-4 w-4 mr-2" />
                    Start Translation
                  </>
                )}
              </button>
            </div>

            {translationResults && (
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Translation Results</h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-blue-600 font-medium">Original Language</p>
                    <p className="text-lg font-bold text-blue-900">{translationResults.originalLanguage}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-green-600 font-medium">Total Cost</p>
                    <p className="text-lg font-bold text-green-900">{translationResults.totalCost}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-purple-600 font-medium">Estimated Time</p>
                    <p className="text-lg font-bold text-purple-900">{translationResults.estimatedTime}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {translationResults.translations.map((translation: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Globe className="h-5 w-5 text-purple-500" />
                        <span className="font-medium">{translation.language}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">{translation.wordCount} words</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {translation.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'seo':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Search className="h-5 w-5 mr-2 text-amber-500" />
                SEO Optimization
              </h2>
              <p className="text-gray-600 mb-4">
                Analyze your content for SEO performance and get optimization recommendations.
              </p>
              <button 
                onClick={runSEOAnalysis}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-md font-medium flex items-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Analyze SEO
                  </>
                )}
              </button>
            </div>

            {seoResults && (
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">SEO Analysis Report</h3>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-amber-600 mr-2">
                      {seoResults.overallScore}
                    </span>
                    <span className="text-gray-500">/100</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {Object.entries(seoResults.metrics).map(([key, metric]: [string, any]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold">{metric.score}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          metric.status === 'good' ? 'bg-green-500' :
                          metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Optimization Suggestions</h4>
                  <ul className="space-y-2">
                    {seoResults.suggestions.map((suggestion: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <TrendingUp className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Target Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {seoResults.keywords.map((keyword: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Story Smart AI
              </h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/test">
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Test Connection
              </button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Connected to Storyblok</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-full">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Tools</h2>
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-blue-500' : tab.color}`} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}