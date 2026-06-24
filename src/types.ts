/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogArticle {
  id: string;
  title: string;
  category: "Orixás" | "Guias" | "Ervas" | "Fundamentos" | "História";
  snippet: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  iconName?: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: "Doutrina" | "Curimba" | "Desenvolvimento" | "Ervas e Banhos";
  description: string;
  duration: string;
  instructor: string;
  date: string;
  videoUrl: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
}

export interface Herb {
  id: string;
  name: string;
  scientificName?: string;
  orixa: string;
  ritualUse: string;
  medicinalUse?: string;
  classification: "Fria" | "Morna" | "Quente";
  preparation: string;
}

export interface GiraEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  orixaGuide: string;
  description: string;
  hasConsultation: boolean;
  maxConsultations?: number;
  status: "Confirmada" | "Especial" | "Suspenso";
}

export interface MemberTask {
  id: string;
  task: string;
  assignedTo: string;
  area: "Terreiro / Gongá" | "Cozinha" | "Portaria / Harmonização" | "Defumação" | "Curimba";
  status: "Pendente" | "Em Andamento" | "Concluido";
  date: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: "admin" | "membro";
  cargoTerreiro: string;
  dataAmaci: string;
  photoUrl: string;
}

export interface CurimbaPoint {
  id: string;
  title: string;
  guideOrOrixa: string;
  type: "Abertura" | "Saudação" | "Defumação" | "Chamada" | "Subida";
  lyrics: string;
  author?: string;
}
