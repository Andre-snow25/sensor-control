# SensorControl (versão Supabase)

Sistema de controle de sensores: cadastro, estoque, entrada/saída por crachá,
setores/linhas/máquinas. Agora sem depender de rede interna — frontend
conversa direto com o Supabase (banco Postgres na nuvem).

## 1. Criar o projeto no Supabase

1. Entre em [supabase.com](https://supabase.com) e crie um novo projeto
   (ou use um que já tenha)
2. Anote a **senha do banco** que você definir na criação (guarde num lugar seguro)
3. Espere o projeto terminar de provisionar (leva 1-2 minutos)

## 2. Criar as tabelas

1. No painel do Supabase, vá em **SQL Editor** (menu lateral)
2. Clique em **New query**
3. Cole todo o conteúdo do arquivo `sql/schema.sql` deste projeto
4. Clique em **Run**

Isso cria as tabelas (`sensores`, `sensor_recursos`, `setores`, `linhas`,
`maquinas`, `movimentacoes`), o trigger que atualiza o estoque automaticamente
a cada movimentação, e libera o acesso via chave pública.

## 3. Pegar as chaves de conexão

1. No painel do Supabase, vá em **Project Settings → API**
2. Copie:
   - **Project URL** (algo como `https://xxxxx.supabase.co`)
   - **anon public key** (uma chave longa)

## 4. Configurar o frontend

Abra o arquivo `supabaseClient.js` e preencha:

```js
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'sua-chave-anon-aqui';
```

## 5. Testar localmente

Como é só HTML/CSS/JS puro (sem backend), não precisa nem de `npm install`.
Só abrir o `index.html` num navegador — mas alguns navegadores bloqueiam
`fetch` de arquivos abertos direto (`file://`). Pra evitar isso, sirva a
pasta com um servidor simples:

**Se tiver Node instalado:**
```
npx serve .
```

**Se tiver Python instalado:**
```
python -m http.server 8000
```

Depois abra o endereço que aparecer no terminal (ex: `http://localhost:3000`
ou `http://localhost:8000`).

## 6. Subir pro GitHub (privado)

```
git init
git add .
git commit -m "Primeira versão do SensorControl com Supabase"
```

Crie o repositório privado no GitHub (botão "New repository", marque
**Private**), depois:

```
git remote add origin https://github.com/SEU-USUARIO/sensor-control.git
git branch -M main
git push -u origin main
```

> **Importante:** a chave `anon` do Supabase é uma chave pública por design
> (ela só funciona dentro das regras de acesso — RLS — que definimos no
> `schema.sql`). Ainda assim, como o repositório é privado, não custa nada
> manter assim. Se um dia precisar deixar o repositório público, aí sim
> mova as chaves pra variáveis de ambiente.

## 7. Publicar (deploy) — deixar acessível pra empresa toda

A forma mais simples é usar **Vercel** ou **Netlify** (gratuitos):

1. Entre em [vercel.com](https://vercel.com) (ou netlify.com) e conecte sua conta do GitHub
2. Importe o repositório `sensor-control`
3. Como é só HTML/CSS/JS estático, não precisa configurar build — só confirmar e publicar
4. Em alguns minutos, você recebe uma URL tipo `https://sensor-control.vercel.app`

Esse link funciona de qualquer lugar (empresa, casa, celular) — sem
depender de rede interna nem de portas liberadas no firewall.

## 8. Estrutura do projeto

```
sensor-control-supabase/
├── index.html
├── style.css
├── options.js          # opções dos dropdowns (ajuste como quiser)
├── supabaseClient.js   # configuração de conexão (preencher)
├── api.js              # chamadas ao Supabase
├── app.js              # lógica das telas (lista, modal, movimentação, etc.)
└── sql/
    └── schema.sql       # rodar no SQL Editor do Supabase
```

## 9. Nota sobre segurança de acesso

O `schema.sql` libera acesso total (leitura/escrita) pra chave `anon` em
todas as tabelas, já que o sistema não tem login de usuário — a identificação
é só pelo crachá nas movimentações. Isso é adequado pra uso interno com
repositório e link de acesso privados. Se no futuro quiser adicionar login
de verdade, o Supabase já vem com autenticação pronta (Supabase Auth) — é
só trocar as *policies* de RLS no `schema.sql` pra exigir usuário autenticado.
