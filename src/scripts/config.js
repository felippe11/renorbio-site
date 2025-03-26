export const SITE_TITLE = "Renorbio";
export const SITE_DESC = "Website da Rede Nordeste de Biotecnologia";
export const SITE_AUTHOR = "Equipe FERA, fera@info.ufrn.br";
export const SITE_ANALYTICS = "000000000";

// WordPress
let url_wp = "";

// Envio de mensagem (e-mail)
let url_email = "";

// As urls do ambiente de testes foram removidas, pois só rodam na rede da STI/UFRN
url_wp =
  "https://webcache02-producao.info.ufrn.br/admin/renorbio/wp-json/wp/v2/";
url_email =
  "[url-nova]/renorbio/envia_email.php"; // url-nova precisa ser o servidor back que envia e-mail no site da Renorbio (código fonte será enviado separadamente)

export const WP_URL = url_wp;
export const URL_ENVIA_EMAIL = url_email;

// API
export const URL_BASE =
  (document.querySelector("base") &&
    document.querySelector("base").href.slice(0, -1)) ||
  "";

export const URL_SISTEMA = "https://academico.renorbio.org";
export const TEACHERS_STATUS = `${URL_SISTEMA}/api/teachersstatus.json`;
export const TEACHERS = `${URL_SISTEMA}/api/teachers.json`;
export const ESTADOS = `${URL_SISTEMA}/api/states.json`;
export const UNIDADES = `${URL_SISTEMA}/api/institutions.json`;
export const DISCIPLINAS_OFERTADAS = `${URL_SISTEMA}/api/offers.json`;
export const LOGIN = URL_SISTEMA;
export const AREASCONCENTRACAO = `${URL_SISTEMA}/api/areas.json`;
export const LISTADISCIPLINAS = `${URL_SISTEMA}/api/disciplines.json`;
export const PROCESSOSELETIVO = `${URL_SISTEMA}/api/selectivesprocesses.json`;
export const CIDADES = `${URL_SISTEMA}/api/citys.json`;
export const CADASTRO = `${URL_SISTEMA}/api/users.json`;
export const LABORATORIES = `${URL_SISTEMA}/api/laboratories.json`;
