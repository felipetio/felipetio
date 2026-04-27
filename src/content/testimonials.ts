import type { Language } from '../translations';

interface Testimonial {
  name: string;
  logo: string;
  role: Record<Language, string>;
  text: Record<Language, string>;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Pedro De Conti',
    logo: '/assets/tupi.png',
    role: {
      pt: 'CEO, Tupi',
      en: 'CEO, Tupi',
    },
    text: {
      pt: 'No final de 2025, Felipe esteve na Tupi ajudando a transformar nossa interação com IA. Um mês de trabalho que elevou o nível da nossa entrega e organizou nossa "biblioteca de inteligência".',
      en: 'At the end of 2025, Felipe was at Tupi helping transform how we interact with AI. One month of work that raised the bar of our delivery and organized our "intelligence library".',
    },
  },
  {
    name: 'Carlos Rodriguez',
    logo: '/assets/sq-tesorio.jpeg',
    role: {
      pt: 'Engineering Manager, Tesorio',
      en: 'Engineering Manager, Tesorio',
    },
    text: {
      pt: 'Trabalhei com o Felipe por vários anos, como colega de time e depois como seu manager. Ele traz expertise técnica excepcional e entrega soluções de alta qualidade com consistência, com uma energia positiva que eleva o time. Qualquer time teria sorte de tê-lo.',
      en: 'I worked with Felipe for several years, as a teammate and then as his manager. He brings exceptional technical expertise and consistently delivers high-quality solutions, with a positive energy that elevates the team. Any team would be lucky to have him.',
    },
  },
  {
    name: 'Nathalia Misaki',
    logo: '/assets/sq-grubster.jpeg',
    role: {
      pt: 'Tech Lead, Grubster',
      en: 'Tech Lead, Grubster',
    },
    text: {
      pt: 'Felipe é um CTO incrível. Suas habilidades de gestão fizeram o projeto focar no que realmente importa, evitando retrabalho desnecessário. Além disso, as conversas no bar eram ótimas.',
      en: 'Felipe is an amazing CTO. His management skills kept the project focused on what really matters, avoiding unnecessary rework. Also, the bar conversations were great.',
    },
  },
  {
    name: 'Gustavo Faleiros',
    logo: '/assets/sq-infoamazonia.jpeg',
    role: {
      pt: 'InfoAmazonia / Pulitzer Center',
      en: 'InfoAmazonia / Pulitzer Center',
    },
    text: {
      pt: '...',
      en: '...',
    },
  },
];
