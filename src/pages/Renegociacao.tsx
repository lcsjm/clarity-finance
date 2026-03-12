import Navbar from "@/components/Navbar";
import { ArrowLeft, CheckCircle, AlertTriangle, Lightbulb, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tips = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Liste todas as suas dívidas",
    text: "Organize por valor, taxa de juros e prazo. Priorize as com juros mais altos.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Conheça seus direitos",
    text: "O Código de Defesa do Consumidor garante condições justas de renegociação.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Negocie descontos à vista",
    text: "Credores frequentemente oferecem 40-90% de desconto para pagamento à vista.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Evite novas dívidas",
    text: "Antes de renegociar, ajuste seu orçamento para não se endividar novamente.",
  },
];

const Renegociacao = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen auth-gradient-bg text-white">
      <Navbar />
      <main className="pt-28 pb-16 px-[3%] max-w-[1000px] mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar
        </button>

        <h1
          className="font-bold mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Renegociação de Dívida
        </h1>
        <p className="text-white/70 text-lg mb-12 max-w-[700px]">
          Guia completo com conceitos, estratégias e dicas práticas para renegociar suas dívidas e retomar o controle da sua vida financeira.
        </p>

        <section className="mb-16">
          <h2
            className="font-bold mb-6"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            O que é renegociação?
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <p className="text-white/85 leading-relaxed">
              Renegociação de dívida é o processo de conversar com o credor para encontrar novas condições
              de pagamento — como prazos maiores, juros menores ou descontos. É um direito do consumidor
              e uma das formas mais eficazes de sair do endividamento. Empresas como a Serasa oferecem
              plataformas online onde você pode negociar diretamente com centenas de credores.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2
            className="font-bold mb-8"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            Dicas práticas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-[#E80070]">
                  {tip.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-white/70 text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="font-bold mb-6"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            Passo a passo
          </h2>
          <ol className="space-y-4">
            {[
              "Faça um levantamento completo de todas as suas dívidas e valores.",
              "Consulte seu CPF gratuitamente no Serasa para ver quais dívidas estão negativadas.",
              "Analise suas finanças: quanto você pode pagar por mês sem comprometer o essencial?",
              "Entre em contato com os credores ou use plataformas como Serasa Limpa Nome.",
              "Negocie: peça descontos para pagamento à vista ou melhores condições de parcelamento.",
              "Formalize tudo por escrito e guarde os comprovantes de pagamento.",
              "Acompanhe a baixa da negativação após a quitação.",
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C1188B, #E80070)" }}
                >
                  {i + 1}
                </span>
                <p className="text-white/80 pt-1">{text}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Renegociacao;
