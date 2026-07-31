// main.js — lógica del explorador de taxonomía
// Consume data/neuropsicologia.json (generado desde el YAML de origen)

async function init() {
  const res = await fetch("data/neuropsicologia.json");
  const data = await res.json();

  const STORAGE_KEY = "np-taxonomia-dominados";
  const mastered = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  function saveMastered(){ localStorage.setItem(STORAGE_KEY, JSON.stringify([...mastered])); }

  // ---------- layout radial completo (se calcula una sola vez) ----------
  const root = d3.hierarchy(data);
  root.each(d => { d.id = d.ancestors().reverse().map(a => a.data.name).join(" / "); });

  // Orden de los nodos — por defecto respeta el orden del JSON (el orden en que
  // aparecen los "children" en el archivo). Para cambiarlo, descomentá una opción:
  //
  // root.sort((a, b) => d3.ascending(a.data.name, b.data.name));           // alfabético
  // root.sort((a, b) => d3.descending(a.data.name, b.data.name));          // alfabético inverso
  // root.sort((a, b) => (a.children?.length||0) - (b.children?.length||0)); // menos hijos primero
  // root.sort((a, b) => d3.descending(a.height, b.height));                // subárboles más grandes primero
  //
  // Si no se llama a root.sort(), d3 mantiene el orden tal como está en el JSON —
  // que en este caso ya sigue la numeración del temario (1, 2.1, 2.2, ...).

  const radiusStep = 150;
  d3.cluster().size([2 * Math.PI, radiusStep * 3])(root);

  root.each(d => {
    const angle = d.x - Math.PI / 2;
    d.px = d.y * Math.cos(angle);
    d.py = d.y * Math.sin(angle);
  });

  // colapso inicial: solo se ve la raíz y sus hijos directos (unidades)
  root.each(d => {
    if (d.depth >= 1 && d.children) { d._children = d.children; d.children = null; }
  });

  // ---------- svg setup ----------
  const svg = d3.select("#canvas");
  const g = svg.append("g");

  const defs = svg.append("defs");
  defs.append("pattern")
    .attr("id", "halftone")
    .attr("width", 6).attr("height", 6)
    .attr("patternUnits", "userSpaceOnUse")
    .html(`<rect width="6" height="6" fill="var(--paper)"/><circle cx="3" cy="3" r="2" fill="var(--accent)"/>`);

  const linkLayer = g.append("g").attr("class", "links");
  const nodeLayer = g.append("g").attr("class", "nodes");

  let currentK = 1;
  const zoom = d3.zoom().scaleExtent([0.3, 4]).on("zoom", (ev) => {
    currentK = ev.transform.k;
    g.attr("transform", ev.transform);
    nodeLayer.selectAll("g.label-group").attr("transform", `scale(${1 / currentK})`);
  });
  svg.call(zoom);

  function fitToRoot(){
    const w = document.getElementById("canvas-wrap").clientWidth, h = document.getElementById("canvas-wrap").clientHeight;
    svg.call(zoom.transform, d3.zoomIdentity.translate(w/2, h/2).scale(0.9));
  }
  window.addEventListener("resize", () => render());

  const symbolByDepth = [
    d3.symbol().type(d3.symbolSquare).size(2200),
    d3.symbol().type(d3.symbolCircle).size(1100),
    d3.symbol().type(d3.symbolDiamond).size(750),
    d3.symbol().type(d3.symbolSquare).size(260),
  ];

  function visibleNodesLinks(){
    const nodes = root.descendants();
    const links = root.links();
    return { nodes, links };
  }

  let focus = root;

  function pathToRoot(node){
    return node.ancestors().reverse();
  }

  function renderBreadcrumb(){
    const bc = d3.select("#breadcrumb");
    bc.html("");
    const chain = pathToRoot(focus);
    chain.forEach((n, i) => {
      if (i > 0) bc.append("span").attr("class", "sep").text("→");
      bc.append("span")
        .attr("class", "crumb" + (n === focus ? " current" : ""))
        .text(n.data.name.split(" — ")[0])
        .on("click", () => focusNode(n));
    });
  }

  function boundsOf(node){
    const list = [node, ...(node.children ? node.descendants() : [])];
    const xs = list.map(d => d.px), ys = list.map(d => d.py);
    return {
      x0: Math.min(...xs), x1: Math.max(...xs),
      y0: Math.min(...ys), y1: Math.max(...ys)
    };
  }

  function focusNode(node){
    focus = node;
    const w = document.getElementById("canvas-wrap").clientWidth, h = document.getElementById("canvas-wrap").clientHeight;
    const b = boundsOf(node);
    const bw = Math.max(b.x1 - b.x0, 40), bh = Math.max(b.y1 - b.y0, 40);
    const scale = Math.max(0.35, Math.min(2.2, 0.8 / Math.max(bw / w, bh / h)));
    const cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2;
    svg.transition().duration(650).ease(d3.easeCubicInOut)
      .call(zoom.transform, d3.zoomIdentity.translate(w/2, h/2).scale(scale).translate(-cx, -cy));
    renderBreadcrumb();
  }

  function toggle(node){
    if (node.data.children && node.data.children.length === 0) return;
    if (node.children){
      node._children = node.children;
      node.children = null;
    } else if (node._children){
      node.children = node._children;
      node._children = null;
    } else {
      return; // hoja
    }
    render();
    focusNode(node);
  }

  function toggleMastered(node){
    const id = node.id;
    if (mastered.has(id)) mastered.delete(id); else mastered.add(id);
    saveMastered();
    render();
  }

  function showInfo(d){
    const content = document.getElementById("info-content");
    const chain = pathToRoot(d);
    const depthLabel = ["Asignatura", "Unidad", "Tema", "Concepto"][Math.min(d.depth, 3)];

    const rows = [];
    rows.push(`<tr><td class="field">Nivel</td><td>${depthLabel}</td></tr>`);
    if (chain.length > 1) rows.push(`<tr><td class="field">Unidad</td><td>${(chain[1] || {}).data ? chain[1].data.name.replace(/^Unidad \d+ — /,'') : ""}</td></tr>`);
    if (chain.length > 2) rows.push(`<tr><td class="field">Tema</td><td>${chain[2].data.name}</td></tr>`);
    if (!d.data.children) rows.push(`<tr><td class="field">Estado</td><td>${mastered.has(d.id) ? "Dominado" : "Sin repasar"}</td></tr>`);

    content.innerHTML = `
      <div class="info-eyebrow">${d.data.icon || ""} ${depthLabel}</div>
      <h2>${d.data.name}</h2>
      ${d.data.img ? `<img src="${d.data.img}" alt="${d.data.name}">` : ""}
      <table>${rows.join("")}</table>
      ${d.data.def ? `<p>${d.data.def}</p>` : ""}
    `;
  }

  function render(){
    const { links } = visibleNodesLinks();
    const visibleLinks = links.filter(l => l.source.children && l.source.children.includes(l.target));
    const visibleNodes = root.descendants().filter(d => d.parent === null || (d.parent.children && d.parent.children.includes(d)));

    // d3.linkRadial usa directamente x (ángulo) e y (radio) que ya calculó
    // d3.cluster() en cada nodo — el mismo sistema de coordenadas que usamos
    // para px/py, así que el trazo curvo queda perfectamente alineado con
    // la posición real de cada nodo.
    const linkPath = d3.linkRadial().angle(l => l.x).radius(l => l.y);

    const ghost = linkLayer.selectAll("path.link-ghost").data(visibleLinks, d => d.target.id);
    ghost.join(
      enter => enter.append("path").attr("class", "link link-ghost")
        .attr("stroke-width", d => 5 - d.target.depth)
        .attr("transform", "translate(2,2)")
        .attr("opacity", 0)
        .attr("d", linkPath)
        .transition().duration(400).attr("opacity", .55),
      update => update,
      exit => exit.transition().duration(200).attr("opacity", 0).remove()
    ).attr("d", linkPath);

    const ink = linkLayer.selectAll("path.link-ink").data(visibleLinks, d => d.target.id);
    ink.join(
      enter => enter.append("path").attr("class", "link link-ink")
        .attr("stroke-width", d => 5 - d.target.depth)
        .attr("opacity", 0)
        .attr("d", linkPath)
        .transition().duration(400).attr("opacity", 1),
      update => update,
      exit => exit.transition().duration(200).attr("opacity", 0).remove()
    ).attr("d", linkPath);

    const nodeSel = nodeLayer.selectAll("g.node").data(visibleNodes, d => d.id);

    const enter = nodeSel.enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.parent ? d.parent.px : d.px},${d.parent ? d.parent.py : d.py})`)
      .style("opacity", 0)
      .on("click", (ev, d) => {
        ev.stopPropagation();
        const isLeaf = !d.data.children;
        if (isLeaf) toggleMastered(d); else toggle(d);
      })
      .on("mouseenter", (ev, d) => showInfo(d));

    enter.append("path")
      .attr("class", "node-shape-ghost")
      .attr("transform", "translate(2,2) rotate(-3)")
      .attr("d", d => symbolByDepth[Math.min(d.depth,3)]());

    enter.append("path")
      .attr("class", "node-shape")
      .attr("fill", d => {
        if (d.depth === 0) return "var(--ink)";
        if (d.depth === 1) return "var(--accent-2)";
        if (d.depth === 2) return "var(--paper)";
        return "var(--paper-dark)";
      })
      .attr("d", d => symbolByDepth[Math.min(d.depth,3)]());

    const iconSizeByDepth = [0, 24, 17, 12]; // depth0 ya tiene su texto propio, no lleva emoji
    enter.filter(d => d.depth > 0 && d.data.icon).append("text")
      .attr("class", "node-icon")
      .style("font-size", d => iconSizeByDepth[Math.min(d.depth,3)] + "px")
      .attr("dy", "0.05em")
      .text(d => d.data.icon);

    enter.filter(d => !d.data.children).append("circle")
      .attr("class", "mastery-badge")
      .attr("r", 6)
      .attr("cx", 10).attr("cy", -10)
      .attr("fill", "url(#halftone)")
      .attr("stroke", "var(--ink)")
      .attr("stroke-width", 1.5)
      .attr("opacity", d => mastered.has(d.id) ? 1 : 0);

    const labelGroup = enter.append("g")
      .attr("class", "label-group")
      .attr("transform", `scale(${1 / currentK})`);

    labelGroup.filter(d => d.depth > 0).append("rect").attr("class", "label-bg");

    labelGroup.append("text")
      .attr("class", d => "node-label depth" + d.depth)
      .attr("text-anchor", d => d.depth === 0 ? "middle" : (d.px > 0 ? "start" : "end"))
      .attr("dy", d => d.depth === 0 ? 4 : (d.depth <= 1 ? -16 : 14))
      .attr("dx", d => d.depth === 0 ? 0 : (d.px > 0 ? 12 : -12))
      .text(d => d.data.name.replace(/^Unidad \d+ — /, ""));

    labelGroup.filter(d => d.depth > 0).each(function(){
      const g = d3.select(this);
      const textNode = g.select("text").node();
      const bbox = textNode.getBBox();
      g.select("rect.label-bg")
        .attr("x", bbox.x - 4).attr("y", bbox.y - 2)
        .attr("width", bbox.width + 8).attr("height", bbox.height + 4);
    });

    const merged = enter.merge(nodeSel);
    merged.transition().duration(500).ease(d3.easeCubicOut)
      .attr("transform", d => `translate(${d.px},${d.py})`)
      .style("opacity", 1);

    merged.select("path.node-shape")
      .attr("fill", d => {
        if (d.depth === 0) return "var(--ink)";
        if (d.depth === 1) return "var(--accent-2)";
        if (d.depth === 2) return "var(--paper)";
        return "var(--paper-dark)";
      });

    merged.select("circle.mastery-badge")
      .transition().duration(200)
      .attr("opacity", d => mastered.has(d.id) ? 1 : 0);

    nodeSel.exit().transition().duration(250).style("opacity", 0).remove();

    renderBreadcrumb();
  }

  svg.on("click", () => { if (focus !== root) focusNode(focus.parent || root); });

  fitToRoot();
  render();
  focusNode(root);

}

init();
