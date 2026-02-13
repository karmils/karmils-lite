"use client";

import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const content = `
# Karmil Streams  
## A Phase-Oriented Paradigm of Continuous Systems  
### Toward a Unified Architecture of Streams  

---

## Abstract

Karmil Streams is an evolving phase-structural paradigm dedicated to the analysis of continuous dynamic systems. In contrast to spectral, statistical, nonlinear, and chaos-based frameworks, this theory posits that structural stability, transformation, and systemic resilience are governed primarily by phase coherence rather than by amplitude magnitude, energy accumulation, or probabilistic distribution alone.

Continuity is treated not as a secondary artifact of discretized measurement, but as a structural invariant organized through phase topology.

The system remains in structured formation and mathematical refinement.

---

# 1. Historical Motivation

Modern science demonstrates remarkable analytical precision:

- Fourier decomposition  
- stochastic modeling  
- nonlinear dynamics  
- attractor theory  
- chaos modeling  

Yet a structural limitation persists:

Continuous systems are fragmented during reduction.

Karmil Streams emerged from the hypothesis:

Continuity must remain structurally preserved within analysis.

---

# 2. Ontology of Stream

Reality is interpreted not as static objects but as structured continuities — streams.

A stream is organized continuity characterized by internal phase topology.

Classical ontology emphasizes:

- object  
- event  
- state  

Stream ontology emphasizes:

- relational positioning  
- cyclic coherence  
- hierarchical embedding  

This parallels historical transitions:

| From | To |
|------|----|
| Substance | Process |
| Static entity | Dynamic relation |
| Discrete state | Structured continuity |

Phase coherence is proposed as structural invariant.

---

# 3. Phase as Primary Structural Principle

In classical systems, phase is secondary.

In Karmil Streams, phase is ontologically primary.

Stability ≠ maximal energy  
Stability = phase alignment  

Phase expresses:

- synchrony  
- structural tension  
- relational position  
- coherence alignment  

Instability emerges from phase divergence.

---

# 4. Core Phase Tendencies

- **downphase** — centripetal concentration  
- **outphase** — centrifugal expansion  
- **rephase** — restoration of coherence  
- **dephase** — structural misalignment  
- **mega-phase** — integrative equilibrium  

These describe directional structural tendencies.

---

# 5. Structural Parameters

- D_φ — phase density  
- E_str — structural energy  
- phase_str — phase topology  
- K_l — local coherence coefficient  
- V_sw — vortex structural velocity  
- K_eq — equilibrium constant  
- F_ext — external perturbation  

Together they define the internal geometry of a stream.

---

# 6. Mathematical Orientation (Preliminary)

Stream representation:

$$
S(t) = f(E_{str}(t), D_\\varphi(t), \\varphi(t), K_l(t), F_{ext}(t))
$$

Structural stability:

$$
Stability \\approx \\int K_l(t) \\cdot \\cos(\\Delta \\varphi(t)) dt
$$

Coherence functional:

$$
C = \\int \\frac{K_l(t)}{|\\nabla \\varphi(t)|} dt
$$

Coherence increases as $\\Delta \\varphi \\to 0$.

These formulations remain under mathematical refinement.

---

# 7. Unified System of Streams (USS)

Multiplex Stream = Megastream.

No stream exists in isolation.

Principles:

- hierarchical embedding  
- scale invariance  
- cross-stream coherence  
- phase universality  

Local dynamics are expressions of a broader megastream architecture.

---

# 8. Stream Analyzer — Analytical Infrastructure

Stream Analyzer functions as:

- research instrument  
- coherence diagnostic engine  
- modeling laboratory  
- comparative analytical system  

## Developmental Phases

### Early Stage
- single-stream visualization  
- parameter extraction  

### Intermediate Stage
- structural comparison  
- pilot modeling  

### Advanced Modules

**Pilot Analyzer**  
Controlled theoretical validation.

**Corpus Analyzer**  
Large-scale comparative evaluation.

**Analyses Module**
- phase correlation  
- structural deviation  
- transition detection  
- vortex identification  
- stability gradient estimation  

**A/B Mode**
- coherence divergence  
- asymmetry index  
- resilience contrast  

The platform evolves toward research-grade infrastructure.

---

# 9. Comparative Paradigm Analysis

<table>
  <thead>
    <tr>
      <th>Paradigm / Theory</th>
      <th>Key Author(s)</th>
      <th>Structural Integrity</th>
      <th>Phase Depth</th>
      <th>Universality</th>
      <th>Diagnostic Capacity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Spectral Theory</td>
      <td>J. Fourier</td>
      <td>5</td>
      <td>4</td>
      <td>8</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Statistical Models</td>
      <td>Pearson, Fisher</td>
      <td>6</td>
      <td>3</td>
      <td>8</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Nonlinear Dynamics</td>
      <td>Strogatz</td>
      <td>8</td>
      <td>7</td>
      <td>9</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Chaos Theory</td>
      <td>Lorenz</td>
      <td>8</td>
      <td>7</td>
      <td>8</td>
      <td>7</td>
    </tr>
    <tr>
      <td>General Systems Theory</td>
      <td>von Bertalanffy</td>
      <td>7</td>
      <td>5</td>
      <td>9</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Synergetics</td>
      <td>Hermann Haken</td>
      <td>8</td>
      <td>6</td>
      <td>8</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Catastrophe Theory</td>
      <td>René Thom</td>
      <td>7</td>
      <td>6</td>
      <td>7</td>
      <td>6</td>
    </tr>
    <tr>
      <td>Topological Structuralism</td>
      <td>Henri Poincaré</td>
      <td>8</td>
      <td>7</td>
      <td>8</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Music Set Theory</td>
      <td>Allen Forte</td>
      <td>6</td>
      <td>4</td>
      <td>6</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Generative Tonal Theory</td>
      <td>Lerdahl & Jackendoff</td>
      <td>7</td>
      <td>5</td>
      <td>6</td>
      <td>6</td>
    </tr>
    <tr>
      <td>Acoustic Harmonic Theory</td>
      <td>Helmholtz</td>
      <td>7</td>
      <td>6</td>
      <td>7</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Neural Oscillation Models</td>
      <td>Freeman</td>
      <td>7</td>
      <td>7</td>
      <td>8</td>
      <td>8</td>
    </tr>
    <tr>
      <td><strong>Karmil Streams</strong></td>
      <td><strong>Independent Phase Framework</strong></td>
      <td><strong>9</strong></td>
      <td><strong>9</strong></td>
      <td><strong>10</strong></td>
      <td><strong>8–9</strong></td>
    </tr>
  </tbody>
</table>


Universality reflects applicability to any structured continuous system governed by phase relations.

---

# 10. Interdisciplinary Implications

**Medicine**  
Cardiac phase diagnostics; neural coherence mapping; systemic resilience modeling.

**Physics**  
Wave interaction; turbulence topology; phase transition structures.

**Mathematics**  
Phase-invariant topology; integral coherence structures.

**Psychology**  
Cognitive phase transitions; resilience dynamics.

**Social Sciences**  
Collective synchronization; macrostructural transitions.

---

# 11. Origin of Development

The theory was developed through independent structural inquiry outside traditional institutional frameworks.

Its evolution followed cross-disciplinary synthesis rather than narrow specialization, allowing structural coherence to emerge as unifying principle.

---

# 12. Epistemological Position

Karmil Streams does not replace existing paradigms.

It introduces:

Phase coherence as invariant structural diagnostic layer.

The framework is integrative, hierarchical, and process-oriented.

---

# 13. Development Status

Established:

- phase ontology  
- Unified System  
- analytical platform  

Ongoing:

- mathematical formalization  
- algorithmic refinement  
- empirical validation  

The system remains in structured formation.

---

# Conclusion

Karmil Streams proposes:

- a phase-oriented ontology of continuity  
- a unified architecture of streams  
- an analytical infrastructure for coherence diagnostics  

Its central proposition remains:

Continuity is structurally organized by phase coherence.

---

### Version

Karmil Streams — Version 0.1  
In structured formation  
2026
`;

export default function Home() {
  return (
    <main style={{
      maxWidth: "1100px",
      margin: "100px auto",
      padding: "0 40px",
      fontFamily: "Times New Roman, serif",
      fontSize: "20px",
      lineHeight: 1.9,
      color: "#111111",
      background: "#FAFAFA"
    }}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          table: ({ children }) => (
            <table style={{
              margin: "60px auto",
              borderCollapse: "collapse",
              textAlign: "center",
              backgroundColor: "#ffffff",
              minWidth: "800px"
            }}>{children}</table>
          ),
          th: ({ children }) => (
            <th style={{
              border: "1px solid #bbb",
              padding: "14px",
              background: "#f8f8f8"
            }}>{children}</th>
          ),
          td: ({ children }) => (
            <td style={{
              border: "1px solid #ccc",
              padding: "14px"
            }}>{children}</td>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}
