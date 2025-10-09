# 📄 Deploy no GitHub Pages - FastHome

## ⚠️ **Limitações do GitHub Pages**

O GitHub Pages é um serviço de hosting estático, então algumas funcionalidades do FastHome ficarão limitadas:

### ✅ **Funciona:**
- Interface visual completa
- Navegação entre páginas
- Mapas (Leaflet)
- Animações e transições
- Design responsivo
- Internacionalização (PT/EN)

### ❌ **Não funciona:**
- Autenticação (login/cadastro)
- Upload de imagens
- Formulários dinâmicos
- Conexão com Supabase
- Dados em tempo real

## 🚀 **Como Fazer Deploy**

### 1. **Configurar Repositório**

1. Faça push do código para o GitHub:
   ```bash
   git add .
   git commit -m "feat: configuração para GitHub Pages"
   git push origin main
   ```

2. No GitHub, vá em **Settings** > **Pages**

3. Em **Source**, selecione:
   - **Source**: GitHub Actions

### 2. **Deploy Automático**

O arquivo `.github/workflows/deploy.yml` já está configurado. A cada push na branch `main`, o deploy acontecerá automaticamente.

### 3. **Deploy Manual (Alternativa)**

Se preferir fazer deploy manual:

```bash
# 1. Build para GitHub Pages
npm run build:github

# 2. O site estático estará na pasta 'out'
# 3. Faça upload dessa pasta para a branch 'gh-pages'
```

## 🔧 **Configurações Feitas**

### **next.config.js**
- Configurado para export estático quando `GITHUB_PAGES=true`
- Imagens otimizadas para hosting estático
- Base path configurado para `/fasthome`

### **image-loader.js**
- Loader personalizado para imagens no GitHub Pages

### **Scripts no package.json**
- `npm run build:github` - Build otimizado para GitHub Pages
- `npm run deploy:github` - Build + preparação final

### **GitHub Action**
- Deploy automático via `.github/workflows/deploy.yml`
- Build e publicação na branch `gh-pages`

## 📱 **Acessar o Site**

Após o deploy, o site estará disponível em:
```
https://fernandohos.github.io/fasthome/
```

## 🎨 **Versão Demo Estática**

Para mostrar o potencial do projeto, você pode:

1. **Usar dados mockados** (já configurado)
2. **Simular funcionalidades** com JavaScript local
3. **Mostrar design e UX** completos

## 🔄 **Alternativas Recomendadas**

Para funcionalidade completa, considere:

### **Vercel** (Recomendado)
```bash
npm run deploy
```
- Suporte completo ao Next.js
- Supabase funciona normalmente
- Deploy gratuito

### **Netlify**
- Suporte a Next.js
- Functions serverless
- Deploy via Git

### **Railway**
- Backend completo
- Banco de dados incluído
- Deploy via GitHub

## 📋 **Checklist de Deploy**

- [ ] Código commitado no GitHub
- [ ] GitHub Pages configurado no repositório
- [ ] GitHub Action executada com sucesso
- [ ] Site acessível via URL do GitHub Pages
- [ ] Todas as páginas carregando corretamente
- [ ] Imagens sendo exibidas
- [ ] Mapas funcionando
- [ ] Design responsivo ok

## 🐛 **Troubleshooting**

### **Problema: Páginas 404**
- Verifique se `trailingSlash: true` está no `next.config.js`
- Confirme que todas as rotas são estáticas

### **Problema: Imagens não carregam**
- Verifique o `basePath` no `next.config.js`
- Confirme que `unoptimized: true` está configurado

### **Problema: Build falha**
- Remova `getServerSideProps` de todas as páginas
- Use apenas `getStaticProps` ou dados estáticos

### **Problema: CSS não carrega**
- Verifique se não há imports dinâmicos de CSS
- Confirme que todos os assets têm o basePath correto

## 💡 **Dicas**

1. **Performance**: O site estático será muito rápido
2. **SEO**: Excelente para indexação no Google
3. **Custos**: Completamente gratuito
4. **Manutenção**: Zero configuração de servidor

Use GitHub Pages para **demonstração** e **portfolio**, mas para um site funcional completo, prefira Vercel ou Netlify.