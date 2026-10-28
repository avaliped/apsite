import { useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  FileSpreadsheet,
  GraduationCap,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

// Contacto público da pré-venda; pode ser substituído por VITE_WHATSAPP_NUMBER no deploy.
const whatsappNumber = ((import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '244951471020').replace(/\D/g, '');
const whatsappText = encodeURIComponent('Olá, quero conhecer a pré-venda do AvaliPed.');

function WhatsAppLink({ children, className = '' }: { children: ReactNode; className?: string }) {
  const href = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${whatsappText}` : '#pre-venda';
  return (
    <a href={href} className={className} target={whatsappNumber ? '_blank' : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="landing-page">
      <nav className="landing-nav">
        <a href="#inicio" className="landing-brand" onClick={closeMenu}>
          <span className="landing-brand-mark"><GraduationCap size={22} /></span>
          <span><strong>Avali</strong>Ped<small>Gestão avaliativa</small></span>
        </a>
        <button className="landing-menu-button" type="button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`landing-nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#solucoes" onClick={closeMenu}>Soluções</a>
          <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
          <a href="#precos" onClick={closeMenu}>Preços</a>
          <a href="#perguntas" onClick={closeMenu}>Perguntas</a>
          <a className="landing-nav-login" href="#login" onClick={closeMenu}>Entrar</a>
        </div>
      </nav>

      <section id="inicio" className="landing-hero landing-container">
        <div className="landing-hero-copy">
          <div className="landing-eyebrow"><Sparkles size={15} /> Feito para a realidade das escolas angolanas</div>
          <h1>Menos papelada.<br /><span>Mais controlo.</span></h1>
          <p className="landing-hero-lead">O AvaliPed ajuda professores e responsáveis pedagógicos a organizar avaliações, turmas e documentos num só lugar.</p>
          <div className="landing-actions">
            <WhatsAppLink className="landing-button landing-button-primary"><MessageCircle size={18} /> Quero conhecer o AvaliPed <ArrowRight size={17} /></WhatsAppLink>
            <a className="landing-button landing-button-quiet" href="#como-funciona">Ver como funciona <ArrowRight size={16} /></a>
          </div>
          <div className="landing-trust-row"><ShieldCheck size={17} /> Contexto autorizado <span /> <ClipboardCheck size={17} /> Documentos organizados <span /> <Users size={17} /> Apoio por WhatsApp</div>
        </div>
        <div className="landing-hero-visual" aria-label="Pré-visualização do painel do AvaliPed">
          <div className="landing-glow" />
          <div className="landing-dashboard">
            <div className="dashboard-top"><div className="dashboard-logo"><GraduationCap size={14} /></div><span>AvaliPed</span><div className="dashboard-avatar">MP</div></div>
            <div className="dashboard-welcome"><small>Bom dia, Maria</small><strong>O seu trabalho num só lugar.</strong></div>
            <div className="dashboard-stat-grid"><div><span>Turmas activas</span><strong>04</strong><small className="stat-positive">+2 este ano</small></div><div><span>Avaliações</span><strong>86%</strong><small className="stat-blue">Em andamento</small></div></div>
            <div className="dashboard-card"><div className="dashboard-card-heading"><span>As minhas turmas</span><small>Ver todas →</small></div><div className="dashboard-class"><span className="class-icon class-icon-blue"><FileSpreadsheet size={16} /></span><div><strong>6.ª Classe · Turma A</strong><small>Matemática · 28 alunos</small></div><b>92%</b></div><div className="dashboard-class"><span className="class-icon class-icon-green"><ClipboardCheck size={16} /></span><div><strong>5.ª Classe · Turma B</strong><small>Língua Portuguesa · 31 alunos</small></div><b>68%</b></div></div>
            <div className="dashboard-bottom"><BarChart3 size={17} /><span>O seu próximo documento está pronto para consultar.</span></div>
          </div>
        </div>
      </section>

      <section className="landing-proof-strip"><div className="landing-container landing-proof-inner"><span>Uma forma mais simples de trabalhar com</span><b>Turmas</b><b>Avaliações</b><b>Resultados</b><b>Documentos</b></div></section>

      <section id="solucoes" className="landing-section landing-container">
        <div className="landing-section-heading"><div><div className="landing-kicker">Uma plataforma, dois percursos</div><h2>Clareza para quem ensina.<br /><em>Visão para quem acompanha.</em></h2></div><p>O AvaliPed organiza o trabalho de cada perfil sem misturar permissões nem criar mais tarefas.</p></div>
        <div className="landing-solution-grid"><article className="landing-solution-card solution-teacher"><div className="solution-icon"><GraduationCap size={22} /></div><span className="solution-label">Para professores</span><h3>Ensine com menos retrabalho.</h3><p>Lance e consulte as avaliações no seu contexto autorizado. Tenha os resultados e documentos disponíveis quando precisar deles.</p><ul><li><Check size={16} /> Turmas e disciplinas organizadas</li><li><Check size={16} /> Lançamento de avaliações</li><li><Check size={16} /> Resultados e documentos</li></ul><a href="#pre-venda">Conhecer o plano Professor <ArrowRight size={16} /></a></article><article className="landing-solution-card solution-rp"><div className="solution-icon"><BarChart3 size={22} /></div><span className="solution-label">Para RP e escolas</span><h3>Acompanhe sem perseguir ficheiros.</h3><p>Tenha uma visão operacional do contexto escolar e acompanhe o estado do trabalho com mais clareza e menos recolha manual.</p><ul><li><Check size={16} /> Visão das turmas e do contexto</li><li><Check size={16} /> Acompanhamento operacional</li><li><Check size={16} /> Documentos disponíveis ao perfil</li></ul><a href="#pre-venda">Falar sobre uma escola <ArrowRight size={16} /></a></article></div>
      </section>

      <section id="como-funciona" className="landing-section landing-section-soft"><div className="landing-container"><div className="landing-centered-heading"><div className="landing-kicker">Como funciona</div><h2>Do lançamento ao documento,<br /><em>sem dar voltas.</em></h2><p>Um fluxo pensado para acompanhar o trabalho avaliativo real do professor.</p></div><div className="landing-steps"><div className="landing-step"><span>01</span><div><h3>Escolha o contexto</h3><p>Entre na turma e disciplina que lhe foram atribuídas.</p></div></div><div className="landing-step"><span>02</span><div><h3>Lance uma vez</h3><p>Registe as avaliações no fluxo próprio da sua turma.</p></div></div><div className="landing-step"><span>03</span><div><h3>Consulte e organize</h3><p>Acompanhe resultados e documentos sem repetir o trabalho.</p></div></div></div></div></section>

      <section id="precos" className="landing-section landing-container"><div className="landing-centered-heading"><div className="landing-kicker">Pré-venda de fundadores</div><h2>Comece com um preço<br /><em>feito para começar.</em></h2><p>Oferta limitada para validar o primeiro grupo de professores e escolas.</p></div><div className="landing-price-grid"><article className="landing-price-card"><span>Professor Individual</span><strong>4.500 <small>Kz / ano</small></strong><del>Preço público: 6.000 Kz / ano</del><ul><li><Check size={16} /> Conta pessoal</li><li><Check size={16} /> Turmas e disciplinas atribuídas</li><li><Check size={16} /> Suporte normal por WhatsApp</li></ul><a href="#pre-venda" className="landing-price-button">Tenho interesse <ArrowRight size={16} /></a></article><article className="landing-price-card price-featured"><div className="price-badge">Mais procurado</div><span>RP Individual</span><strong>6.000 <small>Kz / ano</small></strong><del>Preço público: 8.000 Kz / ano</del><ul><li><Check size={16} /> Acompanhamento do contexto</li><li><Check size={16} /> Consulta de documentos disponíveis</li><li><Check size={16} /> Orientação de utilização</li></ul><a href="#pre-venda" className="landing-price-button">Tenho interesse <ArrowRight size={16} /></a></article><article className="landing-price-card"><span>Escola</span><strong className="price-custom">Por volume</strong><del>Condições para a sua realidade</del><ul><li><Check size={16} /> Professores activos</li><li><Check size={16} /> RP incluído a partir do mínimo</li><li><Check size={16} /> Onboarding colectivo</li></ul><a href="#pre-venda" className="landing-price-button">Pedir proposta <ArrowRight size={16} /></a></article></div><p className="landing-price-note">Os preços são anuais. A validade da pré-venda e as condições de renovação serão confirmadas antes da adesão.</p></section>

      <section id="perguntas" className="landing-section landing-faq-section"><div className="landing-container landing-faq-layout"><div><div className="landing-kicker">Antes de começar</div><h2>Perguntas que<br /><em>fazem sentido.</em></h2><p>Quer uma resposta directa sobre a sua escola ou perfil?</p><WhatsAppLink className="landing-text-link">Falar com a equipa <ArrowRight size={16} /></WhatsAppLink></div><div className="landing-faq-list"><details open><summary>O AvaliPed substitui as regras da escola?</summary><p>Não. Organiza o trabalho dentro do contexto e das permissões autorizadas pela instituição.</p></details><details><summary>Posso testar antes de pagar?</summary><p>A pré-venda inclui uma demonstração orientada e um processo de adesão acompanhado, com condições explicadas antes do pagamento.</p></details><details><summary>O preço é mensal?</summary><p>Não. Os valores apresentados são anuais e o preço de renovação será informado no momento da adesão.</p></details><details><summary>Como recebo apoio?</summary><p>O suporte normal é feito por WhatsApp, em horário anunciado, conforme o plano escolhido.</p></details></div></div></section>

      <section id="pre-venda" className="landing-cta"><div className="landing-container landing-cta-inner"><div><div className="landing-kicker landing-kicker-light">Primeiro grupo de fundadores</div><h2>Organize o seu trabalho<br />com mais clareza.</h2><p>Receba a demonstração e as condições completas da pré-venda.</p></div><WhatsAppLink className="landing-button landing-button-light"><MessageCircle size={18} /> Quero receber a demonstração <ArrowRight size={17} /></WhatsAppLink></div></section>

      <footer className="landing-footer"><div className="landing-container landing-footer-inner"><a href="#inicio" className="landing-brand"><span className="landing-brand-mark"><GraduationCap size={20} /></span><span><strong>Avali</strong>Ped<small>Gestão avaliativa</small></span></a><p>Menos retrabalho. Mais controlo sobre o trabalho avaliativo.</p><div className="landing-footer-contact"><a href="mailto:avaliped@gmail.com">avaliped@gmail.com</a><a href="https://wa.me/244951471020" target="_blank" rel="noreferrer">WhatsApp: 951 471 020</a><span>© {new Date().getFullYear()} AvaliPed · Angola</span></div></div></footer>
    </main>
  );
}
