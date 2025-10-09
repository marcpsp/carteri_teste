# =====================================================
# Guia de Deploy - Fasthome
# =====================================================

## 📋 Pré-requisitos

- [ ] Conta no [Supabase](https://supabase.com)
- [ ] Conta no [Vercel](https://vercel.com)
- [ ] Projeto configurado no Supabase
- [ ] Banco de dados configurado (migrations executadas)

## 🗄️ Setup do Banco de Dados

### 1. Criar Projeto no Supabase

1. Vá para [supabase.com/dashboard](https://supabase.com/dashboard)
2. Clique em "New Project"
3. Escolha sua organização
4. Digite o nome do projeto: `fasthome-prod` (ou similar)
5. Digite uma senha forte para o banco
6. Escolha a região mais próxima (South America - São Paulo)
7. Aguarde a criação do projeto

### 2. Executar Migrations

Execute os seguintes arquivos SQL na ordem, usando o SQL Editor do Supabase:

1. **Migration 001** - Setup inicial
   ```sql
   -- Cole o conteúdo de db/migrations/001_initial_setup.sql
   ```

2. **Migration 002** - Tabela de imóveis
   ```sql
   -- Cole o conteúdo de db/migrations/002_houses_table.sql
   ```

3. **Migration 003** - Tabelas auxiliares
   ```sql
   -- Cole o conteúdo de db/migrations/003_auxiliary_tables.sql
   ```

4. **Migration 004** - Views e dados iniciais
   ```sql
   -- Cole o conteúdo de db/migrations/004_views_and_sample_data.sql
   ```

### 3. Configurar Storage

Execute no SQL Editor:
```sql
-- Cole o conteúdo de db/storage_setup.sql
```

### 4. Popular Dados de Exemplo (Opcional)

```sql
SELECT public.populate_sample_data();
```

## 🚀 Deploy no Vercel

### 1. Preparar Repositório

```bash
# Confirme que todos os arquivos estão commitados
git add .
git commit -m "feat: configuração de banco e deploy"
git push origin main
```

### 2. Conectar ao Vercel

1. Vá para [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique em "New Project"
3. Conecte seu repositório GitHub
4. Selecione o repositório `fasthome`
5. Configure o projeto:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### 3. Configurar Variáveis de Ambiente

No painel do Vercel, vá em Settings > Environment Variables:

```bash
# Obtenha estas informações em Supabase > Settings > API
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_KEY=sua-chave-publica-supabase
```

### 4. Deploy

1. Clique em "Deploy"
2. Aguarde o build completar
3. Teste o site no URL fornecido pelo Vercel

## 🔧 Configurações Adicionais

### Domínio Personalizado (Opcional)

1. No Vercel, vá em Settings > Domains
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruído

### Google Auth (Opcional)

1. **Google Cloud Console:**
   - Crie um projeto em [console.cloud.google.com](https://console.cloud.google.com)
   - Ative a Google+ API
   - Crie credenciais OAuth 2.0
   - Adicione o domínio autorizado

2. **Supabase:**
   - Vá em Authentication > Providers
   - Ative Google Provider
   - Cole Client ID e Client Secret

3. **Vercel:**
   - Adicione as variáveis:
   ```bash
   GOOGLE_CLIENT_ID=seu-client-id
   GOOGLE_CLIENT_SECRET=seu-client-secret
   ```

### Analytics (Opcional)

1. **Google Analytics:**
   - Crie uma propriedade em [analytics.google.com](https://analytics.google.com)
   - Obtenha o Measurement ID

2. **Vercel:**
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🧪 Verificação do Deploy

### Checklist de Funcionamento

- [ ] Site carrega corretamente
- [ ] Autenticação funciona (login/cadastro)
- [ ] Upload de imagens funciona
- [ ] Busca e filtros funcionam
- [ ] Mapa carrega corretamente
- [ ] Formulários funcionam
- [ ] I18n (PT/EN) funciona

### Comandos de Teste Local

```bash
# Testar build de produção localmente
npm run build
npm run start

# Verificar possíveis problemas
npm run lint
```

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de build no Vercel:**
   - Verifique se todas as dependências estão no `package.json`
   - Confirme que não há imports quebrados
   - Verifique logs de build no Vercel

2. **Erro de conexão com Supabase:**
   - Verifique se as URLs/chaves estão corretas
   - Confirme que o projeto Supabase está ativo
   - Teste conexão localmente primeiro

3. **Upload de imagens não funciona:**
   - Verifique se o storage foi configurado
   - Confirme as políticas RLS do storage
   - Teste com arquivo pequeno primeiro

4. **Autenticação não funciona:**
   - Verifique configuração do Google Auth
   - Confirme redirect URLs no Supabase
   - Teste com email/senha primeiro

### Logs e Monitoramento

- **Vercel Logs:** Dashboard > Functions > View Function Logs
- **Supabase Logs:** Dashboard > Logs
- **Browser Console:** F12 > Console para erros frontend

## 📈 Próximos Passos

- [ ] Configurar monitoramento (Sentry, LogRocket)
- [ ] Implementar SEO (sitemap, meta tags)
- [ ] Configurar CDN para imagens
- [ ] Implementar cache Redis (opcional)
- [ ] Configurar backup automatizado
- [ ] Implementar testes automatizados