"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestPage() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    async function check() {
      const { data, error } = await supabase
        .from("tickets")
        .select("*")
        .limit(1);

      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Supabase Connected Successfully ✅");
      }
    }

    check();
  }, []);

  return (
    <div className="p-20 text-3xl font-bold">
      {status}
    </div>
  );
}