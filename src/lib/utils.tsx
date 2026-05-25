import React from "react";

/**
 * Parses markdown-style **bold** and __italic__ markers from translation strings
 * and renders them with custom premium style colors (oxide and moss).
 */
export function renderFormattedText(text: string): React.ReactNode[] {
  if (!text) return [];
  
  // Split on **text** (oxide) and __text__ (moss)
  const parts = text.split(/(\*\*.*?\*\*|__.*?__)/g);
  
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const clean = part.slice(2, -2);
      return (
        <span key={i} className="text-oxide font-semibold not-italic">
          {clean}
        </span>
      );
    }
    if (part.startsWith("__") && part.endsWith("__")) {
      const clean = part.slice(2, -2);
      return (
        <span key={i} className="text-moss font-semibold not-italic">
          {clean}
        </span>
      );
    }
    return part;
  });
}
