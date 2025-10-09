# Wireframes Carteri Imóveis - Páginas Principais

## 🎨 PALETA DE CORES DEFINIDA
- **Primária:** Laranja (#FF6B35 ou similar)
- **Secundária:** Branco (#FFFFFF)
- **Complementar:** Preto (#000000)
- **Cinza claro:** #F5F5F5 (backgrounds)
- **Cinza escuro:** #333333 (textos)

---

## 📱 WIREFRAME 1: PÁGINA INICIAL (/)

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                               │
│  [LOGO CARTERI]    VENDA  ALUGUEL  BUSCAR  SOBRE  CONTATO  │
│                                                [ADMIN]      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     BANNER PRINCIPAL                        │
│           Encontre o imóvel dos seus sonhos                 │
│                  em Goiânia - GO                            │
│                                                             │
│  [BUSCA RÁPIDA]                                             │
│  Tipo: [DROPDOWN] Bairro: [DROPDOWN] Preço: [RANGE] [BUSCAR]│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   IMÓVEIS EM DESTAQUE                       │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   [FOTO]    │ │   [FOTO]    │ │   [FOTO]    │          │
│  │Casa 3 quartos│ │Apto 2 quartos│ │Terreno 300m²│          │
│  │R$ 450.000   │ │R$ 320.000   │ │R$ 180.000   │          │
│  │Setor Sul    │ │Centro       │ │Vila Aurora  │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
│                                                             │
│                    [VER TODOS]                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SOBRE A CARTERI                          │
│                                                             │
│  CRECI 7664-F-GO | Mais de X anos de mercado              │
│  Especialistas em imóveis em Goiânia                       │
│                                                             │
│  [FALE CONOSCO]  [WHATSAPP: (62) 99422-3979]              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        FOOTER                               │
│  Carteri Imóveis - CRECI 7664-F-GO                        │
│  R. 261-B, 238 - Setor Leste Universitário, Goiânia-GO    │
│  (62) 3092-2072 | (62) 99422-3979 | (62) 99976-2708      │
│  Seg-Sex: 08:00-18:00                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏠 WIREFRAME 2: LISTAGEM DE IMÓVEIS (/imoveis-venda)

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                               │
│  [LOGO CARTERI]    VENDA  ALUGUEL  BUSCAR  SOBRE  CONTATO  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FILTROS          │               RESULTADOS                │
│                   │                                         │
│  Tipo de imóvel   │  ┌─────────────────────────────────────┐ │
│  [x] Casa         │  │ [FOTO]    Casa 3 quartos           │ │
│  [x] Apartamento  │  │           R$ 450.000               │ │
│  [x] Terreno      │  │           3 quartos, 2 banheiros   │ │
│                   │  │           Setor Sul - Goiânia      │ │
│  Faixa de preço   │  │           [VER DETALHES] [CONTATO] │ │
│  Min: [_______]   │  └─────────────────────────────────────┘ │
│  Max: [_______]   │                                         │
│                   │  ┌─────────────────────────────────────┐ │
│  Bairro           │  │ [FOTO]    Apartamento Centro        │ │
│  [DROPDOWN]       │  │           R$ 320.000               │ │
│                   │  │           2 quartos, 1 banheiro    │ │
│  Quartos          │  │           Centro - Goiânia         │ │
│  [1][2][3][4+]    │  │           [VER DETALHES] [CONTATO] │ │
│                   │  └─────────────────────────────────────┘ │
│  [APLICAR FILTROS]│                                         │
│                   │               [1][2][3]...[PRÓXIMA]     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏡 WIREFRAME 3: DETALHES DO IMÓVEL (/imovel/[id])

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                               │
│  [LOGO CARTERI]    VENDA  ALUGUEL  BUSCAR  SOBRE  CONTATO  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│        GALERIA DE FOTOS           │     INFORMAÇÕES         │
│  ┌─────────────────────────────┐   │                         │
│  │      FOTO PRINCIPAL         │   │  Casa 3 quartos        │
│  │        (GRANDE)             │   │  R$ 450.000            │
│  │                             │   │                         │
│  └─────────────────────────────┘   │  📍 Setor Sul, Goiânia │
│                                     │                         │
│  [THUMB][THUMB][THUMB][THUMB]       │  🏠 3 quartos          │
│                                     │  🚿 2 banheiros        │
│                                     │  📏 150m² total        │
│                                     │  🚗 2 vagas garagem    │
│                                     │                         │
│                                     │  [ENTRAR EM CONTATO]   │
│                                     │  [WHATSAPP]            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        DESCRIÇÃO                            │
│                                                             │
│  Excelente casa no Setor Sul, próximo a escolas e          │
│  comércio. Imóvel em ótimo estado de conservação...        │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CARACTERÍSTICAS        │           LOCALIZAÇÃO             │
│                         │                                   │
│  ✓ Área de lazer        │         [MAPA INTERATIVO]         │
│  ✓ Jardim               │                                   │
│  ✓ Churrasqueira        │                                   │
│  ✓ Portão eletrônico    │                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔐 WIREFRAME 4: ÁREA ADMINISTRATIVA (/admin/dashboard)

```
┌─────────────────────────────────────────────────────────────┐
│                    HEADER ADMIN                             │
│  [LOGO CARTERI]  Dashboard | Bem-vindo, [NOME]  [SAIR]     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MENU LATERAL      │            PAINEL PRINCIPAL            │
│                    │                                        │
│  📊 Dashboard      │  ┌──────────┐ ┌──────────┐ ┌─────────┐ │
│  🏠 Imóveis        │  │Total     │ │Vendas    │ │Aluguéis │ │
│  ➕ Novo Imóvel   │  │Imóveis   │ │Este Mês  │ │Este Mês │ │
│  👥 Usuários*      │  │   45     │ │    3     │ │    7    │ │
│  ⚙️ Configurações  │  └──────────┘ └──────────┘ └─────────┘ │
│                    │                                        │
│  *Apenas para Dev  │              ÚLTIMOS IMÓVEIS          │
│                    │                                        │
│                    │  ┌─────────────────────────────────────┐ │
│                    │  │[THUMB] Casa 3Q - Setor Sul [EDITAR]│ │
│                    │  │[THUMB] Apto 2Q - Centro    [EDITAR]│ │
│                    │  │[THUMB] Terreno - V.Aurora  [EDITAR]│ │
│                    │  └─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 WIREFRAME 5: CADASTRO DE IMÓVEL (/admin/cadastrar)

```
┌─────────────────────────────────────────────────────────────┐
│                    HEADER ADMIN                             │
│  [LOGO CARTERI]  Cadastrar Imóvel           [VOLTAR] [SAIR] │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   FORMULÁRIO DE CADASTRO                    │
│                                                             │
│  INFORMAÇÕES BÁSICAS                                        │
│  Título: [________________________________]                │
│  Tipo: [VENDA ▼]  Categoria: [CASA ▼]                     │
│  Preço: [____________]                                      │
│                                                             │
│  CARACTERÍSTICAS                                            │
│  Quartos: [__] Banheiros: [__] Garagem: [__]              │
│  Área Total: [____m²] Área Útil: [____m²]                 │
│                                                             │
│  LOCALIZAÇÃO                                                │
│  Endereço: [_______________________________________]       │
│  Bairro: [SETOR SUL ▼] CEP: [_______]                     │
│                                                             │
│  DESCRIÇÃO                                                  │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                                                         ││
│  │                                                         ││
│  └─────────────────────────────────────────────────────────┘│
│                                                             │
│  FOTOS                                                      │
│  [UPLOAD] [UPLOAD] [UPLOAD] [UPLOAD]                       │
│                                                             │
│           [SALVAR RASCUNHO] [PUBLICAR IMÓVEL]              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 WIREFRAME 6: VERSÃO MOBILE (RESPONSIVO)

```
┌─────────────────────────────┐
│        HEADER MOBILE        │
│ [☰] [LOGO CARTERI]    [🔍] │
└─────────────────────────────┘

┌─────────────────────────────┐
│         MENU MOBILE         │
│  🏠 Início                  │
│  🏢 Imóveis à Venda        │
│  🏠 Imóveis para Aluguel   │
│  🔍 Buscar                 │
│  📞 Contato                │
│  ℹ️ Sobre                  │
└─────────────────────────────┘

┌─────────────────────────────┐
│       CARD IMÓVEL           │
│  ┌─────────────────────────┐ │
│  │       [FOTO]            │ │
│  └─────────────────────────┘ │
│  Casa 3 quartos             │
│  R$ 450.000                 │
│  Setor Sul - Goiânia        │
│  [VER MAIS] [WHATSAPP]      │
└─────────────────────────────┘
```

---

## 🎯 OBSERVAÇÕES DE DESIGN

### Elementos Visuais Principais
1. **Logo Carteri** sempre visível no header
2. **Cores laranja** para CTAs e destaques
3. **WhatsApp** sempre acessível
4. **CRECI** sempre visível no footer
5. **Telefones** em destaque

### Funcionalidades Especiais
1. **Busca rápida** na home
2. **Filtros avançados** nas listagens
3. **Galeria de fotos** nos detalhes
4. **Mapa interativo** para localização
5. **Contato direto** via WhatsApp

### Responsividade
- **Desktop:** Layout em grid
- **Tablet:** Adaptação dos filtros
- **Mobile:** Menu hambúrguer e cards stack

---

**Status:** Wireframes criados ✅  
**Próximo passo:** Revisão e ajustes conforme feedback