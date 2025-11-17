"use client";

import Header from "@/components/Header/Header";
import InfoCard from "@/components/InfoCard/InfoCard";
import { CheckCircle, Code, Info } from "lucide-react";
import { useEffect, useState } from "react";

// Helper function to fetch backend data safely
async function fetchData(endpoint: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default function HomePage() {
  const [health, setHealth] = useState<string | null>(null);
  const [version, setVersion] = useState<string | null>(null);
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [healthData, versionData, infoData] = await Promise.all([
        fetchData("health"),
        fetchData("version"),
        fetchData("info"),
      ]);

      setHealth(healthData?.status || "Error");
      setVersion(versionData?.version || "Error");
      setInfo(infoData || { app: "Error" });
      setLoading(false);
    }

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />

      {/* Dashboard content */}
      <main className="max-w-6xl mx-auto p-6 flex flex-wrap justify-center gap-6">
        {/* Loader state */}
        {loading && <p className="w-full text-center text-gray-500">Fetching backend data...</p>}

        {!loading && (
          <>
            {/* Health Card */}
            <InfoCard
              title="Health"
              value={health}
              barColor={health === "ok" ? "bg-green-500" : "bg-red-500"}
              textColor={health === "ok" ? "text-green-600" : "text-red-600"}
              Icon={CheckCircle}
            />

            {/* Version Card */}
            <InfoCard
              title="Version"
              value={version}
              barColor="bg-blue-500"
              textColor="text-blue-600"
              Icon={Code}
            />

            {/* App Info Card */}
            <InfoCard
              title="App Info"
              value={info?.app}
              barColor="bg-purple-500"
              textColor="text-purple-600"
              Icon={Info}
            />
          </>
        )}
      </main>
    </div>
  );
}
