/* Hero particle grid + data-stream background.
   Keeps things cheap: a single canvas at devicePixelRatio, dots + connecting lines.
*/
(function(){
  const canvas = document.getElementById('hero-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W=0, H=0, dpr = Math.min(window.devicePixelRatio||1, 2);
  let nodes = [];
  let mouse = {x: -9999, y: -9999};
  let running = true;

  function resize(){
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W*dpr; canvas.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    init();
  }

  function init(){
    const density = parseFloat(document.documentElement.dataset.motionDensity || '1');
    const count = Math.max(40, Math.floor((W*H)/18000 * density));
    nodes = new Array(count).fill(0).map(()=>({
      x: Math.random()*W,
      y: Math.random()*H,
      vx: (Math.random()-0.5)*0.25,
      vy: (Math.random()-0.5)*0.25,
      r: Math.random()*1.4 + 0.4,
    }));
  }

  function step(){
    if(!running){ requestAnimationFrame(step); return; }
    ctx.clearRect(0,0,W,H);

    // accent from CSS var
    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue('--accent').trim() || '#818cf8';
    const accent2 = css.getPropertyValue('--accent-2').trim() || '#c084fc';

    // grid lines — animated scanline
    const t = performance.now()/1000;
    ctx.save();
    ctx.globalAlpha = 0.07;
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1;
    const gs = 72;
    const off = (t*18) % gs;
    for(let x=-off; x<W; x+=gs){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for(let y=-off; y<H; y+=gs){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    ctx.restore();

    // scanline sweep
    const sweepY = ((t*0.08) % 1) * H;
    const grad = ctx.createLinearGradient(0, sweepY-120, 0, sweepY+120);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.5, hexToRgba(accent, 0.10));
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, sweepY-120, W, 240);

    // update + draw nodes
    for(let i=0;i<nodes.length;i++){
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy;
      if(n.x < 0 || n.x > W) n.vx *= -1;
      if(n.y < 0 || n.y > H) n.vy *= -1;

      // mouse repel
      const dx = n.x - mouse.x, dy = n.y - mouse.y;
      const d2 = dx*dx + dy*dy;
      if(d2 < 140*140){
        const d = Math.sqrt(d2)||1;
        n.x += (dx/d) * 0.6;
        n.y += (dy/d) * 0.6;
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fillStyle = hexToRgba(accent, 0.7);
      ctx.fill();
    }

    // connect
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i], b=nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const d2=dx*dx+dy*dy;
        if(d2<110*110){
          const alpha = (1 - d2/(110*110)) * 0.35;
          ctx.strokeStyle = hexToRgba(accent, alpha);
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }

    // mouse line-of-sight
    for(let i=0;i<nodes.length;i++){
      const n = nodes[i];
      const dx=n.x-mouse.x, dy=n.y-mouse.y;
      const d2=dx*dx+dy*dy;
      if(d2<160*160){
        const alpha = (1 - d2/(160*160)) * 0.6;
        ctx.strokeStyle = hexToRgba(accent2, alpha);
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke();
      }
    }

    requestAnimationFrame(step);
  }

  function hexToRgba(hex, a){
    hex = hex.trim();
    if(hex.startsWith('rgb')) return hex.replace(')', `, ${a})`).replace('rgb', 'rgba');
    const h = hex.replace('#','');
    const full = h.length===3 ? h.split('').map(c=>c+c).join('') : h;
    const r = parseInt(full.slice(0,2),16);
    const g = parseInt(full.slice(2,4),16);
    const b = parseInt(full.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e=>{
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  window.addEventListener('mouseleave', ()=>{ mouse.x=-9999; mouse.y=-9999; });

  // pause when offscreen
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ running = e.isIntersecting; });
  });
  io.observe(canvas);

  // expose reinit
  window.__heroReinit = init;

  resize();
  requestAnimationFrame(step);
})();
