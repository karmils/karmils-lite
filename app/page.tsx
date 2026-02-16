"use client";

import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

import "./page.css";

const content = `

# Karmil Streams
## A Phase-Oriented Paradigm of Continuous Systems
### Toward a Unified Architecture of Streams

---

## Abstract

Karmil Streams is a developing phase-structural paradigm dedicated to the analysis of continuous dynamic systems. In contrast to spectral, statistical, and chaos-based frameworks, the theory proposes that structural stability, transformation, and systemic resilience are governed primarily by **phase coherence** rather than by amplitude magnitude, energy accumulation, or probabilistic distribution alone.

Continuity is treated as a structural invariant organized through phase topology. Systems are interpreted as hierarchically embedded streams governed by coherence gradients across multiple scales.

The paradigm remains in structured formation and ongoing mathematical refinement.

---

# 1. Historical Genesis and Theoretical Emergence

Modern scientific frameworks provide powerful analytical instruments:

- Fourier spectral decomposition  
- probabilistic inference  
- nonlinear dynamical modeling  
- attractor and chaos analysis  
- statistical signal processing  

However, a recurring structural issue persists:

**Continuity becomes fragmented under reduction.**

Many dominant paradigms reconstruct continuity from discrete fragments.  
Karmil Streams begins from the opposite direction:

> Continuity must be structurally preserved prior to decomposition.

The development trajectory progressed through:

1. Conceptual phase ontology  
2. Formalization of phase tendencies  
3. Development of structural parameter system (SPS)  
4. Construction of Stream Analyzer  
5. Comparative corpus experimentation  

---

# 2. Ontology of Stream

Reality is interpreted not as static entities but as structured continuities — streams.

A stream is defined as organized continuity characterized by:

- internal phase topology  
- coherence gradients  
- hierarchical embedding  
- structural tension dynamics  

Classical ontology emphasizes:

- object  
- event  
- state  

Stream ontology emphasizes:

- relational positioning  
- cyclic coherence  
- structural interdependence  

| From | To |
|------|----|
| Substance | Process |
| Static entity | Dynamic relation |
| Discrete state | Structured continuity |

Structural identity arises from sustained phase alignment.

---

# 3. Phase as Primary Structural Principle

In conventional models, phase is secondary.

In Karmil Streams:

**Phase is ontologically primary.**

Stability ≠ maximal energy  
Stability = phase alignment  

Phase encodes:

- synchrony  
- structural tension  
- relational positioning  
- coherence depth  

Instability begins with phase divergence.

---

# 4. Core Phase Tendencies

- **downphase** — centripetal concentration  
- **outphase** — centrifugal expansion  
- **rephase** — coherence restoration  
- **diphase** — structural divergence  
- **megaphase** — multi-layer equilibrium  

These tendencies represent only a partial subset of the broader phase-state architecture. The list provided here is not exhaustive; it illustrates selected structural directions within the phase field rather than the complete taxonomy of phase states.
---

# 5. Structural Parameter System (SPS)

Core parameters:

- **D_φ** — phase density  
- **E_str** — stream energy  
- **D_str** — structural disfusion  
- **K_l** — local coherence coefficient  
- **V_sw** — vortex structural velocity  
- **K_eq** — equilibrium constant  
- **F_ext** — external perturbation  

They define the measurable phase-field geometry of a stream.

---

# 6. Mathematical Orientation

## 6.1 Stream Representation

$$
S(t) = f(E_{str}(t), D_\\varphi(t), \\varphi(t), K_l(t), F_{ext}(t))
$$

## 6.2 Stability Functional

$$
Stability \\approx \\int_{t_0}^{t_1} K_l(t) \\cdot \\cos(\\Delta \\varphi(t)) \\, dt
$$

## 6.3 Coherence Functional

$$
C = \\int_{t_0}^{t_1} \\frac{K_l(t)}{|\\nabla \\varphi(t)| + \\epsilon} \\, dt
$$

## 6.4 Structural Energy Evolution

$$
\\frac{d}{dt} E_{str}(t) = -\\alpha D_{str}(t) + \\beta K_l(t) - \\gamma |F_{ext}(t)|
$$

## 6.5 Instability Condition

$$
|\\Delta \\varphi(t)| > \\varphi_{crit} \\quad \\text{and} \\quad K_l(t) < K_{crit}
$$

These expressions are structural approximations under refinement.

---

# 7. Unified System of Streams (USS)

Multiplex Stream = Megastream.

No stream exists in isolation.  
Each stream is embedded within higher-order streams.

Principles:

- hierarchical embedding  
- scale coherence  
- cross-stream correlation  
- structural universality  

USS proposes coherence as a cross-domain invariant.

---

# 8. Stream Analyzer

An analytical infrastructure for phase-based diagnostics.

Modules:

- Pilot Analyzer  
- Corpus Analyzer  
- Analytical Regime Detection  
- A/B Comparative Diagnostics  

Transition:

Prototype → Diagnostic Engine → Corpus-Based Research Platform

---

# 9. Comparative Paradigm Analysis

**Scale (0–10)**  
0–3: weak  
4–6: moderate  
7–8: strong in-domain  
9–10: structurally strong across domains  

| Theory | Author | Structural | Phase | Universal | Diagnostic |
|--------|--------|-----------:|------:|----------:|-----------:|
| Spectral Theory | Fourier | 9 | 6 | 9 | 9 |
| Statistical Models | Pearson | 7 | 4 | 9 | 9 |
| Information Theory | Shannon | 9 | 4 | 10 | 9 |
| Control Theory | Wiener | 9 | 6 | 9 | 10 |
| Dynamical Systems | Poincaré | 10 | 8 | 9 | 9 |
| Nonlinear Dynamics | Strogatz | 9 | 9 | 9 | 9 |
| Chaos Theory | Lorenz | 8 | 8 | 8 | 8 |
| Systems Theory | von Bertalanffy | 7 | 6 | 9 | 7 |
| Synergetics | Haken | 8 | 8 | 8 | 7 |
| Catastrophe Theory | Thom | 8 | 8 | 7 | 7 |
| Cybernetics | Ashby | 7 | 6 | 8 | 8 |
| Network Science | Barabási | 7 | 6 | 9 | 8 |
| Neural Oscillation | Freeman | 7 | 9 | 8 | 9 |
| Music Set Theory | Forte | 6 | 4 | 6 | 6 |
| Schenkerian | Schenker | 8 | 6 | 5 | 7 |
| Transformational | Lewin | 8 | 7 | 6 | 7 |
| Generative Tonal | Lerdahl | 7 | 5 | 6 | 6 |
| Spectral Music | Grisey | 7 | 6 | 5 | 6 |
| Karmil Streams | Independent | 7–8 | 8–9 | 7–8 | 7–8 |


---

## 9.1 Academic Justification of Scores

**Structural Integrity**  
Measures continuity preservation.  
Karmil Streams treats continuity as primary invariant.

**Phase Depth**  
Assesses whether phase is structural driver.  
Here phase coherence is central organizing principle.

**Universality**  
Cross-domain applicability.  
Streams operate wherever continuity + phase relations exist.

**Diagnostic Capacity**  
Ability to detect regime transitions and coherence ruptures.

---

# 10. Interdisciplinary Implications

## Medicine
- cardiac rhythm coherence diagnostics  
- neural oscillation mapping  
- systemic resilience modeling  

## Physics
- turbulence phase topology  
- wave interference coherence  
- non-equilibrium regime detection  

## Mathematics
- phase-invariant topology  
- coherence functional theory  
- multi-scale embeddings  

## Psychology / Psychoanalysis
- cognitive regime transitions  
- structural coherence loss and repair  

## Astrophysics / Astronomy
- cyclic stellar dynamics  
- multi-periodic coherence diagnostics  

## Social Sciences
- crisis-phase modeling  
- macro-synchronization detection  

---

# 11. Development Status

Established:

- phase ontology  
- parameter architecture  
- analyzer infrastructure  

Ongoing:

- mathematical formalization  
- algorithmic validation  
- empirical corpus expansion  

The paradigm remains in formative scientific development.

---

# Conclusion

Karmil Streams proposes:

- phase-oriented ontology  
- unified structural stream architecture  
- coherence-based diagnostics  

Continuity is structurally organized by phase coherence.

The framework remains under mathematical refinement and empirical expansion.

---

## Publication Information

**Title:**  
*Karmil Streams — A Phase-Oriented Paradigm of Continuous Systems*

**Author:**  
Ferhat Karmil — Independent Researcher

**Year:**  
2025-2026

**Status:**  
In structured theoretical formation and ongoing mathematical refinement.

**Research Domain:**  
Continuity Theory · Phase Systems · Structural Dynamics · Coherence Diagnostics

**Institutional Affiliation:**  
Independent Research Initiative

**Correspondence:**  
https://www.karmils.com

---

## Citation

Karmil Streams. (2026). A Phase-Oriented Paradigm of Continuous Systems. Independent Phase Framework. Retrieved from https://www.karmils.com

---

## Declaration

Suggested refinement:

This work presents an evolving theoretical architecture.
The formulations remain subject to mathematical formalization, algorithmic validation, and interdisciplinary scholarly evaluation.
The Unified System of Streams (USS) is proposed as a structured research program rather than a completed formal theory.

---

© 2026 Karmil Streams       
All rights reserved.

`;

export default function Home() {
  return (
    <div className="page-wrapper">
      <main className="page-container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </main>
    </div>
  );
}
