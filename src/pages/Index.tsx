import React, { useState, useEffect } from 'react'
import {
  Terminal,
  Zap,
  Shield,
  Lock,
  Cpu,
  Smartphone,
  Globe,
  Users,
  Database,
  Rocket,
  Download,
  Code,
  Clock,
  CheckCircle2,
  XCircle,
  Server,
  WifiOff,
  ArrowRight,
  Star,
  Github,
  ExternalLink,
  BrainCircuit,
  Layers,
  Box,
  ChevronRight,
  Play
} from 'lucide-react'

// =========================
// COMPONENTES
// =========================

const Card = ({ icon: Icon, title, description, delay = 0 }: { icon: React.ElementType; title: string; description: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`group relative p-6 md:p-8 bg-[rgb(18,18,28)] border border-[rgb(35,35,52)] rounded-2xl hover:border-[rgb(81,86,178)]/40 transition-all duration-700 ease-out transform hover:translate-y-[-4px] hover:shadow-[0_24px_64px_-16px_rgba(81,86,178,0.15)]`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(30px)', opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-[rgb(81,86,178)]/10 to-transparent group-hover:from-[rgb(81,86,178)]/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-[rgb(81,86,178)]" strokeWidth={1.5} />
        </div>
        <h3 className="mb-2 text-base md:text-lg font-semibold text-white">{title}</h3>
        <p className="text-[rgba(255,255,255,0.7)] text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const Feature = ({ title, description }: { title: string; description: string }) => (
  <div className="space-y-4 p-6 bg-[rgb(18,18,28)] border border-[rgb(35,35,52)] rounded-xl hover:border-[rgb(81,86,178)]/30 transition-all duration-500 group hover:bg-[rgb(28,28,42)]">
    <h4 className="flex items-center gap-2 mb-2 text-base font-semibold text-white group-hover:text-[rgb(81,86,178)] transition-colors duration-300">
      <CheckCircle2 className="h-5 w-5 text-[rgb(81,86,178)] group-hover:scale-110 transition-transform duration-300" size={18} />
      {title}
    </h4>
    <p className="text-[rgba(255,255,255,0.65)] text-sm leading-relaxed">{description}</p>
  </div>
)

const PricingTier = ({ name, price, description, features, recommended = false, ctaText = "Comece agora" }: { name: string; price: string; description: string; features: string[]; recommended?: boolean; ctaText?: string }) => (
  <div className={`relative ${recommended ? 'border-[rgb(81,86,178)] ring-1 ring-[rgb(81,86,178)]/50' : 'border-[rgb(35,35,52)]'} p-6 md:p-8 rounded-2xl bg-[rgb(12,12,20)]/50 backdrop-blur-sm transition-all duration-500 hover:border-[rgb(81,86,178)]/40 group`}>
    {recommended && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[rgb(81,86,178)]/10 text-[rgb(81,86,178)] text-xs font-semibold uppercase tracking-wider border border-[rgb(81,86,178)]/30">
        Mais popular
      </div>
    )}
    <div className="space-y-3 mb-6">
      <h4 className="text-lg font-semibold text-white">{name}</h4>
      <p className="text-[rgba(255,255,255,0.55)] text-sm">{description}</p>
      <p className="text-3xl font-bold text-white">{price}</p>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, i) => {
        const isFeature = i >= 3
        const isRecommendation = recommended
        return (
          <li key={i} className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.8)]">
            <div className={`mt-0.5 shrink-0`}>
              {isFeature && isRecommendation ? (
                <CheckCircle2 className="h-4 w-4 text-[rgba(81,131,226,0.5)] mt-0.5" />
              ) : isFeature ? (
                <div className="mt-0.5 h-4 w-4 rounded-full border-2 border-[rgba(81,131,226,0.2)] mt-0.5" />
              ) : (
                <CheckCircle2 className="h-4 w-4 text-[rgb(34,197,94)] mt-0.5" />
              )}
            </div>
            {feature}
          </li>
        )
      })}
    </ul>
    <button className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${recommended ? 'bg-[rgb(81,86,178)] hover:bg-[rgb(81,86,178)]/90 text-white' : 'border border-[rgb(81,86,178)]/50 hover:border-[rgb(81,86,178)] text-white'}`}>
      {ctaText}
    </button>
  </div>
)

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[rgb(35,35,52)]">
      <button
        className="w-full py-4 px-6 flex items-center justify-between text-left group hover:bg-[rgb(12,12,20)]/30 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium text-white group-hover:text-[rgb(81,86,178)] transition-colors duration-200">{question}</span>
        <ChevronRight className={`h-5 w-5 text-[rgba(255,255,255,0.4)] transition-transform duration-300 ${isOpen ? 'rotate-90 text-[rgb(81,86,178)]' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="p-6 pt-0 text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

const CTAButton = ({ children, href, variant = 'primary' }: { children: React.ReactNode; href?: string; variant?: 'primary' | 'outline' }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
      variant === 'primary'
        ? 'bg-[rgb(81,86,178)] hover:bg-[rgb(81,86,178)]/90 text-white shadow-[0_0_24px_rgba(81,86,178,0.25)] hover:shadow-[0_0_32px_rgba(81,86,178,0.35)]'
        : 'border border-[rgb(81,86,178)]/50 hover:border-[rgb(81,86,178)] text-white hover:bg-[rgb(81,86,178)]/5'
    }`}
  >
    {children}
  </a>
)

// =========================
// PRINCIPAL
// =========================

export default function Index() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as Window
      setScrolled(target.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[rgb(12,12,20)] font-sans antialiased selection:bg-[rgb(124,58,237)]/40 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-96 md:-right-20 w-[1200px] h-[1200px] bg-[rgb(81,86,178)]/5 blur-[120px] rounded-full" style={{ animation: 'pulse 8s ease-in-out infinite' }} />
          <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-[rgb(76,179,242)]/4 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgb(20,20,35)] border border-[rgb(52,52,82)] text-xs font-medium text-[rgba(255,255,255,0.6)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(81,86,178)] animate-pulse" />
            A revolução da IA que está chegando para você
          </div>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Desenvolva software com
            <span className="block mt-2 bg-gradient-to-r from-[rgb(124,58,237)] via-[rgb(81,86,178)] to-[rgb(48,167,225)] bg-clip-text text-transparent">
              IA Local
            </span>
          </h1>
          <p className="mb-10 text-lg md:text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto leading-relaxed">
            Experimente a nova experiência de desenvolvimento. Assista ao vídeo abaixo com um demonstrativo e mais detalhes.
          </p>
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-video bg-[rgb(18,18,28)] border border-[rgb(52,52,82)] rounded-2xl overflow-hidden group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1920&auto=format&fit=crop&q=80" alt="Code editor com interface de IA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,20)] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[rgb(81,86,178)]/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                  <Play className="h-6 w-6 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">🎥 Demos dos exemplos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-[rgba(255,255,255,0.3)] flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[rgba(255,255,255,0.5)] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* PRINCIPAIS BENEFÍCIOS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[rgb(124,58,237)]/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">O que você precisa saber sobre<br className="hidden md:block" /> desenvolvimento com IA local</h2>
            <p className="text-[rgba(255,255,255,0.6)] max-w-xl mx-auto text-base md:text-lg">
              Uma introdução aos principais benefícios de rodar modelos de IA no seu próprio computador
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card icon={Lock} title="Privacidade total" description="Nenhum dado sai do seu computador. Seus códigos, commits e dados sensíveis permanecem 100% privados, sem nuvem nem servidores remotos." delay={100} />
            <Card icon={Shield} title="Zero custo" description="Use o que já tem na sua máquina. Sem assinaturas mensais, sem limites de crédito. Tudo o que já foi pago com hardware de desenvolvimento." delay={200} />
            <Card icon={Globe} title="100% offline" description="Trabalhe sem internet. Em viagens, em áreas remotas ou quando a conexão cai — o seu assistente programador continua funcionando." delay={300} />
            <Card icon={Cpu} title="Sem limitações" description="Gere ou edite código de qualquer tamanho. Arquiteturas completas, milhares de linhas, nenhuma restrição de tokens ou contexto pago." delay={400} />
            <Card icon={Database} title="Compartilhamento seguro" description="Construa e envie modelos de ML de todos os tamanhos — não há limites de arquivo para treinar seu próprio modelo de linguagem." delay={500} />
            <Card icon={Rocket} title="Inteligência premium" description="Modelos maiores com 8 GB de RAM podem ser rodados localmente em Windows ou macOS, oferecendo qualidade comparável ao nível empresarial." delay={600} />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DETALHES */}
      <section className="px-6 md:px-12 lg:px-20 py-24 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">Detalhes importantes</h2>
            <p className="text-[rgba(255,255,255,0.6)] max-w-xl">
              O que você precisa saber sobre computação local e como isso muda o jogo para desenvolvedores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Feature title="O que é computação local?" description="Executar tarefas de IA dentro do seu próprio computador, sem depender de serviços em nuvem. Isso significa que toda a inteligência artificial roda diretamente no seu hardware." />
              <Feature title="Por que isso é revolucionário?" description="A primeira vez que o desenvolvimento de software é tão acessível, potente e privado como uma máquina local." />
              <Feature title="O que você precisa?" description="Um computador moderno — Windows, Linux ou macOS — e o software certo. Não é mágica, é engenharia." />
              <Feature title="Quem pode fazer isso?" description="Qualquer pessoa que use um computador para programar. Programadores experientes, alunos, profissionais de TI, estudantes de ciência da computação e até leigos que querem aprender." />
            </div>
            <div className="space-y-2">
              <Feature title="Não é apenas uma ferramenta" description="É o desenvolvimento de um novo ambiente onde você tem controle total, sem depender de provedores externos ou ter que pagar por uso de recursos." />
              <Feature title="Privacidade e segurança" description="Seu código nunca sai do seu computador. Sem rastreamento, sem coleta de dados, sem APIs que podem mudar de dia para dia." />
              <Feature title="Custo zero após o investimento inicial" description="Se o computador já existe — que pode ser usado para muitas outras coisas — o custo marginal do uso da IA é zero." />
              <Feature title="A comunidade está crescendo" description="Quase 400 mil pessoas já estão usando soluções locais de IA para desenvolvimento, e o número cresce todos os dias." />
            </div>
          </div>
        </div>
      </section>

      {/* REQUISITOS TÉCNICOS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 relative bg-[rgb(12,12,20)]/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(34,197,94)]/10 text-[rgb(34,197,94)] text-xs font-medium mb-4 border border-[rgb(34,197,94)]/20">
              <CheckCircle2 className="h-4 w-4" />
              Requisitos mínimos recomendados
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">O que você precisa para começar</h2>
            <p className="text-[rgba(255,255,255,0.6)] max-w-xl mx-auto text-base md:text-lg">
              Hardware básico que provavelmente você já tem em casa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[rgb(18,18,28)] border border-[rgb(35,35,52)] rounded-2xl hover:border-[rgb(76,179,242)]/40 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-[rgb(48,167,225)]/10 flex items-center justify-center mb-4 group-hover:bg-[rgb(48,167,225)]/20 transition-colors duration-300">
                <Zap className="h-6 w-6 text-[rgb(48,167,225)]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">RAM: 8 GB</h4>
              <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
                Memória de trabalho essencial. Idealmente mais para modelos maiores e multitarefa.
              </p>
            </div>
            <div className="p-6 bg-[rgb(18,18,28)] border border-[rgb(35,35,52)] rounded-2xl hover:border-[rgb(244,114,182)]/40 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-[rgb(244,114,182)]/10 flex items-center justify-center mb-4 group-hover:bg-[rgb(244,114,182)]/20 transition-colors duration-300">
                <Server className="h-6 w-6 text-[rgb(244,114,182)]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Armazenamento: 10 GB</h4>
              <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
                Espaço para instalar o software e armazenar modelos de IA. SSD preferível.
              </p>
            </div>
            <div className="p-6 bg-[rgb(18,18,28)] border border-[rgb(35,35,52)] rounded-2xl hover:border-[rgb(81,86,178)]/40 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-[rgb(81,86,178)]/10 flex items-center justify-center mb-4 group-hover:bg-[rgb(81,86,178)]/20 transition-colors duration-300">
                <WifiOff className="h-6 w-6 text-[rgb(81,86,178)]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Conexão de internet</h4>
              <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
                Apenas necessária na primeira instalação. Depois funciona 100% offline.
              </p>
            </div>
          </div>

          <div className="mt-8 p-5 rounded-xl bg-[rgb(20,20,35)]/50 border border-[rgb(35,35,52)] text-sm text-[rgba(255,255,255,0.6)]">
            <p className="font-medium text-white mb-1">💡 Dica de otimização:</p>
            <p>Se já tiver uma placa de vídeo dedicada (GPU) ou até mesmo uma AMD integrada, isso acelerará ainda mais o processamento local. Mas tudo o que listamos acima funciona mesmo sem GPU, embora um pouco mais devagar.</p>
          </div>
        </div>
      </section>

      {/* POR QUE IA LOCAL */}
      <section className="px-6 md:px-12 lg:px-20 py-24 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-white">Por que é importante desenvolver com IA local?</h2>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-gradient-to-r from-[rgb(81,86,178)]/5 to-[rgb(48,167,225)]/5 border border-[rgb(81,86,178)]/10">
              <div className="flex-shrink-0 mt-1">
                <Box className="h-8 w-8 text-[rgb(81,86,178)]" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold text-white">Desenvolvimento com IA local é democratizado</h3>
                <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-base">
                  Qualquer pessoa com acesso a um computador básico pode ter acesso a IA muito mais avançada, gratuita. Isso nivela o campo para estudantes, profissionais em países em desenvolvimento, e pessoas em países ricos com recursos limitados.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-gradient-to-r from-[rgb(244,114,182)]/5 to-[rgb(236,72,153)]/5 border border-[rgb(244,114,182)]/10">
              <div className="flex-shrink-0 mt-1">
                <BrainCircuit className="h-8 w-8 text-[rgb(244,114,182)]" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold text-white">Desenvolvimento com IA local é um laboratório</h3>
                <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-base">
                  Isso significa que você pode treinar seus próprios modelos ou adaptar os existentes para suas necessidades específicas. Você tem controle total sobre os dados, a arquitetura e a personalização. Imagine treinar um modelo com 100 gigabytes de suas próprias notes, anotações e documentos com o fim de ter uma IA muito mais personalizada para você.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-gradient-to-r from-[rgb(34,197,94)]/5 to-[rgb(52,211,153)]/5 border border-[rgb(34,197,94)]/10">
              <div className="flex-shrink-0 mt-1">
                <Layers className="h-8 w-8 text-[rgb(34,197,94)]" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-semibold text-white">O futuro do software de computador</h3>
                <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-base">
                  As grandes empresas estão investindo pesadamente nas soluções de inteligência artificial rodando localmente nos computadores das pessoas. Uma tecnologia que permite executar tarefas de IA diretamente no seu computador sem depender da nuvem tem um potencial enorme de impulsionar a autonomia computacional de qualquer indivíduo ou grupo pequeno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS / TABELAS PREÇOS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(81,86,178,0.03)] to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">Comece agora</h2>
            <p className="text-[rgba(255,255,255,0.6)] max-w-xl mx-auto">
              Existem vários níveis de acesso dependendo do que você quer alcançar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            <PricingTier
              name="Básico"
              price="Grátis"
              description="Para quem está começando agora."
              features={[
                "Modelo Llama 3.2 (1B) 16-bit",
                "1.5 M tokens de contexto",
                "2.5 K tokens por imagem de entrada",
                "Chat básico com modelo local",
                "Acesso ao repositório GitHub",
                "Suporte à comunidade"
              ]}
            />
            <PricingTier
              name="Pro"
              price="Grátis"
              description="Para quem quer mais poder e flexibilidade."
              recommended={true}
              features={[
                "Modelo Llama 3.2 (3B) 16-bit",
                "8 M tokens de contexto",
                "7.1 M tokens por imagem de entrada",
                "Chat com arquivo de sistema personalizado",
                "Chat de código com modelos locais",
                "Acesso a documentação e guias",
                "Atualizações por 2 semestres",
                "Comunidade exclusiva e Discord"
              ]}
              ctaText="Experimentar agora"
            />
            <PricingTier
              name="Enterprise"
              price="Grátis"
              description="Soluções robustas para equipes e empresas."
              features={[
                "Modelo Llama 3.1 (70B) 8-bit",
                "128 M tokens de contexto",
                "4K tokens por imagem de entrada",
                "Execução completa off-device",
                "Integração com IDEs e ferramentas",
                "Modelos de domínio específico",
                "Suporte prioritário 24/7",
                "Contratos personalizados"
              ]}
            />
          </div>
        </div>
      </section>

      {/* DEMO / CÓDIGO */}
      <section className="px-6 md:px-12 lg:px-20 py-24 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(244,114,182)]/10 text-[rgb(244,114,182)] text-xs font-medium mb-4 border border-[rgb(244,114,182)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(244,114,182)]" />
              Ao vivo • em tempo real
            </div>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">Experimente agora</h2>
            <p className="text-[rgba(255,255,255,0.6)] max-w-xl mx-auto">
              Faça um teste e veja a IA respondendo aos seus comandos em tempo real.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(81,86,178)]/20 to-[rgb(48,167,225)]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative bg-[rgb(28,28,40)] border border-[rgb(52,52,82)] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[rgb(20,20,30)] border-b border-[rgb(35,35,52)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[rgb(239,68,68)]" />
                  <div className="w-3 h-3 rounded-full bg-[rgb(234,179,8)]" />
                  <div className="w-3 h-3 rounded-full bg-[rgb(34,197,94)]" />
                </div>
                <span className="ml-2 text-xs text-[rgba(255,255,255,0.4)] font-mono">chat-local-webui.py</span>
              </div>
              <div className="p-4 md:p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  {[
                    { content: 'from transformers import', language: 'python' },
                    { content: 'AutoModelForCausalLM, AutoTokenizer', language: 'python' },
                    { content: '', language: 'blank' },
                    { content: 'from peft import', language: 'python' },
                    { content: 'AutoPeftModelForCausalLM', language: 'python' },
                    { content: '', language: 'blank' },
                    { content: 'from huggingface_hub import', language: 'python' },
                    { content: 'login', language: 'python' },
                    { content: '', language: 'blank' },
                    { content: 'import gc', language: 'python' },
                    { content: 'import torch', language: 'python' },
                    { content: '', language: 'blank' },
                    { content: 'gc.collect()', language: 'python' },
                    { content: 'torch.cuda.empty_cache()', language: 'python' },
                    { content: '', language: 'blank' },
                    { content: 'model = AutoPeftModelForCausalLM.from_pretrained(\'ggaudette/Llama-3.2-3B-Instruct-AWQ-awq-int4\',', language: 'python' },
                    { content: '    device_map=\'auto\',', language: 'python' },
                    { content: '    load_in_4bit=True', language: 'python' },
                    { content: ')' },
                    { content: 'tokenizer = AutoTokenizer.from_pretrained(\'ggaudette/Llama-3.2-3B-Instruct-AWQ-awq-int4\')', language: 'python' },
                    { content: '', language: 'blank' },
                    { content: 'conversation = None', language: 'python' },
                    { content: '', style: 'comment' },
                    { content: '# Para começar a conversar,', language: 'python' },
                    { content: '# use o terminal:', language: 'python' },
                    { content: '# python -m text_generation_webui --model_args \'model=./Llama-3.2-3B\'', language: 'python' }
                  ].map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-8 text-[rgba(255,255,255,0.3)] text-right mr-4 select-none">{i + 1}</span>
                      <span
                        className={`${
                          line?.style === 'comment'
                            ? 'text-[rgba(255,132,132,0.7)] italic'
                            : line?.language === 'python'
                              ? 'text-[rgba(176,191,222,0.9)]'
                              : ''
                        }`}
                      >
                        {line?.content}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMADA PARA AÇÃO FINAL */}
      <section className="px-6 md:px-12 lg:px-20 py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">Comece a desenvolver com IA local hoje</h2>
          <p className="mb-10 text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto text-base md:text-lg">
            Junte-se a mais de 30 milhões de pessoas que já usam IA local para revolucionar o desenvolvimento de software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/jurandibs/local_AI_test"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[rgb(76,179,242)]/10 hover:bg-[rgb(76,179,242)]/20 border border-[rgb(76,179,242)]/50 text-white font-medium transition-all duration-300 hover:border-[rgb(76,179,242)]/75 hover:shadow-[0_0_32px_rgba(76,179,242,0.15)]"
            >
              <Github className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>GitHub</span>
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
            <a
              href="https://discord.gg/llama3.2"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[rgb(81,86,178)]/50 hover:border-[rgb(81,86,178)] text-white font-medium transition-all duration-300 hover:bg-[rgb(81,86,178)]/10 hover:shadow-[0_0_24px_rgba(81,86,178,0.15)]"
            >
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[rgb(81,86,178)]/20 text-[rgb(81,86,178)] text-xs font-bold">D</div>
              <span>Discord</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgb(35,35,52)] px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[rgb(81,86,178)] to-[rgb(48,167,225)] flex items-center justify-center">
                  <Terminal className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-bold text-lg">Ollama Local WebUI</span>
              </div>
              <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                Uma interface web simples e poderosa para rodar modelos de IA localmente, sem necessidade de docker ou configuração complexa.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Recursos</h5>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://github.com/jurandibs/local_AI_test" className="text-[rgba(255,255,255,0.5) hover:text-[rgb(81,86,178)] transition-colors text-sm flex items-center gap-2">
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                  Documentação completa
                </a>
                </li>
                <li>
                  <a href="https://github.com/jurandibs/local_AI_test/blob/main/README.md" className="text-[rgba(255,255,255,0.5) hover:text-[rgb(81,86,178)] transition-colors text-sm flex items-center gap-2">
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                  README
                </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Recursos Úteis</h5>
              <ul className="space-y-2.5">
                <li>
                  <a href="#" className="text-[rgba(255,255,255,0.5) hover:text-[rgb(81,86,178)] transition-colors text-sm flex items-center gap-2">
                    <Star className="h-3.5 w-3.5 flex-shrink-0" />
                    Tutoriais iniciais
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[rgba(255,255,255,0.5) hover:text-[rgb(81,86,178)] transition-colors text-sm flex items-center gap-2">
                    <Star className="h-3.5 w-3.5 flex-shrink-0" />
                    Guias de configuração
                  </a>
                </li>
                <li>
                  <a href="https://huggingface.co" className="text-[rgba(255,255,255,0.5) hover:text-[rgb(81,86,178)] transition-colors text-sm flex items-center gap-2">
                    <Star className="h-3.5 w-3.5 flex-shrink-0" />
                    Modelos disponíveis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Comunidade</h5>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://github.com/jurandibs/local_AI_test" className="text-[rgba(255,255,255,0.5) hover:text-[rgb(81,86,178)] transition-colors text-sm flex items-center gap-2">
                    <Github className="h-3.5 w-3.5 flex-shrink-0" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/llama3.2" className="text-[rgba(255,255,255,0.5) hover:text-[rgb(81,86,178)] transition-colors text-sm flex items-center gap-2">
                    <div className="flex items-center justify-center h-3.5 w-3.5 rounded-full bg-[rgb(81,86,178)]/20 text-[rgb(81,86,178)] text-[0.6rem] font-bold">D</div>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[rgb(35,35,52)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[rgba(255,255,255,0.4)]">
            <p>© {new Date().getFullYear()} <a href="https://portfoliojurandi.vercel.app" target="_blank" class="hover:text-primary transition-colors font-bold">JURANDIBS</a>. Todos os direitos reservados.</p>
            <p>
              Feito com <span className="text-[rgb(239,68,68)]">❤️</span> pelos entusiastas da IA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}