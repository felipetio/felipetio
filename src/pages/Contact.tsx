import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * CONFIGURAÇÃO DO GOOGLE FORMS
 * Substitua os valores abaixo quando tiver o link final e os IDs dos campos.
 */
const GOOGLE_FORMS_CONFIG = {
  // Link base do formulário (viewform)
  baseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfD_YOUR_FORM_ID_HERE/viewform",
  
  // ID do campo de "Tipo de Oferta" para pré-seleção via URL
  // Exemplo: "entry.123456789"
  entryFieldId: "entry.placeholder_id",
  
  // Mapeamento dos valores internos para os valores exatos do Google Forms
  valuesMapping: {
    'produto-zero': 'Produto do zero',
    'sprint': 'Sprint de entrega',
    'ai': 'AI enablement',
    'other': 'Outro / ainda não sei'
  }
};

export default function Contact() {
  const { t, language } = useLanguage();
  const location = useLocation();
  
  // Captura o parâmetro de tipo da URL para pré-preenchimento
  const params = new URLSearchParams(location.search);
  const type = params.get('tipo');
  
  // Constrói a URL do Google Forms com o parâmetro de pré-seleção
  let finalFormUrl = GOOGLE_FORMS_CONFIG.baseUrl;
  if (type && GOOGLE_FORMS_CONFIG.valuesMapping[type as keyof typeof GOOGLE_FORMS_CONFIG.valuesMapping]) {
    const prefillValue = encodeURIComponent(GOOGLE_FORMS_CONFIG.valuesMapping[type as keyof typeof GOOGLE_FORMS_CONFIG.valuesMapping]);
    finalFormUrl += `${finalFormUrl.includes('?') ? '&' : '?'}${GOOGLE_FORMS_CONFIG.entryFieldId}=${prefillValue}`;
  }

  return (
    <div className="section-padding bg-sand min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/" className="text-forest/60 hover:text-forest flex items-center gap-2 mb-8 text-sm font-medium">
             <ArrowLeft size={14} />
             Home
          </Link>
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl mb-4 text-forest">{t.contact.pageTitle}</h1>
            <p className="text-zinc-600 max-w-2xl leading-relaxed">
              {language === 'pt' 
                ? <>Preencha o formulário abaixo e retorno em breve. Se preferir, pode me chamar direto no LinkedIn ou me enviar um email em <a href="mailto:me@felipet.io" className="text-forest font-semibold hover:underline">me@felipet.io</a>.</>
                : <>Fill out the form below and I'll get back to you soon. Or reach out directly on LinkedIn or send me an email at <a href="mailto:me@felipet.io" className="text-forest font-semibold hover:underline">me@felipet.io</a>.</>
              }
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-forest/5 min-h-[800px] relative">
            <iframe 
              src={finalFormUrl}
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              Carregando formulário...
            </iframe>
            
            {/* Overlay sutil para manter a estética se o Forms demorar ou carregar de forma estranha */}
            <div className="absolute top-0 left-0 w-full h-1 bg-forest/20"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
