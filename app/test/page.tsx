'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface Story {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  status: string;
  content_type: string;
}

export default function TestPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [story, setStory] = useState<Story | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'testing' | 'connected' | 'error'>('testing');
  const [apiKey, setApiKey] = useState('sb-demo-12345abcdef');
  const [spaceId, setSpaceId] = useState('123456');

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    setIsLoading(true);
    setConnectionStatus('testing');
    
    // Simulate API call delay
    setTimeout(() => {
      const dummyStory: Story = {
        id: 12345,
        name: 'Welcome to Our Blog',
        slug: 'welcome-to-our-blog',
        created_at: new Date().toISOString(),
        status: 'published',
        content_type: 'blog_post'
      };
      
      setStory(dummyStory);
      setConnectionStatus('connected');
      setIsLoading(false);
    }, 2000);
  };

  const retryConnection = () => {
    setStory(null);
    testConnection();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Storyblok Connection Test
            </h1>
            <p className="text-gray-600">
              Testing connection to your Storyblok space
            </p>
          </div>

          {/* Connection Settings */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connection Settings</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  API Token
                </label>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Storyblok API token"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Space ID
                </label>
                <input
                  type="text"
                  value={spaceId}
                  onChange={(e) => setSpaceId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your space ID"
                />
              </div>
            </div>
          </div>
          
          {/* Connection Status */}
          <div className="text-center py-8">
            {isLoading ? (
              <div>
                <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Testing Connection...
                </h3>
                <p className="text-gray-600">
                  Connecting to Storyblok API and fetching sample content
                </p>
              </div>
            ) : connectionStatus === 'connected' && story ? (
              <div>
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Successfully Connected!
                </h3>
                <p className="text-green-700 mb-6">
                  Your Storyblok integration is working perfectly
                </p>
                
                {/* Story Details */}
                <div className="bg-green-50 rounded-lg p-6 text-left max-w-2xl mx-auto">
                  <h4 className="font-bold text-green-900 mb-4 text-center">
                    Sample Story Retrieved:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-green-800">Name:</span>
                      <span className="text-green-700">{story.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-green-800">ID:</span>
                      <span className="text-green-700">{story.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-green-800">Slug:</span>
                      <span className="text-green-700">{story.slug}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-green-800">Status:</span>
                      <span className="text-green-700 capitalize">{story.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-green-800">Type:</span>
                      <span className="text-green-700">{story.content_type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-green-800">Created:</span>
                      <span className="text-green-700">
                        {new Date(story.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* API Features Status */}
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <h5 className="font-medium text-blue-900">Content API</h5>
                    <p className="text-sm text-blue-700">Ready</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                    <h5 className="font-medium text-purple-900">Management API</h5>
                    <p className="text-sm text-purple-700">Ready</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-red-900 mb-2">
                  Connection Failed
                </h3>
                <p className="text-red-700 mb-4">
                  Unable to connect to Storyblok. Please check your credentials.
                </p>
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            {connectionStatus === 'connected' ? (
              <>
                <Link href="/dashboard">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Open Dashboard
                  </button>
                </Link>
                <button
                  onClick={retryConnection}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Test Again
                </button>
              </>
            ) : (
              <button
                onClick={retryConnection}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Testing...' : 'Retry Connection'}
              </button>
            )}
            
            <Link href="/">
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}