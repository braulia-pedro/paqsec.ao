export default function Conteudo3() {
  return (
    <article className="prose prose-invert mx-auto py-20 px-6 max-w-3xl">
      <img
        src="https://images.unsplash.com/photo-1605902711846-902c1b1c9e19?q=80&w=1200"
        alt="K-Anonymity"
        className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
      />
      <h1 className="text-4xl font-bold">
        K-Anonymity: verificar palavras-passe com privacidade
      </h1>
      <p className="text-sm text-blue-400 uppercase">Formação</p>
      <div className="mt-6 space-y-4">
        <h2>Conceito</h2>
        <p>
          K-Anonymity permite verificar se uma senha está comprometida sem expor
          a senha completa.
        </p>
        <h2>Como funciona</h2>
        <ul>
          <li>Só parte do hash é enviada ao servidor.</li>
          <li>O servidor retorna possíveis correspondências.</li>
          <li>Privacidade preservada.</li>
        </ul>
        <h2>Benefícios</h2>
        <ul>
          <li>Segurança</li>
          <li>Escalabilidade</li>
          <li>Proteção de dados sensíveis</li>
        </ul>
      </div>
    </article>
  );
}

