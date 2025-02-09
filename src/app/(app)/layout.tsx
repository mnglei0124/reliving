"use client";

import { Sidebar } from "@/components/Sidebar";
import { useAuth } from "@/contexts/AuthContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-br from-purple-400 to-indigo-600 min-h-screen">
      <Sidebar />
      <div className="md:pl-64 flex justify-center">
        <div className="w-full max-w-5xl p-4">{children}</div>
      </div>
    </div>
  );
}
