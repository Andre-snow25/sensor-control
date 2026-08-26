// Configurações de tipos, campos e opções do sistema de sensores
// (SensorControl) — última atualização
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
  'Magnético': ['1 mm', '2 mm', '5 mm'],
  'Sensor Capacitivo': ['10mm']
};

const TIPO_SAIDA_OPTS = ['PNP', 'NPN', 'Relé', 'Analógico 4-20mA', 'Analógico 0-10V', 'Analógico 4-20mA / 0-10V'];
const LOGICA_OPTS = ['NA (Normalmente Aberto)', 'NF (Normalmente Fechado)', 'NA/NF'];
const TENSAO_OPTS = ['10–30 VDC', '12–24 VDC', '24 VDC', '90–250 VAC'];

const FORMA_COMUTACAO_OPTS = ['Dark ON', 'Light ON'];
const FORMA_COMUTACAO_DESC = {
  'Dark ON': 'Saída 24V ligada com peça',
  'Light ON': 'Saída 24V ligada sem peça'
};

const FORMATO_OPTS = ['Cilíndrico roscado', 'Cilíndrico liso', 'Retangular', 'Miniatura', 'Garfo'];
const ROSCA_OPTS = ['M5', 'M8', 'M12', 'M18', 'M30'];
const IP_OPTS = ['IP65', 'IP67', 'IP68', 'IP69K'];
const CONEXAO_OPTS = ['Conector M8', 'Conector M12', 'Cabo integral 2m', 'Cabo integral 5m', 'Jumper M8xM12'];
const MATERIAL_OPTS = ['Latão niquelado', 'Aço inox', 'PBT (plástico)', 'ABS'];
const APLICACAO_OPTS = ['Detecção de metal', 'Detecção de nível', 'Detecção de presença', 'Contagem de peças', 'Posicionamento de cilindro', 'Conexão de sensores', 'Segurança', 'Detecção de Posição', 'Motores elétricos', 'Detecção de Pressão', 'Detecção de etiquetas', 'Detectar peças metálicas'];
const RECURSOS_OPTS = ['Ajuste de sensibilidade', 'LED indicador', 'Blindado', 'Não blindado', 'Resistente a EMI', 'Saída temporizada', 'Ajuste de distância por potenciômetro', 'Ajuste de distância por botão'];

const CILINDRO_TIPO_OPTS = ['Magnético', 'Indutivo'];
const CILINDRO_MONTAGEM_OPTS = ['Trilho T', 'Haste', 'Braçadeira'];
const CILINDRO_FIOS_OPTS = ['2 fios', '3 fios', '4 fios'];

const GENERO_OPTS = ['Macho', 'Fêmea'];
const PINOS_OPTS = ['3 Pinos', '4 Pinos', '8 Pinos', '12 Pinos'];
const PAPEL_BARREIRA_OPTS = ['Emissor', 'Receptor', 'Emissor/Receptor'];
const CABECA_OPTS = ['Faceada', 'Não faceada'];

// ============================================================
// Campos por tipo: define quais seções do formulário aparecem
// pra cada tipo. Todo tipo que NÃO estiver aqui usa o formulário
// completo (comportamento padrão, pra não quebrar os sensores
// já cadastrados). Pra adicionar um novo tipo com campos próprios,
// só criar uma nova entrada aqui.
//
// Seções disponíveis: distancia, tipoSaida, logica, tensao,
// formaComutacao, formato, ip, conexao, material, aplicacao,
// cilindro, genero, pinos, tamanho, papel, par, recursos
// ============================================================
const CAMPOS_POR_TIPO = {
  'Conectores': ['formato', 'conexao', 'ip', 'material', 'aplicacao', 'genero', 'pinos', 'recursos'],
  'Espelho Reflexivo': ['formato', 'tamanho', 'ip', 'material', 'aplicacao'],
  'Botoeira': ['tipoSaida', 'logica', 'tensao', 'formato', 'rosca', 'ip', 'conexao', 'material', 'aplicacao'],
  'Cabo de Sensor': ['formato', 'ip', 'conexao', 'material', 'aplicacao', 'genero', 'pinos', 'tamanho'],
  'Chave de Segurança': ['logica', 'tensao', 'formato', 'ip', 'material', 'aplicacao', 'par'],
  'Chave Fim de Curso': ['logica', 'formato', 'ip', 'material', 'aplicacao'],
  'Ponte Retificadora': ['aplicacao'],
  'Sensor Capacitivo': ['distancia', 'tipoSaida', 'logica', 'tensao', 'formaComutacao', 'formato', 'rosca', 'ip', 'conexao', 'material', 'aplicacao'],
  'Sensor de Barreira': ['distancia', 'tipoSaida', 'logica', 'tensao', 'formaComutacao', 'formato', 'rosca', 'ip', 'conexao', 'material', 'aplicacao', 'papel', 'par'],
  'Sensor de Cilindro': ['tipoSaida', 'logica', 'tensao', 'ip', 'conexao', 'material', 'aplicacao'],
  'Sensor de Pressão': ['tipoSaida', 'logica', 'tensao', 'ip', 'conexao', 'material', 'aplicacao'],
  'Sensor Fibra Optica': ['tipoSaida', 'logica', 'tensao', 'ip', 'material', 'aplicacao'],
  'Sensor Fotoelétrico Difuso': ['distancia', 'tipoSaida', 'logica', 'tensao', 'formaComutacao', 'formato', 'rosca', 'ip', 'conexao', 'material', 'aplicacao', 'pinos', 'recursos'],
  'Sensor Etiqueta': ['tipoSaida', 'logica', 'tensao', 'ip', 'conexao', 'material', 'aplicacao', 'pinos'],
  'Sensor Fotoelétrico Refletivo': ['distancia', 'tipoSaida', 'logica', 'tensao', 'formaComutacao', 'formato', 'rosca', 'ip', 'conexao', 'material', 'aplicacao', 'pinos', 'recursos'],
  'Sensor de Dupla Chapa': ['tipoSaida', 'logica', 'tensao'],
  'Sensor Indutivo': ['distancia', 'tipoSaida', 'logica', 'tensao', 'formato', 'ip', 'conexao', 'material', 'aplicacao', 'pinos', 'cabeca'],
  'Sensor Optico Distância': ['distancia', 'tipoSaida', 'logica', 'tensao', 'formato', 'ip', 'conexao', 'material', 'aplicacao', 'pinos', 'recursos'],
  'Sensor Ultrassônico': ['distancia', 'tipoSaida', 'logica', 'tensao', 'formato', 'ip', 'conexao', 'material', 'aplicacao']
};

// Sobrescreve as opções do campo "Formato" pra tipos específicos.
// Tipo que não estiver aqui usa FORMATO_OPTS (a lista padrão).
const FORMATO_OPTS_POR_TIPO = {
  'Conectores': ['Reto', '90°'],
  'Espelho Reflexivo': ['Retangular', 'Redondo'],
  'Cabo de Sensor': ['Cabo Reto', 'Cabo 90°'],
  'Chave de Segurança': ['Sensor magnético', 'Lingueta (chave)', 'Intertravamento Rotativo'],
  'Chave Fim de Curso': ['Roldana Fixa', 'Roldana Ajustável']
};

// Sugestões pro campo "Tamanho" (continua sendo texto livre — essas são só
// sugestões que aparecem no dropdown do navegador; tipo sem entrada aqui
// fica sem sugestão nenhuma, só digitação livre).
const TAMANHO_OPTS_POR_TIPO = {
  'Cabo de Sensor': ['2 Metros', '5 Metros']
};

// Sobrescreve as opções do campo "Conexão" pra tipos específicos.
// Tipo que não estiver aqui usa CONEXAO_OPTS (a lista padrão).
const CONEXAO_OPTS_POR_TIPO = {
  'Cabo de Sensor': ['Conector M8', 'Conector M12', 'Jumper M8xM12'],
  'Sensor de Cilindro': ['2 fios', '3 fios', '4 fios']
};

// Liga cada "seção" ao nome do campo (Pascal, como vem da API) correspondente
const SECAO_PARA_CAMPO = {
  distancia: 'Distancia', tipoSaida: 'TipoSaida', logica: 'LogicaSaida', tensao: 'Tensao',
  formaComutacao: 'FormaComutacao', formato: 'Formato', rosca: 'Rosca', ip: 'IP', conexao: 'Conexao',
  material: 'Material', aplicacao: 'Aplicacao', genero: 'Genero', pinos: 'Pinos', tamanho: 'Tamanho',
  papel: 'Papel', recursos: 'Recursos', cabeca: 'Cabeca'
};

// Liga cada "seção" à chave de filtro usada nas queries (usada pelo Api.listarSensores)
const SECAO_PARA_FILTRO = {
  distancia: 'distancia', tipoSaida: 'tipoSaida', logica: 'logica', tensao: 'tensao',
  formaComutacao: 'formaComutacao', formato: 'formato', rosca: 'rosca', ip: 'ip', conexao: 'conexao',
  material: 'material', aplicacao: 'aplicacao', genero: 'genero', pinos: 'pinos', tamanho: 'tamanho',
  papel: 'papel', recursos: 'recursos', cabeca: 'cabeca'
};

// Rótulos amigáveis pra cada seção, usados nos filtros
const SECAO_LABEL = {
  distancia: 'Distância', tipoSaida: 'Tipo de saída', logica: 'Lógica de saída', tensao: 'Tensão',
  formaComutacao: 'Forma de comutação', formato: 'Formato', rosca: 'Rosca', ip: 'Grau de proteção', conexao: 'Conexão',
  material: 'Material', aplicacao: 'Aplicação', genero: 'Macho / Fêmea', pinos: 'Quantidade de pinos', tamanho: 'Tamanho',
  papel: 'Emissor / Receptor', recursos: 'Recursos', cabeca: 'Cabeça'
};
// Observação 1: "recursos" é um campo de lista (um sensor pode ter vários),
// diferente dos demais que são valor único — por isso tem tratamento
// especial no app.js (tanto pra montar as opções quanto pra filtrar).
// Observação 2: a seção "par" (sensor vinculado) é tratada à parte no app.js —
// não entra nesses mapeamentos porque não é um dropdown comum, é uma busca/vínculo.

// Lista de campos usada como padrão pra tipos que NÃO têm entrada em
// CAMPOS_POR_TIPO (mostra o formulário "completo" clássico)
const FILTROS_PADRAO = ['distancia', 'tipoSaida', 'logica', 'tensao', 'formato', 'ip', 'conexao', 'material', 'aplicacao'];
