"use client";

import { useState, useEffect } from "react";
import {
  AlertTriangle,
  RefreshCw,
  ExternalLink,
  Shield,
  Info,
} from "lucide-react";

export default function ResourceManagementPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [errorDetails, setErrorDetails] = useState<string>("");

  // Access the environment variable with NEXT_PUBLIC_ prefix
  const iframeUrl =
    process.env.NEXT_PUBLIC_RESOURCE_MANAGEMENT_URL ||
    "http://14.194.41.182/tms/login";

  useEffect(() => {
    // Extended loading time to allow iframe to load
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasError(true);
      setErrorDetails("Iframe failed to load within timeout period");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [retryCount]);

  const handleIframeLoad = () => {
    console.log("Iframe loaded successfully");
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    console.error("Iframe failed to load");
    setIsLoading(false);
    setHasError(true);
    setErrorDetails("Iframe failed to load due to security restrictions");
  };

  const handleRetry = () => {
    console.log("Retrying iframe load...");
    setIsLoading(true);
    setHasError(false);
    setErrorDetails("");
    setRetryCount((prev) => prev + 1);
  };

  const openInNewTab = () => {
    window.open(iframeUrl, "_blank", "noopener,noreferrer");
  };

  // Log the URL for debugging
  useEffect(() => {
    console.log("Iframe URL:", iframeUrl);
    console.log("Page protocol:", window.location.protocol);
  }, [iframeUrl]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Resource Management
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              External resource management system integration
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRetry}
              className="flex items-center px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300"
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
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                Loading External System
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Attempting to connect to resource management system...
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                This may take a few moments
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center z-10">
            <div className="text-center max-w-2xl mx-auto px-6">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                External System Access Restricted
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                The external resource management system cannot be embedded due
                to security policies. This is common with external systems that
                restrict iframe embedding for security reasons.
              </p>

              {/* Common Reasons */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 text-left">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">
                      Common Reasons:
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                      <li>
                        • <strong>CORS Policy:</strong> Server blocks
                        cross-origin iframe requests
                      </li>
                      <li>
                        • <strong>X-Frame-Options:</strong> Server prevents
                        embedding in frames
                      </li>
                      <li>
                        • <strong>Mixed Content:</strong> HTTPS site trying to
                        load HTTP iframe
                      </li>
                      <li>
                        • <strong>Security Headers:</strong> Content Security
                        Policy restrictions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <button
                  onClick={openInNewTab}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Access External System
                </button>
                <button
                  onClick={handleRetry}
                  className="px-6 py-3 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300"
                >
                  Try Again
                </button>
              </div>

              {/* Technical Details */}
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-left">
                <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                  Technical Details:
                </h4>
                <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400 font-mono">
                  <p>
                    URL:{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      {iframeUrl}
                    </span>
                  </p>
                  <p>
                    Protocol:{" "}
                    <span className="text-green-600 dark:text-green-400">
                      {typeof window !== "undefined"
                        ? window.location.protocol
                        : "https:"}
                    </span>
                  </p>
                  <p>
                    Attempts:{" "}
                    <span className="text-orange-600 dark:text-orange-400">
                      {retryCount + 1}
                    </span>
                  </p>
                  <p>
                    Error:{" "}
                    <span className="text-red-600 dark:text-red-400">
                      {errorDetails || "Security restriction"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Iframe Container - Hidden if error */}
        {!hasError && (
          <div className="h-full w-full">
            <iframe
              key={`iframe-${retryCount}`}
              src={iframeUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                border: "none",
                minHeight: "calc(100vh - 120px)",
                backgroundColor: "#f8fafc",
              }}
              title="Resource Management System"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation allow-downloads allow-popups-to-escape-sandbox"
              referrerPolicy="no-referrer-when-downgrade"
              allow="fullscreen"
            />
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div
        className={`border-t px-6 py-3 flex-shrink-0 ${
          hasError
            ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
            : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`w-2 h-2 rounded-full mr-3 ${
                hasError
                  ? "bg-red-500"
                  : isLoading
                  ? "bg-yellow-500 animate-pulse"
                  : "bg-green-500"
              }`}
            ></div>
            <span
              className={`text-sm ${
                hasError
                  ? "text-red-700 dark:text-red-300"
                  : "text-blue-700 dark:text-blue-300"
              }`}
            >
              {hasError
                ? 'Connection blocked - Use "Access External System" button'
                : isLoading
                ? "Connecting to external system..."
                : "Connected to external system"}
            </span>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {new URL(iframeUrl).hostname}
          </span>
        </div>
      </div>
    </div>
  );
}
