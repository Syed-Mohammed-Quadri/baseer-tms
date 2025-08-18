"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, RefreshCw, ExternalLink } from "lucide-react";

export default function ResourceManagementPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const iframeUrl = process.env.NEXT_PUBLIC_RESOURCE_MANAGEMENT_URL;

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [retryCount]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setRetryCount((prev) => prev + 1);
  };

  const openInNewTab = () => {
    window.open(iframeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Resource Management
            </h1>
            <p className="text-slate-900 mt-1">
              External resource management system integration
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRetry}
              className="flex items-center px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              disabled={isLoading}
            >
              <RefreshCw
                className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
              />
              Refresh
            </button>
            <button
              onClick={openInNewTab}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in New Tab
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-slate-50 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                Loading Resource Management System
              </h3>
              <p className="text-slate-900">
                Please wait while we connect to the external system...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 bg-slate-50 flex items-center justify-center z-10">
            <div className="text-center max-w-md mx-auto px-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                Unable to Load Resource Management System
              </h3>
              <p className="text-slate-900 mb-6">
                We're having trouble connecting to the external resource
                management system. This could be due to network issues or the
                system being temporarily unavailable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={openInNewTab}
                  className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Open in New Tab
                </button>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg text-left">
                <h4 className="text-sm font-medium text-blue-900 mb-2">
                  System Information:
                </h4>
                <p className="text-sm text-blue-700">URL: {iframeUrl}</p>
                <p className="text-sm text-blue-700">
                  Status: Connection Failed
                </p>
                <p className="text-sm text-blue-700">
                  Retry Attempts: {retryCount}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Iframe Container */}
        <div className="h-full w-full">
          <iframe
            key={retryCount} // Force re-render on retry
            src={iframeUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{
              border: "none",
              minHeight: "calc(100vh - 120px)",
            }}
            title="Resource Management System"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
            loading="lazy"
          />
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-blue-50 border-t border-blue-200 px-6 py-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-sm text-blue-700">
              Secure connection to external resource management system
            </span>
          </div>
          <span className="text-xs text-blue-600">{iframeUrl}</span>
        </div>
      </div>
    </div>
  );
}
