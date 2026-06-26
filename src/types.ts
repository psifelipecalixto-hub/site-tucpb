/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogArticle {
  id: string;
  title: string;
  category: "Orixás" | "Guias" | "Ervas" | "Fundamentos" | "História" | string;
  snippet: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  iconName?: string;
  imageUrl?: string;
  videoUrl?: string;
  tags?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  instructor: string;
  date: string;
  videoUrl: string;
  imageUrl?: string;
  level: string;
  tags?: string[];
}

export interface Herb {
  id: string;
  name: string;
  scientificName?: string;
  orixa?: string;
  ritualUse: string;
  medicinalUse?: string;
  tags: string[];
  preparation?: string;
  verboAtuante?: string;
  ofo?: string;
  grupo?: string;
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
  status: "Confirmada" | "Especial" | "Suspenso" | "A Confirmar";
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
  photoUrl: string;
  status?: "pendente" | "aprovado" | "recusado";
  dataNascimento?: string;
  cpf?: string;
  rg?: string;
  tipoSanguineo?: string;
  whatsapp?: string;
  endereco?: string;
  profissao?: string;
  contatoEmergencia?: string;
  alergias?: string;
  acompanhamentoPsicologico?: "Sim" | "Não" | "";
  transtornoPsiquiatrico?: string;
  medicamentosContinuos?: string;
  tempoDesenvolvimento?: string;
  terreirosAnteriores?: string;
  iniciacoesRealizadas?: string;
  tiposMediunidade?: string;
  guiasConhecidos?: string;
  buscaCoracao?: string;
}

export interface CurimbaPoint {
  id: string;
  title: string;
  guideOrOrixa: string;
  type: "Abertura" | "Saudação" | "Defumação" | "Chamada" | "Subida" | "Playlist" | string;
  lyrics: string;
  author?: string;
  rhythm?: string;
  audioUrl?: string;
  videoUrl?: string;
  youtubeUrl?: string;
}

export interface CurimbaPlaylist {
  id: string;
  title: string;
  guideOrOrixa: string;
  youtubeUrl: string;
}
