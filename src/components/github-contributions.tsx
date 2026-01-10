"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

const GithubContributions = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Give it a moment to render
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="inline-block min-w-full overflow-x-auto">
      <div className={!isLoaded ? "hidden" : "block"}>
        <GitHubCalendar
          username="killflex"
          showColorLegend={true}
          showTotalCount={true}
          blockSize={8.8}
          blockMargin={3}
          blockRadius={2}
          maxLevel={4}
          fontSize={13}
          theme={{
            dark: ["transparent", "oklch(0.705 0.015 286.067)"],
            light: ["transparent", "oklch(0.705 0.015 286.067)"],
          }}
          tooltips={{
            activity: {
              text: (activity) =>
                `${activity.level} contributions on ${activity.date}`,
              placement: "top",
              hoverRestMs: 0,
              transitionStyles: {
                duration: 0,
                common: { fontWeight: 600 },
              },
              withArrow: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default GithubContributions;
