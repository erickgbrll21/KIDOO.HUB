"use client";

import { useEffect, useRef } from "react";

export function JourneyArch() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const track = wrap.querySelector<SVGPathElement>("[data-kx-track]");
    const trail = wrap.querySelector<SVGPathElement>("[data-kx-trail]");
    const dot = wrap.querySelector<SVGCircleElement>("[data-kx-dot]");
    const halo = wrap.querySelector<SVGCircleElement>("[data-kx-halo]");
    if (!track || !trail || !dot || !halo) return;

    const pills = [...wrap.querySelectorAll<HTMLElement>("[data-kx-pill]")];
    const cards = [...wrap.querySelectorAll<HTMLElement>("[data-kx-card]")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const VB_W = 700;
    const VB_H = 620;
    const CX = 350;
    const CY = 340;
    const total = track.getTotalLength();
    const LEG = 260;
    const ARC = Math.PI * 200;
    const STOPS = [
      40,
      LEG + ARC * 0.2,
      LEG + ARC * 0.5,
      LEG + ARC * 0.8,
      Math.max(40, total - 40),
    ];

    const archEl = wrap.querySelector<HTMLElement>(".kx-arch");
    const placePills = () => {
      if (!archEl) return;
      const archW = archEl.getBoundingClientRect().width;
      const side = archW < 520 ? 30 : 58;
      STOPS.forEach((length, i) => {
        const p = track.getPointAtLength(length);
        let nx: number;
        let ny: number;
        if (p.y > CY + 1) {
          nx = p.x < CX ? -1 : 1;
          ny = p.y > 540 ? -0.85 : 0;
        } else {
          const dx = p.x - CX;
          const dy = p.y - CY;
          const d = Math.hypot(dx, dy) || 1;
          nx = dx / d;
          ny = dy / d;
        }
        const off = archW < 520 && p.y > 540 ? 14 : side;
        const x = p.x + nx * off;
        const y = p.y + ny * off;
        const el = pills[i];
        if (!el) return;
        if (archW < 520 && p.y > 540) {
          el.style.left = nx < 0 ? "4%" : "96%";
          el.style.top = "70%";
          el.style.transform = `translate(${nx < 0 ? "0%" : "-100%"}, -50%)`;
        } else {
          el.style.left = `${(x / VB_W) * 100}%`;
          el.style.top = `${(y / VB_H) * 100}%`;
          el.style.transform = `translate(${-50 + 50 * nx}%, ${-50 + 50 * ny}%)`;
        }
        el.style.animationDelay = `${1.2 + i * 0.12}s`;
      });

      const pad = 8;
      const clip = wrap.closest("#contato")?.firstElementChild;
      const bounds = (clip instanceof HTMLElement ? clip : wrap).getBoundingClientRect();
      const arch = archEl.getBoundingClientRect();
      if (!arch.width || !arch.height) return;
      pills.forEach((el) => {
        const tx = Number.parseFloat(el.style.transform.match(/translate\(([-\d.]+)%/)?.[1] ?? "0");
        const ty = Number.parseFloat(el.style.transform.match(/,\s*([-\d.]+)%/)?.[1] ?? "0");
        const width = el.offsetWidth;
        const height = el.offsetHeight;
        const left = arch.left + (Number.parseFloat(el.style.left) / 100) * arch.width + (tx / 100) * width;
        const top = arch.top + (Number.parseFloat(el.style.top) / 100) * arch.height + (ty / 100) * height;
        let dx = 0;
        let dy = 0;
        if (left < bounds.left + pad) dx = bounds.left + pad - left;
        else if (left + width > bounds.right - pad) dx = bounds.right - pad - (left + width);
        if (top < bounds.top + pad) dy = bounds.top + pad - top;
        else if (top + height > bounds.bottom - pad) dy = bounds.bottom - pad - (top + height);
        if (!dx && !dy) return;
        el.style.left = `${Number.parseFloat(el.style.left) + (dx / arch.width) * 100}%`;
        el.style.top = `${Number.parseFloat(el.style.top) + (dy / arch.height) * 100}%`;
      });
    };
    placePills();
    const pillsObserver = new ResizeObserver(placePills);
    pillsObserver.observe(wrap);
    pills.forEach((el) => pillsObserver.observe(el));
    document.fonts?.ready.then(placePills);

    const HOLD = 1.9;
    const MOVE = 1.0;
    const RESET = 0.8;
    const START = 2.0;
    const CYCLE = STOPS.length * HOLD + (STOPS.length - 1) * MOVE + RESET;
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

    const stateAt = (t: number) => {
      let acc = 0;
      for (let i = 0; i < STOPS.length; i++) {
        if (t < acc + HOLD) return { L: STOPS[i], step: i, fade: 1 };
        acc += HOLD;
        if (i < STOPS.length - 1) {
          if (t < acc + MOVE) {
            const k = ease((t - acc) / MOVE);
            return {
              L: STOPS[i] + (STOPS[i + 1] - STOPS[i]) * k,
              step: k > 0.5 ? i + 1 : i,
              fade: 1,
            };
          }
          acc += MOVE;
        }
      }
      return { L: STOPS[STOPS.length - 1], step: STOPS.length - 1, fade: 1 - (t - acc) / RESET };
    };

    let lastStep = -1;
    let t0: number | null = null;
    let rx = 0;
    let ry = 0;
    let trx = 0;
    let tryY = 0;
    let frame = 0;
    let timer = 0;

    const render = (st: { L: number; step: number; fade: number }) => {
      const p = track.getPointAtLength(st.L);
      dot.setAttribute("cx", String(p.x));
      dot.setAttribute("cy", String(p.y));
      dot.setAttribute("r", String(13 * st.fade));
      halo.setAttribute("cx", String(p.x));
      halo.setAttribute("cy", String(p.y));
      trail.setAttribute("stroke-dasharray", `${st.L} 2000`);
      trail.style.opacity = String(st.fade);
      if (st.step !== lastStep) {
        lastStep = st.step;
        pills.forEach((el, i) => {
          el.classList.toggle("on", i === st.step);
          el.classList.toggle("done", i < st.step);
        });
        cards.forEach((el, i) => el.classList.toggle("on", i === st.step));
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const py = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      tryY = px * 10;
      trx = -py * 8;
    };
    const onLeave = () => {
      trx = 0;
      tryY = 0;
    };

    if (reduce) {
      let i = 0;
      render({ L: STOPS[0], step: 0, fade: 1 });
      timer = window.setInterval(() => {
        i = (i + 1) % STOPS.length;
        render({ L: STOPS[i], step: i, fade: 1 });
      }, 3000);
    } else {
      if (window.matchMedia("(pointer: fine)").matches) {
        wrap.addEventListener("pointermove", onMove);
        wrap.addEventListener("pointerleave", onLeave);
      }
      const loop = (now: number) => {
        if (t0 === null) t0 = now;
        const t = (now - t0) / 1000 - START;
        if (t >= 0) {
          const st = stateAt(t % CYCLE);
          render(st);
          const pulse = (t % 1.6) / 1.6;
          halo.setAttribute("r", String((13 + 22 * pulse) * st.fade));
          halo.style.opacity = String(1 - pulse);
        }
        rx += (trx - rx) * 0.08;
        ry += (tryY - ry) * 0.08;
        wrap.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        wrap.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(timer);
      pillsObserver.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="kx-journey kx-arch-wrap kx-on-dark"
      role="img"
      aria-label="Animação: o cliente percorre anúncio, site, lead, IA e venda"
    >
      <div className="kx-arch">
        <svg className="kx-svg" viewBox="0 0 700 620" aria-hidden="true">
          <path className="kx-band" d="M150 600 L150 340 A200 200 0 0 1 550 340 L550 600" />
          <path className="kx-rail" d="M150 600 L150 340 A200 200 0 0 1 550 340 L550 600" />
          <path data-kx-trail="" className="kx-trail" d="M150 600 L150 340 A200 200 0 0 1 550 340 L550 600" strokeDasharray="0 2000" />
          <path data-kx-track="" d="M150 600 L150 340 A200 200 0 0 1 550 340 L550 600" fill="none" stroke="none" />
          <circle data-kx-halo="" className="kx-dot-halo" cx="150" cy="600" r="0" />
          <circle data-kx-dot="" className="kx-dot" cx="150" cy="600" r="0" />
        </svg>

        <span className="kx-pill" data-kx-pill="" data-i="0">
          <b>1</b>Anúncio
        </span>
        <span className="kx-pill" data-kx-pill="" data-i="1">
          <b>2</b>Site
        </span>
        <span className="kx-pill" data-kx-pill="" data-i="2">
          <b>3</b>Lead
        </span>
        <span className="kx-pill" data-kx-pill="" data-i="3">
          <b>4</b>IA no WhatsApp
        </span>
        <span className="kx-pill" data-kx-pill="" data-i="4">
          <b>5</b>Venda
        </span>

        <div className="kx-stage" aria-hidden="true">
          <div className="kx-card" data-kx-card="" data-i="0">
            <div className="kx-row">
              <span className="kx-av">S</span>
              <div>
                <h4>Sua Marca</h4>
                <small>Patrocinado</small>
              </div>
            </div>
            <div className="kx-img" />
            <div className="kx-row">
              <small>Agende sua avaliação</small>
              <span className="kx-cta-mini">Saiba mais</span>
            </div>
          </div>
          <div className="kx-card" data-kx-card="" data-i="1">
            <div className="kx-browser">
              <span />
              <span />
              <span />
            </div>
            <div className="kx-bars">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="kx-site-btn">
              Quero agendar
              <svg className="kx-cursor" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5 3l14 7.5-6.2 1.6L10 18.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div className="kx-card" data-kx-card="" data-i="2">
            <div className="kx-row" style={{ justifyContent: "space-between" }}>
              <h4>Novo lead</h4>
              <span className="kx-tag">agora</span>
            </div>
            <div style={{ marginTop: "0.7em" }}>
              <div className="kx-field">
                <span>Nome</span>
                <strong>Marina S.</strong>
              </div>
              <div className="kx-field">
                <span>Origem</span>
                <strong>Anúncio Instagram</strong>
              </div>
              <div className="kx-field">
                <span>Interesse</span>
                <strong>Avaliação</strong>
              </div>
            </div>
          </div>
          <div className="kx-card" data-kx-card="" data-i="3">
            <div className="kx-row" style={{ justifyContent: "space-between" }}>
              <h4>WhatsApp</h4>
              <span className="kx-tag">IA respondendo</span>
            </div>
            <p className="kx-bub in">Oi! Tem horário amanhã?</p>
            <p className="kx-bub out">Tenho às 10h ou às 15h. Qual fica melhor pra você?</p>
          </div>
          <div className="kx-card kx-center" data-kx-card="" data-i="4">
            <div className="kx-check">
              <svg width="60%" height="60%" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
            <h4>Venda fechada</h4>
            <small style={{ marginTop: "0.3em" }}>Do anúncio ao contrato, tudo rastreado.</small>
          </div>
        </div>
      </div>
    </div>
  );
}
