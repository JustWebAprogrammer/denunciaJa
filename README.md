# 🛡️ Denuncie Já — App de Denúncias Ciudadanas

Aplicação móvel desenvolvida em **React Native** com **Expo** para o sistema de denúncias ciudadanas da cidade de Luanda, Angola. Permite aos cidadãos reportar ocorrências (crime, catástrofes, resíduos, infraestrutura) de forma rápida, anónima e geolocalizada.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Estrutura do Projecto](#estrutura-do-projecto)
5. [Ecrãs da Aplicação](#ecrãs-da-aplicação)
6. [Guia de Instalação](#guia-de-instalação)
7. [Como Correr](#como-correr)
8. [Componentes](#componentes)
9. [Dados Mockados](#dados-mockados)
10. [Paleta de Cores](#paleta-de-cores)
11. [Navegação](#navegação)
12. [Próximos Passos](#próximos-passos)

---

## Visão Geral

O **Denuncie Já** é um protótipo funcional (demo) de um app Android para denúncias ciudadanas. O app permite:

- Visualizar ocorrências recentes numa feed
- Submeter novas denúncias com categoria, descrição, localização e fotos
- Visualizar alertas num mapa interactivo com pins coloridos
- Filtrar alertas por categoria

> **Nota:** Esta é uma versão demo com dados fictícios. Não há backend nem base de dados.

---

## Funcionalidades

### Ecrã 1 — Início
- Saudação personalizada ("Bem-vindo, Cidadão de Luanda")
- Botão principal "Denunciar agora" com navegação para o formulário
- Grid de 4 categorias (Crime, Catástrofe, Resíduos, Outros) com contagens
- Estatísticas do dia (total, em análise, resolvidos, comunidades activas)
- Feed de ocorrências recentes com dots coloridos por urgência
- NavBar inferior (Início, Mapa, Histórico, Perfil)

### Ecrã 2 — Nova Denúncia
- Indicador de passos (1→2→3)
- Grid de 6 categorias seleccionáveis (Crime, Catástrofe, Resíduos, Infraestrutura, Violência, Outros)
- Campo de descrição (TextInput multiline)
- Localização GPS mockada ("Mutamba, Luanda — GPS activo")
- Secção de foto/vídeo (mock, sem câmara real)
- Toggle "Denúncia anónima" (activo por defeito, interactividade visual)
- Botão "Enviar denúncia" com alerta de sucesso

### Ecrã 3 — Mapa de Alertas
- Mapa simulado com ruas e edifícios
- Pins coloridos por categoria (vermelho=crime, âmbar=catástrofe, azul=resíduos, verde=infraestrutura)
- Filtros horizontais (Todos, Crime, Catástrofe, Resíduos, Infraestrutura)
- Popup ao tocar num pin (título, localização, tempo, badge de categoria)
- Contador de alertas no canto superior direito
- Legenda de cores no canto inferior esquerdo

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| React Native | 0.85.3 | Framework móvel cross-platform |
| Expo | SDK 56 | Plataforma de desenvolvimento React Native |
| React Navigation | 6.x | Navegação entre ecrãs (Stack + Bottom Tabs) |
| React | 19.2.3 | Bibliologia de interfaces |
| react-native-web | 0.21+ | Suporte para versão web no navegador |

---

## Estrutura do Projecto

```
denuncie-ja-app/
├── App.js                          # Entry point + configuração de navegação
├── app.json                        # Configuração do Expo
├── package.json                    # Dependências do projecto
├── index.js                        # Registo do componente principal
├── assets/                         # Imagens e ícones
├── src/
│   ├── theme/
│   │   └── colors.js               # Paleta de cores do app
│   ├── data/
│   │   └── mockData.js             # Dados fictícios (alertas, categorias, pins)
│   ├── components/
│   │   ├── ShieldIcon.js           # Ícone do escudo (logo do app)
│   │   ├── TopBar.js               # Barra vermelha do topo (reutilizável)
│   │   ├── NavBar.js               # Barra inferior de navegação
│   │   ├── CategoryCard.js         # Card de categoria + versão seleccionável
│   │   ├── AlertCard.js            # Card de ocorrência no feed
│   │   └── StepIndicator.js        # Indicador de passos do formulário
│   └── screens/
│       ├── HomeScreen.js           # Ecrã 1 — Início
│       ├── ReportScreen.js         # Ecrã 2 — Submissão de denúncia
│       └── MapScreen.js            # Ecrã 3 — Mapa de alertas
└── node_modules/                   # Dependências instaladas
```

---

## Ecrãs da Aplicação

### HomeScreen (Início)
- **TopBar:** Barra vermelha (#C0281C) com logo "Denuncie Já" e botão de notificações
- **Saudação:** "Bem-vindo, Cidadão de Luanda"
- **CTA Principal:** Botão vermelho "Denunciar agora" com escudo e seta
- **Categorias:** Grid 2x2 com cards coloridos (Crime=vermelho, Catástrofe=âmbar, Resíduos=azul, Outros=cinza)
- **Estatísticas:** Card branco com totais do dia
- **Feed:** Lista de AlertCards com dots coloridos, badges de categoria, tempo e localização
- **NavBar:** 4 tabs (Início, Mapa, Histórico, Perfil)

### ReportScreen (Nova Denúncia)
- **TopBar:** Barra vermelha com botão ← voltar e título "Nova denúncia"
- **StepIndicator:** 3 passos (1=activo/preto, 2=próximo/cinza, 3=pendente)
- **Categoria:** Grid 2x3 de botões seleccionáveis com borda vermelha quando activo
- **Descrição:** TextInput multiline com placeholder
- **Localização:** Card com dot vermelho, endereço mock e badge "GPS activo" verde
- **Foto:** Botão de adicionar com ícone de câmara + dica
- **Anónimo:** Toggle switch vermelho (activado por defeito)
- **Enviar:** Botão vermelho com escudo e texto "Enviar denúncia"

### MapScreen (Mapa)
- **TopBar:** Barra vermelha com logo + título "Mapa de alertas" + botão "Luanda ▾"
- **Filtros:** Chips horizontais scrolláveis com contagens
- **Mapa:** Fundo verde (#D4E4C8) com ruas brancas e edifícios verdes claros
- **Pins:** Marcadores coloridos por categoria com círculo branco ao centro
- **Popup:** Card branco ao tocar num pin com título, localização, tempo e badge
- **Contador:** Card "X alertas" no canto superior direito
- **Legenda:** Card no canto inferior esquerdo com dots coloridos

---

## Guia de Instalação

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18 ou superior)
- npm (v9 ou superior)
- [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) (para Android)
- Navegador web (para teste web)

### Passos

1. **Clonar ou navegar até ao projecto:**
   ```bash
   cd c:\dev\alert\denuncie-ja-app
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Instalar dependências de navegação (se não estiverem incluídas):**
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
   ```

4. **Instalar dependências web (opcional):**
   ```bash
   npm install react-dom react-native-web
   ```

---

## Como Correr

### No navegador (web)
```bash
npx expo start --web
```
O app abre em http://localhost:19006

### No telemóvel (Android)
1. Instala o app **Expo Go** na Play Store
2. Corre:
   ```bash
   npx expo start
   ```
3. Scaneia o QR code com o Expo Go

### No emulador Android
```bash
npx expo start --android
```

---

## Componentes

### ShieldIcon
- **Props:** `size` (número), `color` (cor CSS)
- **Descrição:** Escudo estilizado com barra vertical e círculo
- **Uso:** `<ShieldIcon size={28} color="#FFFFFF" />`

### TopBar
- **Props:** `title`, `subtitle`, `showBack` (boolean), `onBack` (função), `showBell` (boolean)
- **Descrição:** Barra vermelha do topo. Mostra logo "Denuncie Já" ou botão voltar + título
- **Uso:** `<TopBar showBell />` ou `<TopBar title="Nova denúncia" showBack onBack={goBack} />`

### NavBar
- **Props:** `activeTab` (string: 'home'|'map'|'history'|'profile'), `onTabPress` (função)
- **Descrição:** Barra inferior com 4 tabs (emoji + label). Tab activa fica vermelha
- **Uso:** `<NavBar activeTab="home" onTabPress={handleTab} />`

### CategoryCard
- **Props:** `category` (objecto), `onPress` (função)
- **Descrição:** Card de categoria com emoji, nome e contagem
- **Exportação adicional:** `CategorySelectable` — versão seleccionável com borda

### AlertCard
- **Props:** `alert` (objecto), `onPress` (função)
- **Descrição:** Card de ocorrência com dot colorido, título, badge de categoria, tempo e localização

### StepIndicator
- **Props:** `currentStep` (número), `totalSteps` (número)
- **Descrição:** Indicador visual de progresso (1→2→3) com cores (vermelho=feito, preto=activo, cinza=pendente)

---

## Dados Mockados

Todos os dados são fictícios e estão em `src/data/mockData.js`:

### CATEGORIAS
| ID | Nome | Emoji | Cor | Contagem |
|---|---|---|---|---|
| crime | Crime | 🚨 | Vermelho | 24 |
| catastrofe | Catástrofe | 🌊 | Âmbar | 3 |
| residuos | Resíduos | 🗑️ | Azul | 11 |
| infraestrutura | Infraestrutura | 🔧 | Verde | 5 |
| violencia | Violência | ✋ | Rosa | 8 |
| outros | Outros | 📌 | Cinza | 7 |

### RECENT_ALERTS (6 alertas)
- Roubo a mão armada — Mutamba (crime, há 8 min)
- Inundação — Bairro Rangel (catástrofe, há 22 min)
- Lixo acumulado — Av. 21 de Janeiro (resíduos, há 1h)
- Assalto — Rua Major Kanhangulo (crime, há 1h 30min)
- Falta de água — Viana (infraestrutura, há 2h)
- Água parada — Cazenga (catástrofe, há 3h)

### MAP_PINS (7 pins)
- Posições percentuais no mapa (x%, y%)
- Cada pin tem: título, categoria, localização, tempo, posição

### STATS
- Total de alertas: 45
- Em análise: 18
- Resolvidos: 27
- Comunidades activas: 12

---

## Paleta de Cores

| Cor | Código | Uso |
|---|---|---|
| Vermelho primário | `#C0281C` | TopBar, CTA, botões, nav activa |
| Fundo areia | `#F5F3EE` | Corpo do app (evita branco frio) |
| Branco | `#FFFFFF` | Cards, formulários, navbar |
| Texto escuro | `#1A1A1A` | Títulos, texto principal |
| Texto cinza | `#888888` | Labels, meta informação |
| Texto desactivado | `#B4B2A9` | Nav bar inactiva |
| Borda | `#E8E6E0` | Bordas suaves dos cards |
| Crime | `#FCEBEB` / `#791F1F` | Fundo / texto |
| Catástrofe | `#FFF4E0` / `#7A4A00` | Fundo / texto |
| Resíduos | `#E6F1FB` / `#0C447C` | Fundo / texto |
| Infraestrutura | `#EAF3DE` / `#27500A` | Fundo / texto |
| Mapa fundo | `#D4E4C8` | Fundo verde do mapa |
| Mapa edifícios | `#BDD1B0` | Rectângulos dos edifícios |

---

## Navegação

A app usa **React Navigation** com duas estruturas:

### Stack Navigator (navegação entre ecrãs)
```
Home (ecrã principal)
├── Report (ecrã de denúncia)  ← botão "Denunciar agora" ou nav
└── Map (ecrã de mapa)         ← NavBar tab "Mapa"
```

### Fluxo do utilizador
1. **Abre o app** → vê o HomeScreen com feed e categorias
2. **Toca "Denunciar agora"** → vai para ReportScreen
3. **Preenche o formulário** → selecciona categoria, escreve descrição
4. **Toca "Enviar"** → vê alerta de sucesso → volta ao Home
5. **Toca "Mapa" na NavBar** → vai para MapScreen
6. **Toca num pin** → vê popup com detalhes
7. **Usa filtros** → filtra pins por categoria
8. **Toca "Início" na NavBar** → volta ao Home

---

## Próximos Passos

Para evoluir this demo numa app de produção:

1. **Backend/API**
   - Criar API REST (Node.js/Express ou Django)
   - Base de dados (PostgreSQL ou Firebase)
   - Autenticação de utilizadores

2. **Funcionalidades reais**
   - GPS real (expo-location)
   - Câmara real (expo-camera)
   - Upload de fotos para servidor
   - Push notifications

3. **Mapa real**
   - Integrar Google Maps ou Mapbox
   - Pins dinâmicos da base de dados
   - Rota até à ocorrência

4. **Publicação**
   - Configurar app.json (ícone, splash screen, nome)
   - Criar conta no Google Play Console
   - Gerar APK/AAB com `eas build`
   - Publicar na Play Store

5. **Melhorias de UI**
   - Animações de transição
   - Dark mode
   - Acessibilidade
   - Suporte a múltiplos idiomas (PT/EN)

---

## Autor

Projecto desenvolvido como protótipo/demo do sistema **Denuncie Já** para a cidade de Luanda, Angola.

---

## Licença

Este é um projecto de demonstração. Todos os dados são fictícios.