<div align="center">
  <img src="https://github.com/fernandohos/fasthome/blob/main/.github/fasthome-banner.png" alt="fasthome banner" />
</div>

  ***

<h3 align="center">Original Design by: <a href="https://www.figma.com/@erenvdmr">Eren Demir</a></h3>

  ***

<div display="flex" align="center">
  
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next badge" />
  
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript badge" />

  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase badge" />

  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="Ract badge" />

  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components badge" />
  
  <img src="https://github.com/fernandohos/fasthome/blob/main/.github/leaflet-badge.svg" alt="Leaflet badge" />
  
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel badge" />

  ##
  <a href="https://fasthome.ml">
    <img src="https://therealsujitk-vercel-badge.vercel.app/?app=fasthome&style=for-the-badge" alt="deployment vercel status" />
    <br />
    Demo on Vercel
  </a>
  
</div>

## 🚀 Setup Rápido

### Pré-requisitos
- Node.js 16+
- Conta no [Supabase](https://supabase.com)
- Conta no [Vercel](https://vercel.com) (para deploy)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/fernandohos/fasthome.git
cd fasthome

# Execute o script de setup (Windows)
scripts\setup.bat

# Ou no Linux/Mac
chmod +x scripts/setup.sh
./scripts/setup.sh

# Configure seu .env.local com as credenciais do Supabase
# (O script criará um arquivo de exemplo)

# Inicie o servidor de desenvolvimento
npm run dev
```

### Configuração do Banco de Dados

1. Crie um projeto no [Supabase](https://supabase.com/dashboard)
2. Execute as migrations em ordem:
   - `db/migrations/001_initial_setup.sql`
   - `db/migrations/002_houses_table.sql` 
   - `db/migrations/003_auxiliary_tables.sql`
   - `db/migrations/004_views_and_sample_data.sql`
3. Configure o storage: `db/storage_setup.sql`
4. (Opcional) Popule dados de exemplo: `SELECT public.populate_sample_data();`

📚 **[Guia Completo de Deploy](./DEPLOY.md)**

<h2>🛠️ Stack Tecnológica</h2>

### Frontend
- **Next.js 12** - Framework React com SSR
- **React 17** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Styled Components** - CSS-in-JS
- **Framer Motion** - Animações

### Backend & Database
- **Supabase** - Backend as a Service
- **PostgreSQL** - Banco de dados relacional
- **Row Level Security** - Segurança avançada
- **Supabase Storage** - Armazenamento de arquivos

### Forms & Validation
- **Formik** - Gerenciamento de formulários
- **Yup** - Validação de schemas
- **react-hot-toast** - Notificações

### Maps & Location
- **Leaflet** - Mapas interativos
- **React Leaflet** - Componentes React para mapas

### Internationalization
- **next-i18next** - Internacionalização
- **Suporte a PT-BR e EN**

### Tools & Utils
- **browser-image-compression** - Compressão de imagens
- **ESLint** - Linting de código

<h2>Features</h2>

<ul>
  <li>🔍 Search & Filters</li>
  <li>📱 Responsive Design</li>
  <li>🎠 Cards Slider</li>
  <li>✨ Smooth Animations</li>
  <li>🔐 Google OAuth Login</li>
  <li>📧 Email/Password Authentication</li>
  <li>🏠 Advanced Property Filters</li>
  <li>🖼️ Image Carousel</li>
  <li>🗺️ Interactive Maps (Leaflet)</li>
  <li>📄 Custom 404 Page</li>
  <li>📝 Multi-step Forms</li>
  <li>📤 Image Upload & Compression</li>
  <li>🔄 Password Reset</li>
  <li>🪝 Custom React Hooks</li>
  <li>🍞 Toast Notifications</li>
  <li>🌍 Internationalization (PT/EN)</li>
  <li>🗺️ Search on Map</li>
</ul>

## 📁 Estrutura do Projeto

```
fasthome/
├── 📁 app/
│   ├── 📁 components/     # Componentes reutilizáveis
│   ├── 📁 patterns/       # Padrões de layout complexos
│   ├── 📁 hooks/          # Custom hooks React
│   ├── 📁 services/       # Serviços (Supabase)
│   ├── 📁 styles/         # Styled Components globais
│   ├── 📁 types/          # Definições TypeScript
│   └── 📁 utils/          # Funções utilitárias
├── 📁 db/
│   ├── 📁 migrations/     # Migrations SQL organizadas
│   ├── 📄 schema.sql      # Schema completo
│   └── 📄 storage_setup.sql # Configuração do Supabase Storage
├── 📁 pages/              # Roteamento Next.js
├── 📁 public/             # Assets estáticos
├── 📁 scripts/            # Scripts de setup
└── 📄 DEPLOY.md           # Guia de deploy detalhado
```
