const svgNS = "http://www.w3.org/2000/svg";
const group = document.getElementById("burstGroup");
for (let i = 0; i < 60; i++) {
  const angle = Math.random() * 360;
  const length = 30 + Math.random() * 50;
  const x2 = 100 + length * Math.cos(angle * Math.PI / 180);
  const y2 = 100 + length * Math.sin(angle * Math.PI / 180);
  const line = document.createElementNS(svgNS, "line");
  line.setAttribute("x1", "100");
  line.setAttribute("y1", "100");
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", `hsl(${Math.random()*360}, 80%, 60%)`);
  line.setAttribute("stroke-width", "1.5");
  group.appendChild(line);
}
