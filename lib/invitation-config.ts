// ============================================
// CONFIGURACIÓN DE LA INVITACIÓN
// Modifica estos valores para personalizar tu invitación
// ============================================

export const invitationConfig = {
  // Información del evento
  event: {
    name: "Paulina",
    title: "Mis XV años",
    date: new Date("2026-08-08T19:00:00"),
    endDate: new Date("2026-08-08T23:00:00"),
    venue: "Finca Los Pinos",
    address: "Finca Los Pinos",
    city: "Medellin",
    country: "Colombia",
  },

  // Número de WhatsApp para confirmaciones
  // Formato: código de país + número (sin espacios ni guiones)
  // Ejemplo Colombia: 573001234567
  whatsappNumber: "573004919621",

  // Lista de invitados

  // Número de acompañantes permitidos por invitado
  allowedCompanions: 1,

  // Datos bancarios para regalos
  bankDetails: {
    bank: "Banco de Bogotá",
    accountType: "Cuenta de Ahorros",
    accountNumber: "1234567890",
    holder: "María Florencia García",
    id: "1234567890",
  },

  // Timeline de fotos (años importantes) - legacy
  timeline: [
    { id: 1, year: "2011", description: "Mi primer cumpleaños" },
    { id: 2, year: "2016", description: "Mis 5 añitos" },
    { id: 3, year: "2021", description: "Cumpliendo 10 años" },
    { id: 4, year: "2026", description: "Mis XV años" },
  ],

  // Photo grid (nuevo formato)
  // photoGrid: [
  //   {
  //     id: 1,
  //     year: "2011",
  //     description: "Mi primer cumpleaños",
  //     image: "/images/gallery-1.jpg",
  //   },
  //   {
  //     id: 2,
  //     year: "2013",
  //     description: "Dia de princesas",
  //     image: "/images/gallery-2.jpg",
  //   },
  //   {
  //     id: 3,
  //     year: "2015",
  //     description: "Mi primera comunion",
  //     image: "/images/gallery-3.jpg",
  //   },
  //   {
  //     id: 4,
  //     year: "2016",
  //     description: "Mis 5 añitos",
  //     image: "/images/gallery-4.jpg",
  //   },
  //   {
  //     id: 5,
  //     year: "2018",
  //     description: "Vacaciones en familia",
  //     image: "/images/gallery-5.jpg",
  //   },
  //   {
  //     id: 6,
  //     year: "2020",
  //     description: "Cumpleaños en casa",
  //     image: "/images/gallery-6.jpg",
  //   },
  //   {
  //     id: 7,
  //     year: "2022",
  //     description: "Con mis amigas",
  //     image: "/images/gallery-6.jpg",
  //   },
  //   {
  //     id: 8,
  //     year: "2024",
  //     description: "Viaje de graduacion",
  //     image: "/images/gallery-2.jpg",
  //   },
  // ],

  // URL de la cancion de fondo
  // Coloca tu archivo MP3 en public/music/party-song.mp3
  // O cambia esta ruta a la ubicacion de tu cancion
  backgroundMusic: "/music/party-song.mp3",

  // Mensajes personalizados
  messages: {
    hero: "Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.",
    guestNote: "Tu presencia es lo más importante. ¡No faltes!",
    timeline: "Junto a personas que son muy importantes en mi vida",
    party:
      "Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.",
    gifts: "Si deseas regalarme algo más que tu hermosa presencia...",
    footer: "Comparte tus fotos y videos de ese hermoso día",
  },

  // Dress code
  dressCode: {
    style: "Silver Glamour",
    suggestions: [
      "Adultos y jovenes formal",
      "Mujeres; Vestido coctel negro corto",
      "Hombre: Pantalon y camisa formal",
    ],
  },

  // Tips adicionales
  tips: [
    {
      icon: "📍",
      title: "Estacionamiento",
      description: "El salón cuenta con estacionamiento gratuito",
    },
    {
      icon: "🎵",
      title: "Horarios",
      description: "La fiesta inicia a las 17:00 hs puntualmente",
    },
    {
      icon: "📸",
      title: "Fotos",
      description: "Habrá fotógrafo profesional durante todo el evento",
    },
    {
      icon: "🎁",
      title: "Mesa de regalos",
      description: "Puedes dejar tu regalo en la mesa designada al ingresar",
    },
  ],
};

// Función helper para formatear fecha para Google Calendar
export function formatDateForCalendar(date: Date) {
  return date.toISOString().replace(/-|:|\.\d{3}/g, "");
}

// Función helper para generar link de WhatsApp
export function generateWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${invitationConfig.whatsappNumber}?text=${encodedMessage}`;
}

// Función helper para generar link de Google Maps
export function generateMapsLink() {
  const { venue, address, city, country } = invitationConfig.event;
  const query = encodeURIComponent(`${venue}, ${address}, ${city}, ${country}`);
  return `https://maps.app.goo.gl/vYoCDFh4ujv5iPno6`;
}

// Función helper para generar link de Google Calendar
export function generateCalendarLink() {
  const { name, title, venue, address, city, date, endDate } =
    invitationConfig.event;
  const startDate = formatDateForCalendar(date);
  const end = formatDateForCalendar(endDate);
  const eventTitle = encodeURIComponent(`${name} ::: ${title} :::`);
  const location = encodeURIComponent(`${venue} - ${address}, ${city}`);
  const details = encodeURIComponent(`Fiesta de XV años de ${name}`);

  return `https://wa.me/${invitationConfig.whatsappNumber}?text=Hola`;
}
