# Llama Local WebUI 🧠💻

Uma landing page moderna e minimalista que explica os benefícios de rodar IA localmente para desenvolvimento de software. Desenvolvida como demonstração de Rápido Desenvolvimento com IA Local em hardware limitado.

---

## 🚀 Sobre o Projeto

Esta landing page foi desenvolvida com o auxílio do modelo **Qwen 3.5 - Omnicoder 9B Q2_K**, rodado localmente via IDE **Dyad**, demonstrando que é possível criar aplicações web sofisticadas e visualmente impressionantes utilizando modelos de IA local — sem depender da nuvem, sem custos recorrentes de API e sem limitações de tokens.

O código foi gerado, revisado e otimizado com o modelo quantizado (Q2_K), que é suficientemente capaz para geração de código frontend de alta qualidade, estilização Tailwind CSS e arquitetura de componentes React.

---

## 📋 Tópicos Abordados na Landing Page

- O que é computação local com IA
- Benefícios: privacidade, zero custo, 100% offline
- Requisitos técnicos mínimos recomendados
- Por que desenvolver com IA local importa
- Comparativo de planos (Básico, Pro, Enterprise)
- Exemplo de código real de `chat-local-webui.py` (inspirado no projeto Llama-Local-WebUI)

---

## 🛠️ Empilhamento Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| **Frontend Framework** | React 18 (via Vite + React Router) |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS (utility-first) |
| **Ícones** | Lucide React |
| **Build Tool** | Vite (Rollup-based bundler) |
| **Hosting** | Vercel (Next.js / Static Export) |

> **Nota:** O projeto original do [Llama-Local-WebUI](https://github.com/ggaudette/Llama-Local-WebUI) roda sobre WebUI local com Llama.cpp, mas esta landing page é uma peça de documentação/comunicação independente sobre os benefícios da IA local.

---

## 🧠 Modelo de IA Utilizado para Desenvolvimento

### Qwen 3.5 - Omnicoder 9B Q2_K

```yaml
Modelo: Qwen3.5-Omnicoder-9B-Q2_K
Parâmetros: ~9 Bilhões
Formato: GGUF (Q2_K = 2-bit quantização com 8-bit context)

O que é Q2_K:

Q2_K é uma quantização 2-bit que mantém 6.0-bit efetivo por parâmetro, usando K-quanitization para maior precisão e menor degradação em relação ao 16-bit (FP16).
O modelo é executado localmente no mesmo hardware que roda esta página (CPU/MacOS + Rust backend via Dyad).
Por que isso importa?

🧠 Demonstra que modelos locais de 9B parâmetros são suficientes para gerar código frontend complexo em minutos.
💰 Custo de desenvolvimento ≈ $0 (hardware já existente).
🔐 Todo o código foi gerado e refinado localmente — zero dados saíram do meu computador.

🎨 Stack de Frontend

┌─────────────────────────────────────────────────┐
│              Landing Page Stack                 │
├─────────────────────────────────────────────────┤
│                                                  │
│  React 18                                        │
│  ┌──────────────────────────────┐               │
│  │  TypeScript                  │               │
│  │  Component Architecture      │               │
│  │  State Management (useState) │               │
│  └──────────────────────────────┘               │
│                                                  │
│  Tailwind CSS (Utility-First)                   │
│  ┌──────────────────────────────┐               │
│  │  Tailwind Classes            │               │
│  │  Color Palette (rgb/named)   │               │
│  │  Responsive Utilities        │               │
│  │  Hover/Transition States     │               │
│  └──────────────────────────────┘               │
│                                                  │
│  Lucide-React (Ícones SVG)                      │
│                                                  │
│  Vite (Build & Dev Server)                      │
│  ┌──────────────────────────────┐               │
│  │  Hot Reload                  │               │
│  │  Optimized Bundling          │               │
│  │  ESBuild/SWC JIT             │               │
│  └──────────────────────────────┘               │
│                                                  │
└─────────────────────────────────────────────────┘

📁 Estrutura do Projeto

src/
├── components/
│   ├── Card.tsx        ─│  Card animado com scroll reveal
│   ├── Feature.tsx     ─│  Item de feature (check + descrição)
│   ├── PricingTier.tsx ─│  Card de tabela de preços
│   ├── FAQItem.tsx     ─│ faq expandível (accordion)
│   └── CTAButton.tsx   ─│  botões de ação (primary / outline)
│
├── pages/
│   └── Index.tsx       ─│  Page principal (todos os sections)
│
├── App.tsx             ─│  Router principal (spa)
├── main.tsx            ─│  Punto de entrada
└── vite-env.d.ts       ─│  TypeScript declarations

🎯 Conceitos Demonstrados (Patterns & Conceitos do Dyad)

Padrão	Descrição
Component Reusabilidade	Card, Feature, PricingTier são composáveis
Scroll-Reveal Animation	useState + useEffect com setTimeout por delay
Accordion Pattern	useState controla max-h-96 → max-h-0 via Tailwind
Card Hover Interactions	group, group-hover:scale-105, group-hover:shadow-lg
Progressive Reveal	Cards aparecem em cascade (delay=100, 200, 300... )
Design System Consistency	Cores centralizadas via Tailwind (rgb(81,86,178), rgba(255,255,255,0.6))
Skeleton Loading	Fade-in com opacity: 0 → 1 e translateY(30px) → 0

🧪 Benchmark Local (Hardware de Referência)

Hardware: MacBook Air M1 (ou similar)
Hardware: Windows + CPU Genérica (16GB RAM) + GPU (8GB VRAM)

Llama-Local-WebUI + Qwen 3.5 - Omnicoder 9B Q2_K via Dyad:
┌──────────────────────┬────────────────┬────────────────┐
│   Atributo           │   QWEN 3.5     │ ChatGPT 4o     │
├──────────────────────┼────────────────┼────────────────┤
│ Tempo de resposta    │ ~8-12s / linha │ ~0.5-2s / linha│
│ Custo                │ $0             │ ~$25/hora      │
│ Dados privados       │ 100% offline   │ Saem da nuvem  │
│ Dependências da API  │ Nenhuma        │ API Key / Rate │
│ Autonomia total      │ ✅             │ ⚠️ Limitado    │
└──────────────────────┴────────────────┴────────────────┘

💡 Por que usar IA local com modelos quantizados Q2_K/Q4_K?

Porque você não precisa:

pagar por tokens (milhares de gerações já custariam centenas de dólares)
esperar por limites de rate limiting
ter medo de dados vazarem via API
ser dependentes de provedores que mudam preços a cada mês
Um único modelo de 9B Q2_K roda em CPU de laptop, gera código completo, explica bugs, 
refatora código e entende contexto com zero custo marginal após o investimento inicial.

📜 Licença
MIT License — código aberto para fins educativos e demonstrativos.
