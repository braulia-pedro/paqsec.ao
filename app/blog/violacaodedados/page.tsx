export default function Conteudo1() {
  return (
    <article className="prose prose-invert mx-auto py-20 px-6 max-w-3xl">
      <img
        src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1200"
        alt="Relatório de violação de dados"
        className="w-full h-72 object-cover rounded-2xl shadow-lg mb-8"
      />

      <h1 className="text-4xl font-bold">Como interpretar um relatório de violação de dados</h1>
      <p className="text-sm text-blue-400 uppercase">Cibersegurança • Leitura essencial</p>

      <div className="mt-8 space-y-6">
        <p>
          Violações de dados são cada vez mais comuns e representam riscos graves
          para indivíduos e organizações. Relatórios de incidentes, muitas vezes
          divulgados por empresas de segurança, são ferramentas essenciais para
          compreender o que aconteceu, o impacto e as medidas necessárias.
        </p>

        <h2>📌 Estrutura de um relatório típico</h2>
        <ul>
          <li><b>Descrição do incidente:</b> contexto e como ocorreu a violação.</li>
          <li><b>Data e duração:</b> quando começou e quando foi identificado.</li>
          <li><b>Dados comprometidos:</b> emails, senhas, cartões, documentos.</li>
          <li><b>Origem da ameaça:</b> ataque de phishing, ransomware, insiders, etc.</li>
          <li><b>Impacto:</b> número de vítimas e risco para os utilizadores.</li>
          <li><b>Medidas corretivas:</b> mudanças já implementadas.</li>
        </ul>

        <h2>🔎 Como usar estas informações</h2>
        <p>
          Para empresas, entender um relatório ajuda a ajustar políticas de
          segurança e comunicar com clientes. Para indivíduos, é essencial saber
          se os seus dados foram comprometidos e quais ações tomar.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-white/80">
          Exemplo: um relatório pode revelar que emails e senhas foram expostos
          em texto plano. Nesse caso, trocar a senha imediatamente é obrigatório,
          além de ativar autenticação multifator.
        </blockquote>

        <h2>✅ Boas práticas após uma violação</h2>
        <ol>
          <li>Troque as senhas em todos os serviços relacionados.</li>
          <li>Ative MFA (autenticação multifator).</li>
          <li>Monitore contas bancárias e cartões.</li>
          <li>Use gestores de senha para maior segurança.</li>
        </ol>
      </div>
    </article>
  );
}

