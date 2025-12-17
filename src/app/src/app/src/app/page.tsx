"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);

  const emergency =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("mode") === "emergency";

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=41.2867&longitude=36.33&hourly=temperature_2m,precipitation&timezone=Europe/Istanbul")
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 20,
        background: emergency ? "#000" : "#f5f5f5",
        color: emergency ? "#fff" : "#111",
        fontFamily: "system-ui"
      }}
    >
      <h1>Samsun Merkez Net</h1>

      <a
        href={emergency ? "/" : "/?mode=emergency"}
        style={{
          display: "inline-block",
          marginBottom: 20,
          padding: "10px 14px",
          borderRadius: 10,
          background: emergency ? "#222" : "#111",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 700
        }}
      >
        {emergency ? "Normal Moda Dön" : "Acil Mod"}
      </a>

      {!data ? (
        <p>Yükleniyor…</p>
      ) : (
        <div style={{ fontSize: 18 }}>
          <p>🌡️ Sıcaklık: {data.hourly.temperature_2m[0]}°C</p>
          <p>🌧️ Yağış: {data.hourly.precipitation[0]} mm</p>
        </div>
      )}

      <h2 style={{ marginTop: 30 }}>Samsun Radar</h2>
      <img
        src="https://www.mgm.gov.tr/FTPDATA/uzal/radar/smn/smnppi15.jpg"
        alt="Samsun Radar"
        style={{ width: "100%", maxWidth: 600, borderRadius: 12 }}
      />
    </main>
  );
}
