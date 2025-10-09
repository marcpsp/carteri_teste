# Guia de Design - Carteri Imóveis

## 🎨 IDENTIDADE VISUAL CARTERI

### Paleta de Cores Principal - BASEADA NA LOGO REAL
```css
:root {
  /* Cores Carteri Imóveis - Análise da Logo */
  --carteri-terracota: #C65D4A;        /* Laranja avermelhado/terracota das curvas */
  --carteri-terracota-light: #D4735F;  /* Versão mais clara do terracota */
  --carteri-marrom-escuro: #6B2C3A;    /* Marrom escuro/vinho amarronzado do degradê */
  --carteri-preto: #1A1A1A;            /* Preto do texto principal */
  --carteri-branco: #FFFFFF;           /* Branco do fundo */
  --carteri-cinza-escuro: #4A4A4A;     /* Cinza escuro do subtexto */
  --carteri-cinza-medio: #8A8A8A;      /* Cinza médio para elementos neutros */
  --carteri-cinza-claro: #F8F8F8;      /* Cinza muito claro para fundos */
  
  /* Aliases para facilitar uso */
  --carteri-primary: #C65D4A;          /* Cor primária - terracota */
  --carteri-secondary: #6B2C3A;        /* Cor secundária - marrom escuro */
  
  /* Cores de Apoio */
  --carteri-success: #28A745;          /* Verde para sucesso */
  --carteri-error: #DC3545;            /* Vermelho para erro */
  --carteri-warning: #FFC107;          /* Amarelo para aviso */
  --carteri-info: #17A2B8;             /* Azul para informação */
}
```

### Tipografia
```css
/* Fontes Carteri */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-secondary: 'Roboto', Arial, sans-serif;

/* Tamanhos */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

---

## 🏗️ COMPONENTES A ADAPTAR

### 1. Header/Navigation
**Mudanças necessárias:**
- Logo: Trocar para Logo 1.jpg da Carteri
- Cor de fundo: Branco com detalhes em laranja
- Menu: Links em preto, hover em laranja
- Botão admin: Laranja com texto branco

### 2. Footer
**Mudanças necessárias:**
- Cor de fundo: Preto
- Texto: Branco
- Links: Laranja no hover
- Informações: CRECI 7664-F-GO, endereço e telefones

### 3. Botões
**Hierarquia de botões:**
```css
/* Botão Primário - Laranja */
.btn-primary {
  background: var(--carteri-orange);
  color: var(--carteri-white);
  border: 2px solid var(--carteri-orange);
}

/* Botão Secundário - Outline Laranja */
.btn-secondary {
  background: transparent;
  color: var(--carteri-orange);
  border: 2px solid var(--carteri-orange);
}

/* Botão Terciário - Preto */
.btn-tertiary {
  background: var(--carteri-black);
  color: var(--carteri-white);
  border: 2px solid var(--carteri-black);
}
```

### 4. Cards de Imóveis
**Mudanças necessárias:**
- Border: Cinza claro
- Preço: Terracota e destaque
- Botões: Primário terracota, secundário outline
- Hover: Sombra terracota sutil

### 5. Formulários
**Mudanças necessárias:**
- Labels: Preto
- Inputs: Border cinza, focus laranja
- Placeholders: Cinza médio
- Mensagens de erro: Vermelho Carteri
- Botões de submit: Laranja

---

## 📁 ARQUIVOS A MODIFICAR

### Estilos Globais
1. `app/styles/global.ts` - Variáveis CSS globais
2. `app/styles/app.ts` - Estilos principais da aplicação

### Componentes de Layout
1. `app/patterns/Header/index.tsx` - Header principal
2. `app/patterns/Footer/index.tsx` - Footer com informações Carteri
3. `app/patterns/Nav/index.tsx` - Navegação

### Componentes de Interface
1. `app/components/Button/index.tsx` - Botões
2. `app/components/HouseCard/index.tsx` - Cards dos imóveis
3. `app/components/Input/index.tsx` - Campos de formulário

### Páginas Específicas
1. `pages/index.tsx` - Página inicial
2. `pages/for-sale.tsx` - Imóveis à venda
3. `pages/for-rental.tsx` - Imóveis para aluguel

---

## 🖼️ RECURSOS VISUAIS

### Logo
- **Arquivo:** `d:\Valdir\Logo\Logo 1.jpg`
- **Implementação:** Copiar para `public/images/logo-carteri.jpg`
- **Uso:** Header, footer, páginas de login

### Ícones
- **Estilo:** Outline em laranja ou preto
- **Tamanho padrão:** 24px
- **Especiais:** WhatsApp (verde), telefone (laranja)

### Imagens
- **Placeholder:** Cinza claro com logo Carteri
- **Proporção:** 4:3 para cards, 16:9 para banners
- **Qualidade:** Otimizada para web

---

## 🎯 IMPLEMENTAÇÃO POR ETAPAS

### Etapa 1: Variáveis CSS e Cores Base ✅ (PRÓXIMA)
- Criar arquivo de variáveis CSS
- Definir paleta de cores Carteri
- Configurar tipografia

### Etapa 2: Header e Footer
- Implementar logo Carteri
- Aplicar cores da marca
- Adicionar informações da empresa

### Etapa 3: Componentes Base
- Adaptar botões com nova paleta
- Modificar cards dos imóveis
- Ajustar formulários

### Etapa 4: Páginas Principais
- Página inicial com banner Carteri
- Listagens com filtros customizados
- Páginas de detalhes

### Etapa 5: Área Administrativa
- Layout admin com cores Carteri
- Dashboard personalizado
- Formulários de cadastro

---

## 📊 CHECKLIST DE IMPLEMENTAÇÃO

### Cores e Identidade
- [ ] Definir variáveis CSS com paleta Carteri
- [ ] Implementar logo em todos os componentes
- [ ] Adaptar tipografia para padrão da marca
- [ ] Criar sistema de ícones consistente

### Componentes
- [ ] Header com logo e navegação Carteri
- [ ] Footer com informações da empresa
- [ ] Botões com hierarquia de cores
- [ ] Cards de imóveis com estilo Carteri
- [ ] Formulários com validação visual

### Páginas
- [ ] Home page com banner da marca
- [ ] Listagens com filtros personalizados
- [ ] Detalhes do imóvel com layout Carteri
- [ ] Área administrativa customizada

### Responsividade
- [ ] Mobile-first com cores Carteri
- [ ] Tablet com adaptações necessárias
- [ ] Desktop com layout completo

---

## ✅ IMPLEMENTAÇÕES CONCLUÍDAS

### Etapa 1: Variáveis CSS e Cores Base ✅ ATUALIZADO
- [x] Paleta de cores CORRIGIDA baseada na logo real:
  - Terracota (#C65D4A) - Laranja avermelhado das curvas
  - Marrom escuro (#6B2C3A) - Vinho amarronzado do degradê  
  - Preto (#1A1A1A) - Texto principal
  - Branco (#FFFFFF) - Fundo
  - Cinza escuro (#4A4A4A) - Subtexto
- [x] Configurada tipografia Inter como fonte principal
- [x] Mantida compatibilidade com variáveis antigas

### Etapa 2: Header e Footer ✅ ATUALIZADO
- [x] Logo Carteri implementada (logo-carteri.jpg)
- [x] Header com cores corretas da marca:
  - Fundo branco com borda terracota
  - Botão "Anunciar" terracota com hover marrom escuro
  - Sombra sutil com tom da marca
- [x] Footer com design elegante:
  - Fundo preto com borda terracota
  - Informações da empresa em destaque
  - CRECI 7664-F-GO, endereço e telefones
  - Links com hover terracota e animação

### Recursos Implementados:
- **Logo:** d:\Valdir\fasthome\public\images\logo-carteri.jpg
- **Cores:** Paleta completa Carteri em CSS variables
- **Header:** Novo design com borda laranja
- **Footer:** Informações da empresa + CRECI 7664-F-GO
- **Botões:** Estilo primário laranja com hover

---

**Status Atual:** Etapas 1 e 2 concluídas ✅  
**Próximo passo:** Adaptação dos componentes base (botões, cards, formulários)