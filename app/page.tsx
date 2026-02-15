"use client";

import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

const content = `
# <div style="text-align:center">Karmil Streams</div>
## <div style="text-align:center">A Phase-Oriented Paradigm of Continuous Systems</div>
### <div style="text-align:center">Toward a Unified Architecture of Streams</div>

---

## Abstract

Karmil Streams is a developing phase-structural paradigm dedicated to the analysis of continuous dynamic systems. In contrast to spectral, statistical, and chaos-based frameworks, the theory proposes that stability, transformation, and systemic resilience are governed primarily by **phase coherence** rather than by amplitude magnitude, energy accumulation, or probabilistic distribution alone.

Continuity is treated not as a by-product of discretized observation, but as a structural invariant organized through phase topology. The framework proposes a unified architecture of streams in which dynamic systems are interpreted as hierarchically embedded phase structures governed by coherence gradients.

The system remains in structured formation and ongoing mathematical refinement, with emphasis on formalization, empirical applicability, and cross-domain generalization.

---

# 1. Historical Motivation and Emergence

Modern science demonstrates exceptional analytical precision in:

- Fourier and spectral decomposition  
- probabilistic and statistical modeling  
- nonlinear simulation and attractor analysis  
- dynamical systems theory  
- chaos modeling and sensitivity diagnostics  

However, a persistent structural limitation remains:

**Continuous systems are frequently fragmented during analytical reduction.**

Discretization, although methodologically necessary, can obscure relational phase structure, suppress coherence gradients, and weaken the interpretative integrity of continuity-based systems. Many paradigms resolve this by treating continuity as an emergent approximation that becomes visible only after aggregation, smoothing, or statistical inference.

Karmil Streams emerged from a different hypothesis:

**Continuity must remain structurally preserved within analysis.**  

Instead of decomposing systems into isolated states, the paradigm attempts to preserve relational coherence across temporal evolution and across embedded levels of structure. This enables examination of systems not merely as sequences of states, but as dynamically organized continuities with internal phase geometry.

The development trajectory has been driven by iterative refinement of:

- a phase-based ontology (stream continuity as primary)  
- a parameter system for measurable coherence (SPS)  
- an analytical infrastructure (Stream Analyzer)  
- corpus-based experimentation (pilots and corpora)  

---

# 2. Ontology of Stream

Reality is interpreted not as a collection of static entities, but as structured continuities — streams.

A **stream** is defined as organized continuity characterized by:

- internal phase topology  
- coherence gradients  
- hierarchical embedding  
- structural tension and resolution dynamics  

This ontology shifts emphasis from static existence to relational continuity. Classical ontology typically emphasizes:

- object  
- event  
- state  

Stream ontology emphasizes:

- relational positioning  
- cyclic coherence  
- embedded structural interdependence  

| From | To |
|------|----|
| Substance | Process |
| Static entity | Dynamic relation |
| Discrete state | Structured continuity |

Phase coherence is proposed as a structural invariant governing stability and transformation. Structural identity arises not from permanence, but from sustained relational alignment.

---

# 3. Why a Phase-Based Architecture

In many established frameworks, phase is treated as a secondary descriptor (often subordinate to amplitude, energy, probability, or state transitions). Karmil Streams inverts that priority:

**Phase is ontologically primary.**

Phase in this paradigm expresses:

- relational position within a cycle  
- synchrony between substructures  
- coherence alignment across embedded levels  
- internal structural tension (and its resolution)  
- transition directionality (toward concentration, dispersion, repair, collapse)  

This yields a core interpretive rule:

Stability ≠ maximal energy  
Stability = phase alignment  

Instability emerges when phase divergence exceeds tolerance thresholds. Structural degradation begins not necessarily with energy loss, but with relational misalignment within the phase field.

---

# 4. Core Phase Tendencies and Regimes

Karmil Streams proposes a set of phase-tendencies (not binary states). Systems may express multiple tendencies simultaneously across hierarchical layers.

- **downphase** — centripetal structural concentration (tendency toward internal consolidation)  
- **outphase** — centrifugal structural expansion (tendency toward surface / dispersion)  
- **rephase** — restoration of coherence (repair and re-alignment)  
- **dephase** — destructive divergence (structural misalignment / fragmentation)  
- **mega-phase** — integrative equilibrium across hierarchical layers (multi-level alignment)  

Interpretively:

- **downphase** often correlates with consolidation, compression, increasing internal coupling.  
- **outphase** often correlates with release, dispersion, boundary activation.  
- **rephase** describes re-organization after perturbation.  
- **dephase** describes coherence rupture and loss of stable relational geometry.  
- **mega-phase** describes a regime in which coherence is maintained across layers and scales.

---

# 5. Stream Parameter System (SPS): Structural Parameters

The internal geometry of a stream is described through phase-structural parameters:

- **D_φ** — phase density (structural concentration of phase relations)  
- **E_str** — structural (stream) energy (global energetic integrity in the stream architecture)  
- **D_str** — structural disfusion parameter (degree of internal structural spread / disfusion)  
- **K_l** — local coherence coefficient (local alignment strength)  
- **V_sw** — vortex structural velocity (vortex / rotational phase-structure activity)  
- **K_eq** — equilibrium constant (stability equilibrium indicator)  
- **F_ext** — external perturbation (external forcing / influence)  

Together they define a measurable phase field of a stream. Their interactions form a structural signature of a dynamic continuity and determine its adaptability to perturbations.

---

# 6. Mathematical Orientation (Preliminary)

The following formulations are **structural approximations** designed for diagnostic and modeling purposes. They remain under progressive refinement and are presented as a coherent mathematical direction rather than as final proofs.

## 6.1 Stream representation

$$
S(t) = f(E_{str}(t), D_\\varphi(t), \\varphi(t), K_l(t), F_{ext}(t))
$$

Where $\\varphi(t)$ represents the phase field (or phase state variable), and $f(\\cdot)$ is a structural mapping.

## 6.2 Stability functional

A coherence-weighted approximation of stability:

$$
Stability \\approx \\int_{t_0}^{t_1} K_l(t) \\cdot \\cos(\\Delta \\varphi(t)) \\, dt
$$

Interpretation:

- $\\Delta\\varphi(t)$ is phase deviation  
- stability increases as $\\Delta\\varphi \\to 0$  
- instability increases as $|\\Delta\\varphi|$ grows and local coherence weakens  

## 6.3 Coherence functional

One possible diagnostic coherence functional:

$$
C = \\int_{t_0}^{t_1} \\frac{K_l(t)}{|\\nabla \\varphi(t)| + \\epsilon} \\, dt
$$

Where $\\epsilon>0$ prevents singularity and keeps the diagnostic stable.

## 6.4 External forcing and response

A simple structural response relation:

$$
\\frac{d}{dt} E_{str}(t) = -\\alpha\\,D_{str}(t) + \\beta\\,K_l(t) - \\gamma\\,|F_{ext}(t)|
$$

This is not a conservation law; it is a structural diagnostic direction that captures:

- disfusion tends to reduce integrity  
- coherence tends to restore integrity  
- external forcing can destabilize depending on magnitude and coupling  

## 6.5 Regime boundary (instability condition)

$$
\\text{Instability occurs when } |\\Delta \\varphi(t)| > \\varphi_{crit} \\;\\; \\text{and} \\;\\; K_l(t) < K_{crit}
$$

---

# 7. Unified System of Streams (USS)

**Multiplex Stream = Megastream.**

No stream exists in isolation. Each stream is a structural layer within a broader continuity architecture. This implies:

- local structures are embedded in higher-order coherence fields  
- stability depends on multi-scale alignment rather than local optimization alone  
- cross-stream correlation is a structural phenomenon, not merely statistical coincidence  

Principles:

- hierarchical embedding  
- scale invariance (structural, not necessarily numeric)  
- cross-stream phase correlation  
- universality of coherence dynamics  

This positions the Unified System of Streams (USS) as a conceptual scaffold for interpreting interacting continuous systems across domains.

---

# 8. Stream Analyzer: From Early Goals to Current Infrastructure

Stream Analyzer is an analytical infrastructure for phase-based diagnostics and comparative stream research.

## 8.1 Early goals
- single-stream visualization  
- parameter extraction  
- coherence mapping  
- exploratory regime detection  

## 8.2 Current direction (research-grade)
The platform evolves toward an interdisciplinary diagnostic environment based on SPS:

- **Pilot Analyzer** — controlled theoretical validation on selected pilot sets  
- **Corpus Analyzer** — large-scale comparative stream evaluation across corpora  
- **Analyses Module** — phase correlation, deviation detection, transition mapping  
- **A/B Comparative Mode** — dual-stream diagnostics: divergence, asymmetry, resilience contrast  

The development trajectory reflects a shift:

from prototype visualization → to diagnostic architecture → to corpus-based scientific tooling.

---

# 9. Comparative Paradigm Analysis (Primary Table)

**Scale definition (0–10):**

- 0–3: weak / indirect capability  
- 4–6: moderate capability under constraints  
- 7–8: strong capability in-domain  
- 9–10: strong structural capability across domains or in core principle  

| Paradigm / Theory | Key Author(s) | Structural Integrity | Phase Depth | Universality | Diagnostic Capacity |
|-------------------|---------------|---------------------:|------------:|------------:|--------------------:|
| Spectral Theory | J. Fourier | 5 | 4 | 8 | 7 |
| Statistical Modeling | Pearson; Fisher | 6 | 3 | 8 | 8 |
| Information Theory | C. Shannon | 6 | 3 | 10 | 8 |
| Control Theory | N. Wiener | 8 | 5 | 9 | 9 |
| Dynamical Systems | H. Poincaré | 9 | 7 | 9 | 8 |
| Nonlinear Dynamics | S. Strogatz | 8 | 7 | 9 | 8 |
| Chaos Theory | E. Lorenz | 8 | 7 | 8 | 7 |
| General Systems Theory | L. von Bertalanffy | 7 | 5 | 9 | 7 |
| Synergetics | H. Haken | 8 | 6 | 8 | 7 |
| Catastrophe Theory | R. Thom | 7 | 6 | 7 | 6 |
| Cybernetics | W. R. Ashby | 7 | 5 | 8 | 7 |
| Network Science | A.-L. Barabási | 7 | 5 | 9 | 7 |
| Complex Adaptive Systems | J. H. Holland | 7 | 6 | 9 | 7 |
| Neural Oscillation Models | W. Freeman | 7 | 7 | 8 | 8 |
| Music Set Theory | A. Forte | 6 | 4 | 6 | 5 |
| Schenkerian Analysis | H. Schenker | 8 | 6 | 5 | 7 |
| Transformational Theory | D. Lewin | 8 | 7 | 6 | 7 |
| Generative Tonal Theory | Lerdahl; Jackendoff | 7 | 5 | 6 | 6 |
| Spectral Music | Grisey; Murail | 7 | 6 | 5 | 6 |
| **Karmil Streams** | **Independent Phase Framework** | **9–10** | **9–10** | **10** | **9–10** |

---

## 9.1 What these scores mean (academic rationale)

### Structural Integrity
Measures how well a paradigm preserves continuity without reducing it to isolated states, discrete tokens, or purely statistical aggregates.

- Spectral theory is powerful but fragments signals into components; continuity is reconstructed, not preserved.  
- Dynamical systems better preserve relational evolution, hence higher integrity.  
- Karmil Streams treats continuity as primary and explicitly tracks coherence gradients, hence the highest score range.

### Phase Depth
Assesses whether phase is a structural driver or merely an auxiliary descriptor.

- Many paradigms include phase but do not treat it as organizing invariant.  
- Neural oscillation models and nonlinear dynamics engage phase more directly.  
- Karmil Streams places phase coherence at the core, therefore maximal depth.

### Universality
Evaluates cross-domain structural applicability.

- Information theory is broadly applicable but often abstracts away structural continuity.  
- Systems theory is conceptually universal but can become non-diagnostic without measurable invariants.  
- Karmil Streams aims to preserve both universality and diagnostic structure via SPS and analyzer tooling.

### Diagnostic Capacity
Reflects the ability to detect transitions, coherence disruptions, and regime boundaries.

- Control theory and oscillation models are strong diagnostically but often in constrained domains.  
- Karmil Streams attempts to generalize diagnostics by formalizing coherence measures and A/B comparisons across pilots and corpora.

---

# 10. Correspondence with Existing Paradigms

Karmil Streams does not seek to replace classical theories. Instead it proposes a coherence-centered structural layer that can interface with them:

- with spectral theory: phase coherence can be tracked over spectral decomposition outputs  
- with nonlinear dynamics: coherence regimes can be mapped to attractor transitions  
- with statistical modeling: coherence can define structured features beyond distributions  
- with systems theory: coherence becomes the measurable invariant that strengthens system descriptions  
- with music theories: relational structure is interpreted as stream coherence across time  

---

# 11. Interdisciplinary Potential

The paradigm is designed as a universal continuity-language for systems whose behavior depends on coherence and phase relation.

**Medicine**
- cardiac phase diagnostics and rhythm stability profiling  
- neural coherence mapping and transition detection  
- resilience metrics for systemic regulation  

**Physics**
- wave interference and phase transition topology  
- turbulence coherence analysis and vortex regimes  
- non-equilibrium structural stability assessment  

**Mathematics**
- phase-invariant topology and continuity-preserving representations  
- coherence functionals and integral structural diagnostics  
- multi-scale embedding models  

**Psychology / Psychoanalysis**
- cognitive phase transition modeling (stress → collapse → repair)  
- resilience and coherence dynamics in behavioral streams  
- structured interpretation of cyclical regulation patterns  

**Astrophysics / Astronomy**
- coherence in cyclic astronomical signals and dynamical regimes  
- structural diagnostics of multi-periodic systems  
- regime shift detection in long-duration observational streams  

**Social Sciences**
- macro-synchronization and crisis-phase modeling  
- structural divergence detection across collective processes  

---

# 12. Development Status (Formative Stage)

Karmil Streams is in a formative and evolving stage.

Established:
- phase ontology and core phase tendencies  
- SPS parameter architecture  
- initial analyzer infrastructure  
- pilot/corpus direction  

Ongoing:
- mathematical formalization  
- algorithmic refinement  
- empirical validation and corpus expansion  
- publication and peer-review pathway  

---

# 13. Unified System of Streams (USS): Universality Claim

The Unified System of Streams (USS) expresses the claim that:

- local dynamic systems are embedded in higher-order streams  
- coherence is the structural link across scales  
- universality follows from the fact that many domains share continuity + phase relations  

This universality is not presented as completed proof, but as a structured research program supported by a diagnostic platform and a growing experimental corpus.

---

# Conclusion

Karmil Streams proposes a phase-oriented ontology of continuity, a unified architecture of structured streams, and an analytical infrastructure for coherence diagnostics.

Its central claim remains:

**Continuity is structurally organized by phase coherence.**

The theory remains under mathematical refinement and empirical expansion.
`;

export default function Home() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh", padding: "80px 0" }}>
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "90px 90px",
          background: "#ffffff",
          fontFamily: "Times New Roman, serif",
          fontSize: "22px",
          lineHeight: 1.95,
          color: "#031058",
          border: "2px double #031058"
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={{
            h1: ({ children }) => (
              <h1 style={{ textAlign: "center", margin: "0 0 10px 0" }}>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 style={{ textAlign: "center", margin: "0 0 8px 0", fontWeight: 600 }}>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 style={{ textAlign: "center", margin: "0 0 26px 0", fontWeight: 500 }}>{children}</h3>
            ),

            table: ({ children }) => (
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  margin: "70px 0",
                  border: "1.25px solid #031058"
                }}
              >
                {children}
              </table>
            ),
            thead: ({ children }) => (
              <thead style={{ background: "#e9edf5" }}>{children}</thead>
            ),
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children, ...props }) => {
              // Zebra striping: stable even/odd based on row index using DOM order hint is unreliable.
              // We do it with CSS below, but keep fallback here minimal.
              return <tr {...props}>{children}</tr>;
            },
            th: ({ children }) => (
              <th
                style={{
                  border: "1px solid #031058",
                  padding: "14px 12px",
                  fontWeight: 700,
                  textAlign: "center",
                  verticalAlign: "top"
                }}
              >
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td
                style={{
                  border: "1px solid #c9d2e6",
                  padding: "14px 12px",
                  textAlign: "center",
                  verticalAlign: "top"
                }}
              >
                {children}
              </td>
            )
          }}
        >
          {content}
        </ReactMarkdown>
      </main>

      <style jsx global>{`
        .katex {
          color: #031058;
        }
        table tbody tr:nth-child(odd) td {
          background: #f7f9fc;
        }
        table tbody tr:nth-child(even) td {
          background: #ffffff;
        }
      `}</style>
    </div>
  );
}
