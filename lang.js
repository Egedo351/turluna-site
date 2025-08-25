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
      intro: "Turluna Lda. is a Lisbon-based company founded by two Turkish entrepreneurs...",
      tourism: "Tourism",
      gastronomy: "Gastronomy",
      consultancy: "Consultancy"
    },
    holidays: {
      title: "Plan Your Travel",
      intro: "At Turluna, we design truly 360-degree holidays...",
      formTitle: "Plan with Turluna"
    },
    health: {
      title: "Health Tourism",
      intro: "With trusted medical partners and attentive trip planning...",
      formTitle: "Get Health Info"
    },
    sport: {
      title: "Sport Tourism",
      intro: "At Turluna, we love bringing sport and travel together...",
      formTitle: "Plan the camp for your team"
    },
    gastronomy: {
      title: "Gastronomy",
      intro: "We proudly showcase the rich flavors of Turkish cuisine...",
      formTitle: "Subscribe to our newsletter"
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
      intro: "Turluna Lda., iki Türk girişimci tarafından Lizbon’da kurulmuş bir şirkettir...",
      tourism: "Turizm",
      gastronomy: "Gastronomi",
      consultancy: "Danışmanlık"
    },
    holidays: {
      title: "Seyahatini Planla",
      intro: "Turluna olarak 360 derece tatil hizmeti sunuyoruz...",
      formTitle: "Turluna ile Plan Yap"
    },
    health: {
      title: "Sağlık Turizmi",
      intro: "Güvenilir tıbbi iş ortaklarımızla ve titiz seyahat planlamamızla...",
      formTitle: "Sağlık Bilgisi Al"
    },
    sport: {
      title: "Spor Turizmi",
      intro: "Turluna olarak sporla turizmi birleştirmekten keyif alıyoruz...",
      formTitle: "Takımınız için kamp planlayın"
    },
    gastronomy: {
      title: "Gastronomi",
      intro: "Türk mutfağının zengin lezzetlerini gururla sunuyoruz...",
      formTitle: "Bültenimize abone olun"
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
      intro: "A Turluna Lda. é uma empresa sediada em Lisboa fundada por dois empreendedores turcos...",
      tourism: "Turismo",
      gastronomy: "Gastronomia",
      consultancy: "Consultoria"
    },
    holidays: {
      title: "Planeje Sua Viagem",
      intro: "Na Turluna, oferecemos férias completas de 360 graus...",
      formTitle: "Planeje com a Turluna"
    },
    health: {
      title: "Turismo de Saúde",
      intro: "Com parceiros médicos confiáveis e planejamento cuidadoso...",
      formTitle: "Solicitar Informações"
    },
    sport: {
      title: "Turismo Esportivo",
      intro: "Na Turluna, adoramos unir esporte e turismo...",
      formTitle: "Planeje o campo para sua equipe"
    },
    gastronomy: {
      title: "Gastronomia",
      intro: "Orgulhamo-nos de apresentar os sabores ricos da culinária turca...",
      formTitle: "Inscreva-se na nossa newsletter"
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
