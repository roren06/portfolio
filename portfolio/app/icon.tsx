export const contentType = "image/svg+xml";
export const size = { width: 32, height: 32 };

export default function Icon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="#050508"/>
  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#8b5cf6" stroke-opacity="0.55"/>
  <path d="M16 6L8 10.5v11L16 26l8-4.5v-11L16 6z" stroke="#8b5cf6" stroke-width="1.5" fill="rgba(139,92,246,0.18)"/>
</svg>`.trim();

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}
