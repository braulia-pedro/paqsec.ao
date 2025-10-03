export default function Conteudo2() {
  return (
    <article className="prose prose-invert mx-auto py-20 px-6 max-w-3xl">
      <img
        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200"
        alt="Typosquatting"
        className="w-full h-72 object-cover rounded-2xl shadow-lg mb-8"
      />

      <h1 className="text-4xl font-bold">Typosquatting: a armadilha dos domínios falsos</h1>
      <p className="text-sm text-blue-400 uppercase">Proteção de marca • DRP</p>

      <div className="mt-8 space-y-6">
        <p>
          O <b>typosquatting</b> é uma prática maliciosa onde cibercriminosos
          registam domínios muito parecidos com os de marcas conhecidas, contando
          com erros de digitação dos utilizadores.
        </p>

        <h2>⚠️ Exemplos reais</h2>
        <ul>
          <li><code>facebok.com</code> em vez de <code>facebook.com</code></li>
          <li><code>goggle.com</code> em vez de <code>google.com</code></li>
          <li><code>paypai.com</code> em vez de <code>paypal.com</code></li>
        </ul>

        <p>
          Esses sites falsos são usados para <b>roubo de credenciais</b>,
          disseminação de malware ou golpes financeiros.
        </p>

        <h2>🔐 Como se proteger</h2>
        <ol>
          <li><b>Monitorar domínios similares:</b> usar serviços de DRP (Digital Risk Protection).</li>
          <li><b>Educar utilizadores:</b> campanhas de awareness sobre phishing.</li>
          <li><b>Registar domínios defensivos:</b> variantes da sua marca.</li>
          <li><b>Certificados digitais:</b> usar HTTPS/TLS em todos os domínios oficiais.</li>
        </ol>

        <blockquote className="border-l-4 border-red-500 pl-4 italic text-white/80">
          Um único domínio falso pode custar milhões em danos de reputação.
          Empresas que não monitoram estão a deixar portas abertas.
        </blockquote>
      </div>
    </article>
  );
}

