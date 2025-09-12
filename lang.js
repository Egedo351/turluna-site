const translations = {
  en: {
    nav: {
      about: "About Us",
      holidays: "Plan Your Travel",
      health: "Health Tourism",
      sport: "Sport Tourism",
      gastronomy: "Gastronomy"
    },
    about: {
      title: "About Us",
      intro: "Turluna Lda. is a Lisbon-based company founded by two Turkish entrepreneurs. With an innovative mindset, we work only with the best partners in every field we serve—keeping customer satisfaction consistently at the highest level. Our core lines of business are tourism, gastronomy, and consultancy.",

      tourism: "Tourism",
      tourismText: "Turluna delivers a true 360-degree travel service. From air tickets, hotel stays, car rental, and private transfers to event tickets and museum/gallery admissions, we curate seamless journeys end-to-end. You receive competitive rates, attentive support, and premium quality—so your trip feels effortless from the very first plan to the final day.",

      healthsport: "Health & Sports Tourism",
      healthsportText: "We also design packages in health and sports tourism.",

      gastronomy: "Gastronomy",
      gastronomyText: "We proudly showcase the rich flavors of Turkish cuisine through pop-up events at unique venues in Lisbon. From traditional breakfasts to refined dinners, we bring authentic taste with modern touches.",

      consultancy: "Consultancy",
      consultancyText: "We provide practical guidance on Portugal visas and company formation in Portugal. Whether you need help understanding the steps, preparing documents, or coordinating with local partners, our team can assist you from start to finish."
    },
    footer: "© Turluna 2025 — All rights reserved."
  },

  tr: {
    nav: {
      about: "Hakkımızda",
      holidays: "Seyahatini Planla",
      health: "Sağlık Turizmi",
      sport: "Spor Turizmi",
      gastronomy: "Gastronomi"
    },
    about: {
      title: "Hakkımızda",
      intro: "Turluna Lda., iki Türk girişimci tarafından Lizbon’da kurulmuş bir şirkettir. Yenilikçi bir bakış açısıyla, hizmet verdiğimiz her alanda yalnızca en iyi iş ortaklarıyla çalışıyoruz—müşteri memnuniyetini daima en üst seviyede tutuyoruz. Ana faaliyet alanlarımız turizm, gastronomi ve danışmanlıktır.",

      tourism: "Turizm",
      tourismText: "Turluna size gerçek anlamda 360 derecelik bir seyahat hizmeti sunar. Uçak biletleri, otel konaklamaları, araç kiralama, özel transferler, etkinlik biletleri ve müze/galeri girişlerinden, baştan sona kusursuz yolculuklar tasarlarız. Rekabetçi fiyatlar, özenli destek ve yüksek kalite sunarak seyahatinizin ilk planlamadan son güne kadar sorunsuz geçmesini sağlarız.",

      healthsport: "Sağlık ve Spor Turizmi",
      healthsportText: "Sağlık ve spor turizmi alanlarında da paketler tasarlıyoruz.",

      gastronomy: "Gastronomi",
      gastronomyText: "Lizbon’daki seçkin mekânlarda düzenlediğimiz pop-up etkinliklerle Türk mutfağının zengin lezzetlerini gururla sunuyoruz. Geleneksel kahvaltılardan özel akşam yemeklerine kadar, otantik tatları modern dokunuşlarla bir araya getiriyoruz.",

      consultancy: "Danışmanlık",
      consultancyText: "Portekiz vizeleri ve şirket kuruluşu konularında pratik rehberlik sağlıyoruz. Adımların anlaşılmasından belgelerin hazırlanmasına, yerel ortaklarla koordinasyona kadar sürecin her aşamasında size yardımcı oluyoruz."
    },
    footer: "© Turluna 2025 — Tüm hakları saklıdır."
  },

  pt: {
    nav: {
      about: "Sobre Nós",
      holidays: "Planeje Sua Viagem",
      health: "Turismo de Saúde",
      sport: "Turismo Esportivo",
      gastronomy: "Gastronomia"
    },
    about: {
      title: "Sobre Nós",
      intro: "A Turluna Lda. é uma empresa sediada em Lisboa fundada por dois empreendedores turcos. Com uma mentalidade inovadora, trabalhamos apenas com os melhores parceiros em todas as áreas em que atuamos—mantendo a satisfação do cliente sempre no mais alto nível. Nossas principais áreas de atuação são turismo, gastronomia e consultoria.",

      tourism: "Turismo",
      tourismText: "A Turluna oferece um verdadeiro serviço de viagens 360 graus. De passagens aéreas, estadias em hotéis, aluguel de carros e transfers privados a ingressos para eventos e entradas em museus/galerias, organizamos viagens completas de ponta a ponta. Você recebe tarifas competitivas, suporte atencioso e qualidade premium—para que sua viagem seja tranquila desde o primeiro planejamento até o último dia.",

      healthsport: "Turismo de Saúde e Esporte",
      healthsportText: "Também desenvolvemos pacotes de turismo de saúde e esportivo.",

      gastronomy: "Gastronomia",
      gastronomyText: "Apresentamos com orgulho os ricos sabores da culinária turca através de eventos pop-up em locais únicos de Lisboa. De cafés da manhã tradicionais a jantares sofisticados, oferecemos um sabor autêntico com toques modernos.",

      consultancy: "Consultoria",
      consultancyText: "Fornecemos orientação prática sobre vistos para Portugal e constituição de empresas em Portugal. Quer precise de ajuda para compreender os passos, preparar documentos ou coordenar com parceiros locais, nossa equipe pode ajudá-lo do início ao fim."
    },
    footer: "© Turluna 2025 — Todos os direitos reservados."
  }
};

function egedoSetLang(lang) {
  if (!translations[lang]) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.getAttribute("data-i18n").split(".");
    let text = translations[lang];
    keys.forEach(k => text = text?.[k]);
    if (text) el.textContent = text;
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  egedoSetLang(lang);
});
