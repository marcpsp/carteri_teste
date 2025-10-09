# Projeto Carteri Imóveis - Documentação Completa
**Última atualização:** 05 de Outubro de 2025

## 📋 INFORMAÇÕES DO PROJETO

### Empresa
- **Nome:** Carteri Imóveis
- **Segmento:** Imobiliária
- **Localização:** Goiânia - GO

### Referências
- **Site base:** https://www.zapimoveis.com.br/imobiliaria/243444/
- **Projeto atual:** Fasthome (base para desenvolvimento)
- **Data de início:** Outubro 2025

---

## 🏢 INFORMAÇÕES DA EMPRESA

### Identidade Visual
- **Nome:** Carteri Imóveis
- **Logo:** logo-carteri.jpg (implementado no Header)
- **Paleta de cores atual:**
  - **Terracota:** #C65D4A (cor principal da marca)
  - **Marrom Escuro:** #6B2C3A (cor secundária)
  - **Branco:** #FFFFFF (backgrounds)
  - **Preto:** #000000 (textos)

### Dados de Contato
- **Endereço:** R. 261-B, 238 - Setor Leste Universitário, Goiânia - GO, 74610-270
- **Telefone fixo:** (62) 3092-2072
- **WhatsApp 1:** (62) 99422-3979
- **WhatsApp 2:** (62) 99976-2708
- **Horário de funcionamento:** 08:00 às 18:00 (Segunda a Sexta-feira)
- **CRECI:** 7664-F-GO

### Equipe e Acessos
- **Total de usuários:** 4 pessoas
  - **Desenvolvedor:** Acesso total (você)
  - **Corretor:** 1 pessoa - Cadastrar/editar/excluir imóveis
  - **Secretárias:** 2 pessoas - Cadastrar/editar imóveis

---

## 🔄 ATUALIZAÇÕES IMPLEMENTADAS (Out/2025)

### ✅ Traduções Completas
- **Projeto 100% em Português Brasileiro**
- **Filtros de busca traduzidos:**
  - "Housing" → "Tipo de Imóvel"
  - "Price" → "Preço" (com Mínimo/Máximo)
  - "Size(M²)" → "Quartos" 
  - Novos filtros: "Banheiros" e "Vagas"

### ✅ Tipos de Imóveis Brasileiros
- Apartamento, Casa, Sobrado
- Cobertura, Casa de Condomínio
- Chácara, Terreno
- Loja, Sala Comercial

### ✅ Opções Adaptadas ao Mercado BR
- **Negócio:** Venda/Aluguel
- **Aquecimento:** Gás Natural, Energia Solar, Ar Condicionado Central
- **Financiamento:** Aceita/Não Aceita Financiamento
- **Mobiliado:** Mobiliado/Semi-Mobiliado/Não Mobiliado
- **Status:** Novo/Usado/Em Construção/Na Planta
- **Permuta:** Aceita/Não Aceita Permuta
- **Posição:** Norte, Sul, Leste, Oeste + intermediárias

### ✅ Identidade Visual Implementada
- Logo Carteri no Header
- Cores da marca aplicadas globalmente
- Footer com dados completos da empresa

### ✅ Dados de Demonstração (Mock Data)
- **Imóveis para Venda:**
  - Apartamento 3 Quartos - Setor Bueno (R$ 450.000)
  - Casa 4 Quartos - Jardins Lisboa (R$ 680.000)
  
- **Imóveis para Aluguel:**
  - Apartamento 2 Quartos - Setor Oeste (R$ 1.800/mês)
  - Sobrado 3 Quartos - Setor Sul (R$ 2.200/mês)

### ✅ Controle de Acesso - Botão "Anunciar"
- **Visitantes (não logados):** Botão "Anunciar" OCULTO
- **Usuários autenticados:** Botão "Anunciar" VISÍVEL
- **Locais onde aparece:** Header e Footer
- **Comportamento:** Condicionado pela autenticação do usuário

---

## 🏗️ ARQUITETURA DO SISTEMA

### Objetivo Principal
Criar um site básico de imobiliária com foco em:
- Cadastro e exibição de imóveis
- Área administrativa para gestão
- Interface pública para visitantes

### Funcionalidades Core
1. **Visualização pública** - Imóveis para venda e aluguel
2. **Área administrativa** - Sistema com login e níveis de acesso
3. **Gestão de imóveis** - CRUD completo
4. **Sistema de busca** - Filtros por preço, tipo, localização
5. **Galeria de fotos** - Para cada imóvel
6. **Informações de contato** - Integração com WhatsApp

---

## 🗺️ ESTRUTURA DE PÁGINAS

### Páginas Públicas
- **`/`** - Home com imóveis em destaque
- **`/imoveis-venda`** - Listagem de imóveis à venda
- **`/imoveis-aluguel`** - Listagem de imóveis para aluguel
- **`/imovel/[id]`** - Página de detalhes do imóvel
- **`/busca`** - Busca avançada com filtros
- **`/contato`** - Informações e formulário de contato
- **`/sobre`** - Sobre a Carteri Imóveis

### Área Administrativa
- **`/admin/login`** - Página de login
- **`/admin/dashboard`** - Painel administrativo principal
- **`/admin/imoveis`** - Lista e gerenciamento de imóveis
- **`/admin/cadastrar`** - Cadastro de novo imóvel
- **`/admin/editar/[id]`** - Edição de imóvel existente
- **`/admin/usuarios`** - Gerenciamento de usuários (apenas desenvolvedor)

---

## 🎯 NÍVEIS DE ACESSO

### 1. Desenvolvedor (Nível 4)
- Acesso total ao sistema
- Gerenciamento de usuários
- Configurações do sistema
- Backup e manutenção

### 2. Corretor (Nível 3)
- Cadastrar novos imóveis
- Editar imóveis existentes
- Excluir imóveis
- Visualizar relatórios

### 3. Secretárias (Nível 2)
- Cadastrar novos imóveis
- Editar imóveis existentes
- Visualizar lista de imóveis

### 4. Visitante (Nível 1)
- Visualizar imóveis públicos
- Usar sistema de busca
- Acessar informações de contato

---

## 💾 ESTRUTURA DO BANCO DE DADOS

### Tabelas Principais

#### `users` - Usuários do sistema
```sql
- id (UUID, primary key)
- name (VARCHAR)
- email (VARCHAR, unique)
- password (VARCHAR, encrypted)
- role (ENUM: 'admin', 'corretor', 'secretaria')
- active (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### `houses` - Imóveis (já existente, adaptação)
```sql
- id (UUID, primary key)
- title (VARCHAR)
- description (TEXT)
- price (DECIMAL)
- type (ENUM: 'venda', 'aluguel')
- category (ENUM: 'apartamento', 'casa', 'terreno', 'comercial')
- rooms (INTEGER)
- bathrooms (INTEGER)
- area_total (DECIMAL)
- area_util (DECIMAL)
- garage (INTEGER)
- address (VARCHAR)
- neighborhood (VARCHAR)
- city (VARCHAR)
- state (VARCHAR)
- zipcode (VARCHAR)
- lat (DECIMAL)
- lng (DECIMAL)
- images (JSON)
- featured (BOOLEAN)
- active (BOOLEAN)
- user_id (UUID, foreign key)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### `categories` - Tipos de imóveis
```sql
- id (UUID, primary key)
- name (VARCHAR)
- slug (VARCHAR)
- active (BOOLEAN)
```

#### `neighborhoods` - Bairros de Goiânia
```sql
- id (UUID, primary key)
- name (VARCHAR)
- slug (VARCHAR)
- city (VARCHAR)
- active (BOOLEAN)
```

---

## 🎨 COMPONENTES REUTILIZÁVEIS

### Layout Base
- **Header** - Navegação principal com logo
- **Footer** - Informações de contato e CRECI
- **Sidebar** - Filtros de busca
- **Breadcrumb** - Navegação de contexto

### Componentes de Imóveis
- **HouseCard** - Card resumido do imóvel
- **HouseGrid** - Grid de imóveis
- **HouseDetails** - Página completa do imóvel
- **ImageGallery** - Galeria de fotos
- **ContactForm** - Formulário de interesse

### Componentes Administrativos
- **AdminLayout** - Layout da área admin
- **HouseForm** - Formulário de cadastro/edição
- **UserManagement** - Gestão de usuários
- **Dashboard** - Painel com estatísticas

### Componentes de Navegação e Filtros
- **SearchFilters** - Filtros avançados
- **Pagination** - Paginação de resultados
- **SortBy** - Ordenação de resultados
- **MobileMenu** - Menu mobile

---

## 🔧 TECNOLOGIAS UTILIZADAS

### Frontend
- **Next.js** - Framework React
- **TypeScript** - Tipagem estática
- **Styled Components** - CSS-in-JS
- **React Hook Form** - Formulários
- **Next-i18next** - Internacionalização

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Banco de dados
- **Row Level Security** - Segurança de dados

### Outras
- **Leaflet** - Mapas interativos
- **Yup** - Validação de formulários
- **Next/Image** - Otimização de imagens

---

## 📊 STATUS ATUAL DO PROJETO (05/10/2025)

### ✅ CONCLUÍDO
1. **Tradução completa** para português brasileiro
2. **Identidade visual** Carteri implementada (logo + cores)
3. **Filtros de busca** adaptados ao mercado brasileiro
4. **Tipos de imóveis** brasileiros configurados
5. **Dados mockados** para demonstração (4 imóveis)
6. **Controle de acesso** - botão "Anunciar" condicionado
7. **Footer corporativo** com dados completos da empresa

### 🔄 EM DESENVOLVIMENTO
1. Campos de banheiros e vagas no banco de dados
2. Sistema de autenticação específico para imobiliária
3. Área administrativa para gestão de imóveis
4. Upload e gerenciamento de imagens

### 📋 PRÓXIMOS PASSOS SUGERIDOS
1. Implementar sistema de login para corretores/secretárias
2. Adicionar campos bathroom_count e parking_spaces ao banco
3. Criar área administrativa com diferentes níveis de acesso
4. Configurar upload de imagens reais dos imóveis
5. Implementar sistema de leads/contatos
6. Adicionar páginas institucionais (Sobre, Contato, etc.)

---

## 🎯 RESPOSTA ÀS SUAS DÚVIDAS

### ❓ "O cliente final verá o botão anunciar?"
**NÃO!** O botão "Anunciar" agora está condicionado:
- **Visitantes não logados:** ❌ Não veem o botão
- **Usuários autenticados (funcionários):** ✅ Veem o botão

### 📋 "Dados mockados implementados?"
**SIM!** 4 imóveis de demonstração criados:
- 2 para venda (Setor Bueno e Jardins Lisboa)  
- 2 para aluguel (Setor Oeste e Setor Sul)
- Com dados realistas de Goiânia
- Filtros funcionais

---

## 📊 STATUS DO PROJETO

### ✅ Concluído
- [x] Levantamento de requisitos
- [x] Definição da arquitetura
- [x] Especificação do banco de dados
- [x] Definição de níveis de acesso

### 🔄 Em Andamento
- [ ] Prototipagem e wireframes
- [ ] Design da identidade visual
- [ ] Definição do fluxo de navegação

### 📋 Pendente
- [ ] Desenvolvimento frontend
- [ ] Implementação do backend
- [ ] Sistema de autenticação
- [ ] Testes e validação
- [ ] Deploy e produção

---

## 📝 OBSERVAÇÕES E DECISÕES

### Decisões Arquiteturais
1. **Base no projeto Fasthome** - Reutilizar componentes existentes
2. **Supabase como backend** - Facilitar desenvolvimento e manutenção
3. **4 níveis de acesso** - Atender necessidade da equipe
4. **Foco em Goiânia** - Bairros específicos da cidade

### Próximos Passos Definidos
1. Criação de wireframes das páginas principais
2. Adaptação do design com cores da marca
3. Definição do fluxo de navegação completo
4. Prototipagem interativa

---

## 🔗 LINKS E RECURSOS

- **Projeto base:** d:\Valdir\fasthome\
- **Logo da empresa:** d:\Valdir\Logo\Logo 1.jpg
- **Documentação:** Este arquivo (PROJETO_CARTERI_IMOVEIS.md)

---

**Última atualização:** Outubro 2025  
**Próxima revisão:** Após criação dos wireframes