import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1a1d19", color: "#f7f5ed", padding: "62px 72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 27, fontWeight: 800, letterSpacing: 2 }}>
        <span>GLANZBERG WEB</span>
        <span style={{ color: "#d7fb6b", fontSize: 44 }}>✳</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3 }}>
        <span>Look sharp.</span><span>Work smarter.</span><span style={{ color: "#d7fb6b" }}>Grow online.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #62685f", paddingTop: 22, fontSize: 22 }}>
        <span>WEBSITES BUILT TO MEAN BUSINESS.</span><span>GLANZBERG WEB ↗</span>
      </div>
    </div>,
    size
  );
}
