const SENSOR_TYPES = [
  'Indutivo', 'Capacitivo', 'Fotoelétrico Difuso', 'Fotoelétrico Retrorreflexivo',
  'Fotoelétrico Barreira', 'Ultrassônico', 'Magnético', 'Sensor para Cilindro Pneumático', 'Encoder'
];

const DISTANCIA_MAP = {
  'Indutivo': ['2 mm', '4 mm', '8 mm', '12 mm', '15 mm', '25 mm'],
  'Capacitivo': ['4 mm', '8 mm', '15 mm', '25 mm'],
  'Fotoelétrico Difuso': ['100 mm', '300 mm', '500 mm', '1 m'],
  'Fotoelétrico Retrorreflexivo': ['1 m', '3 m', '5 m'],
  'Fotoelétrico Barreira': ['5 m', '10 m', '15 m'],
  'Ultrassônico': ['20-150 mm', '30-500 mm', '100-1000 mm'],
  'Magnético': ['1 mm', '2 mm', '5 mm']
};

const TIPO_SAIDA_OPTS = ['PNP', 'NPN', 'Relé', 'Analógico 4-20mA', 'Analógico 0-10V'];
const LOGICA_OPTS = ['NA (Normalmente Aberto)', 'NF (Normalmente Fechado)', 'NA/NF'];
const TENSAO_OPTS = ['10–30 VDC', '12–24 VDC', '24 VDC', '90–250 VAC'];
const FORMA_COMUTACAO_OPTS = ['Estático', 'Antivalente'];
const FORMATO_OPTS = ['Cilíndrico roscado', 'Cilíndrico liso', 'Retangular', 'Miniatura', 'Garfo'];
const ROSCA_OPTS = ['M8', 'M12', 'M18', 'M30'];
const IP_OPTS = ['IP65', 'IP67', 'IP68', 'IP69K'];
const CONEXAO_OPTS = ['Conector M8', 'Conector M12', 'Cabo integral 2m', 'Cabo integral 5m'];
const MATERIAL_OPTS = ['Latão niquelado', 'Aço inox', 'PBT (plástico)', 'ABS'];
const APLICACAO_OPTS = ['Detecção de metal', 'Detecção de nível', 'Detecção de presença', 'Contagem de peças', 'Posicionamento de cilindro'];
const RECURSOS_OPTS = ['Ajuste de sensibilidade', 'LED indicador', 'Blindado', 'Não blindado', 'Resistente a EMI', 'Saída temporizada'];

const CILINDRO_TIPO_OPTS = ['Magnético', 'Indutivo'];
const CILINDRO_MONTAGEM_OPTS = ['Trilho T', 'Haste', 'Braçadeira'];
const CILINDRO_FIOS_OPTS = ['2 fios', '3 fios', '4 fios'];

const GENERO_OPTS = ['Macho', 'Fêmea'];

// ============================================================
// Campos por tipo: define quais seções do formulário aparecem
// pra cada tipo. Todo tipo que NÃO estiver aqui usa o formulário
// completo (comportamento padrão, pra não quebrar os sensores
// já cadastrados). Pra adicionar um novo tipo com campos próprios,
// só criar uma nova entrada aqui.
//
// Seções disponíveis: distancia, tipoSaida, logica, tensao,
// formaComutacao, formato, ip, conexao, material, aplicacao,
// cilindro, genero, recursos
// ============================================================
const CAMPOS_POR_TIPO = {
  'Conectores': ['formato', 'conexao', 'ip', 'material', 'aplicacao', 'genero', 'recursos']
};

