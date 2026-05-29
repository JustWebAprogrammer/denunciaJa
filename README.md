# Denuncie Ja - App de Denuncias Ciudadanas

Aplicacao movel desenvolvida em **React Native** com **Expo** para o sistema de denuncias ciudadanas da cidade de Luanda, Angola. Permite aos cidadaos reportar ocorrencias (crime, catastrofes, residuos, infraestrutura) de forma rapida, anonima e geolocalizada.

**Repositorio:** https://github.com/JustWebAprogrammer/denunciaJa

---

## Indice

1. [Visao Geral](#visao-geral)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Estrutura do Projecto](#estrutura-do-projecto)
5. [Ecraos da Aplicacao](#ecraos-da-aplicacao)
6. [Guia de Instalacao](#guia-de-instalacao)
7. [Como Correr](#como-correr)
8. [Componentes](#componentes)
9. [Dados Mockados](#dados-mockados)
10. [Paleta de Cores](#paleta-de-cores)
11. [Navegacao](#navegacao)
12. [Branches](#branches)
13. [Proximos Passos](#proximos-passos)

---

## Visao Geral

O **Denuncie Ja** e um prototipo funcional (demo) de um app Android para denuncias ciudadanas. O app permite:

- Visualizar ocorrencias recentes numa feed
- Submeter novas denuncias com categoria, descricao, localizacao e fotos
- Visualizar alertas num mapa interactivo com pins coloridos
- Filtrar alertas por categoria

> **Nota:** Esta e uma versao demo com dados ficticios. Nao ha backend nem base de dados.

---

## Funcionalidades

### Ecrao 1 - Inicio
- Saudacao personalizada ("Bem-vindo, Cidadao de Luanda")
- Botao principal "Denunciar agora" com navegacao para o formulario
- Grid de 4 categorias (Crime, Catastrofe, Residuos, Outros) com contagens
- Estatisticas do dia (total, em analise, resolvidos, comunidades activas)
- Feed de ocorrencias recentes com dots coloridos por urgencia
- NavBar inferior (Inicio, Mapa, Historico, Perfil)

### Ecrao 2 - Nova Denuncia
- Indicador de passos (1 para 2 para 3)
- Grid de 6 categorias seleccionaveis (Crime, Catastrofe, Residuos, Infraestrutura, Violencia, Outros)
- Campo de descricao (TextInput multiline)
- Localizacao GPS mockada ("Mutamba, Luanda - GPS activo")
- Secao de foto/video (mock, sem camera real)
- Toggle "Denuncia anonima" (activo por defeito, interactividade visual)
- Botao "Enviar denuncia" com alerta de sucesso

### Ecrao 3 - Mapa de Alertas
- Mapa simulado com ruas e edificios
- Pins coloridos por categoria (vermelho=crime, ambar=catastrofe, azul=residuos, verde=infraestrutura)
- Filtros horizontais (Todos, Crime, Catastrofe, Residuos, Infraestrutura)
- Popup ao tocar num pin (titulo, localizacao, tempo, badge de categoria)
- Contador de alertas no canto superior direito
- Legenda de cores no canto inferior esquerdo

---

## Tecnologias Utilizadas

| Tecnologia | Versao | Descricao |
|---|---|---|
| React Native | 0.85.3 | Framework movel cross-platform |
| Expo | SDK 56 | Plataforma de desenvolvimento React Native |
| React Navigation | 7.x | Navegacao entre ecraos (Stack + Bottom Tabs) |
| React | 19.2.3 | Biblioteca de interfaces |
| react-native-web | 0.21+ | Suporte para versao web no navegador |

---

## Estrutura do Projecto

```
denuncie-ja-app/
├── App.js                          # Entry point + configuracao de navegacao
├── app.json                        # Configuracao do Expo
├── package.json                    # Dependencias do projecto
├── index.js                        # Registo do componente principal
├── README.md                       # Esta documentacao
├── assets/                         # Imagens e icones
├── src/
│   ├── theme/
│   │   └── colors.js               # Paleta de cores do app
│   ├── data/
│   │   └── mockData.js             # Dados ficticios (alertas, categorias, pins)
│   ├── components/
│   │   ├── ShieldIcon.js           # Icone do escudo (logo do app)
│   │   ├── TopBar.js               # Barra vermelha do topo (reutilizavel)
│   │   ├── NavBar.js               # Barra inferior de navegacao
│   │   ├── CategoryCard.js         # Card de categoria + versao seleccionavel
│   │   ├── AlertCard.js            # Card de ocorrencia no feed
│   │   └── StepIndicator.js        # Indicador de passos do formulario
│   └── screens/
│       ├── HomeScreen.js           # Ecrao 1 - Inicio
│       ├── ReportScreen.js         # Ecrao 2 - Submissao de denuncia
│       └── MapScreen.js            # Ecrao 3 - Mapa de alertas
└── node_modules/                   # Dependencias instaladas
```

---

## Ecraos da Aplicacao

### HomeScreen (Inicio)
- **TopBar:** Barra vermelha (#C0281C) com logo "Denuncie Ja" e botao de notificacoes
- **Saudacao:** "Bem-vindo, Cidadao de Luanda"
- **CTA Principal:** Botao vermelho "Denunciar agora" com escudo e seta
- **Categorias:** Grid 2x2 com cards coloridos (Crime=vermelho, Catastrofe=ambar, Residuos=azul, Outros=cinza)
- **Estatisticas:** Card branco com totais do dia
- **Feed:** Lista de AlertCards com dots coloridos, badges de categoria, tempo e localizacao
- **NavBar:** 4 tabs (Inicio, Mapa, Historico, Perfil)

### ReportScreen (Nova Denuncia)
- **TopBar:** Barra vermelha com botao voltar e titulo "Nova denuncia"
- **StepIndicator:** 3 passos (1=activo/preto, 2=proximo/cinza, 3=pendente)
- **Categoria:** Grid 2x3 de botoes seleccionaveis com borda vermelha quando activo
- **Descricao:** TextInput multiline com placeholder
- **Localizacao:** Card com dot vermelho, endereco mock e badge "GPS activo" verde
- **Foto:** Botao de adicionar com sinal "+" + dica
- **Anonimo:** Toggle switch vermelho (activado por defeito)
- **Enviar:** Botao vermelho com escudo e texto "Enviar denuncia"

### MapScreen (Mapa)
- **TopBar:** Barra vermelha com logo + titulo "Mapa de alertas" + botao "Luanda"
- **Filtros:** Chips horizontais scrollaveis com contagens
- **Mapa:** Fundo verde (#D4E4C8) com ruas brancas e edificios verdes claros
- **Pins:** Marcadores coloridos por categoria com circulo branco ao centro
- **Popup:** Card branco ao tocar num pin com titulo, localizacao, tempo e badge
- **Contador:** Card "X alertas" no canto superior direito
- **Legenda:** Card no canto inferior esquerdo com dots coloridos

---

## Guia de Instalacao

### Pre-requisitos
- [Node.js](https://nodejs.org/) (v18 ou superior)
- npm (v9 ou superior)
- [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) (para Android)
- Navegador web (para teste web)

### Passos

1. **Clonar o repositorio:**
   ```bash
   git clone https://github.com/JustWebAprogrammer/denunciaJa.git
   cd denunciaJa
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Instalar dependencias de navegacao (se nao estiverem incluidas):**
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
   ```

4. **Instalar dependencias web (opcional):**
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

### No telemovel (Android)
1. Instala o app **Expo Go** na Play Store
2. Corre:
   ```bash
   npx expo start --tunnel
   ```
3. Scaneia o QR code com o Expo Go

### No emulador Android
```bash
npx expo start --android
```

> **Nota:** O `--tunnel` e necessario se o telemovel nao esta na mesma rede WiFi do computador, ou se o firewall bloqueia a ligacao directa.

---

## Componentes

### ShieldIcon
- **Props:** `size` (numero), `color` (cor CSS)
- **Descricao:** Escudo estilizado com barra vertical e circulo
- **Uso:** `<ShieldIcon size={28} color="#FFFFFF" />`

### TopBar
- **Props:** `title`, `subtitle`, `showBack` (boolean), `onBack` (funcao), `showBell` (boolean)
- **Descricao:** Barra vermelha do topo. Mostra logo "Denuncie Ja" ou botao voltar + titulo
- **Uso:** `<TopBar showBell />` ou `<TopBar title="Nova denuncia" showBack onBack={goBack} />`

### NavBar
- **Props:** `activeTab` (string: 'home'|'map'|'history'|'profile'), `onTabPress` (funcao)
- **Descricao:** Barra inferior com 4 tabs (texto + label). Tab activa fica vermelha
- **Uso:** `<NavBar activeTab="home" onTabPress={handleTab} />`

### CategoryCard
- **Props:** `category` (objecto), `onPress` (funcao)
- **Descricao:** Card de categoria com nome e contagem
- **Exportacao adicional:** `CategorySelectable` - versao seleccionavel com borda

### AlertCard
- **Props:** `alert` (objecto), `onPress` (funcao)
- **Descricao:** Card de ocorrencia com dot colorido, titulo, badge de categoria, tempo e localizacao

### StepIndicator
- **Props:** `currentStep` (numero), `totalSteps` (numero)
- **Descricao:** Indicador visual de progresso (1 para 2 para 3) com cores (vermelho=feito, preto=activo, cinza=pendente)

---

## Dados Mockados

Todos os dados sao ficticios e estao em `src/data/mockData.js`:

### CATEGORIAS
| ID | Nome | Cor | Contagem |
|---|---|---|---|
| crime | Crime | Vermelho | 24 |
| catastrofe | Catastrofe | Ambar | 3 |
| residuos | Residuos | Azul | 11 |
| infraestrutura | Infraestrutura | Verde | 5 |
| violencia | Violencia | Rosa | 8 |
| outros | Outros | Cinza | 7 |

### RECENT_ALERTS (6 alertas)
- Roubo a mao armada - Mutamba (crime, ha 8 min)
- Inundacao - Bairro Rangel (catastrofe, ha 22 min)
- Lixo acumulado - Av. 21 de Janeiro (residuos, ha 1h)
- Assalto - Rua Major Kanhangulo (crime, ha 1h 30min)
 falta de agua - Viana (infraestrutura, ha 2h)
- Agua parada - Cazenga (catastrofe, ha 3h)

### MAP_PINS (7 pins)
- Posicoes percentuais no mapa (x%, y%)
- Cada pin tem: titulo, categoria, localizacao, tempo, posicao

### STATS
- Total de alertas: 45
- Em analise: 18
- Resolvidos: 27
- Comunidades activas: 12

---

## Paleta de Cores

| Cor | Codigo | Uso |
|---|---|---|
| Vermelho primario | `#C0281C` | TopBar, CTA, botoes, nav activa |
| Fundo areia | `#F5F3EE` | Corpo do app (evita branco frio) |
| Branco | `#FFFFFF` | Cards, formularios, navbar |
| Texto escuro | `#1A1A1A` | Titulos, texto principal |
| Texto cinza | `#888888` | Labels, meta informacao |
| Texto desactivado | `#B4B2A9` | Nav bar inactiva |
| Borda | `#E8E6E0` | Bordas suaves dos cards |
| Crime | `#FCEBEB` / `#791F1F` | Fundo / texto |
| Catastrofe | `#FFF4E0` / `#7A4A00` | Fundo / texto |
| Residuos | `#E6F1FB` / `#0C447C` | Fundo / texto |
| Infraestrutura | `#EAF3DE` / `#27500A` | Fundo / texto |
| Mapa fundo | `#D4E4C8` | Fundo verde do mapa |
| Mapa edificios | `#BDD1B0` | Rectangulos dos edificios |

---

## Navegacao

A app usa **React Navigation** com duas estruturas:

### Stack Navigator (navegacao entre ecraos)
```
Home (ecrao principal)
├── Report (ecrao de denuncia)  <- botao "Denunciar agora" ou nav
└── Map (ecrao de mapa)         <- NavBar tab "Mapa"
```

### Fluxo do utilizador
1. **Abre o app** - ve o HomeScreen com feed e categorias
2. **Toca "Denunciar agora"** - vai para ReportScreen
3. **Preenche o formulario** - selecciona categoria, escreve descricao
4. **Toca "Enviar"** - ve alerta de sucesso - volta ao Home
5. **Toca "Mapa" na NavBar** - vai para MapScreen
6. **Toca num pin** - ve popup com detalhes
7. **Usa filtros** - filtra pins por categoria
8. **Toca "Inicio" na NavBar** - volta ao Home

---

## Branches

O repositorio tem duas branches:

| Branch | Descricao | SDK |
|---|---|---|
| `master` | Versao principal (producao) | Expo SDK 56 |
| `sdk-54` | Copia para downgrade futuro | Expo SDK 54 |

### Para trocar de branch:
```bash
git checkout master      # versao principal
git checkout sdk-54      # versao com SDK 54
```

---

## Proximos Passos

Para evoluir this demo numa app de producao:

1. **Backend/API**
   - Criar API REST (Node.js/Express ou Django)
   - Base de dados (PostgreSQL ou Firebase)
   - Autenticacao de utilizadores

2. **Funcionalidades reais**
   - GPS real (expo-location)
   - Camera real (expo-camera)
   - Upload de fotos para servidor
   - Push notifications

3. **Mapa real**
   - Integrar Google Maps ou Mapbox
   - Pins dinamicos da base de dados
   - Rota ate a ocorrencia

4. **Publicacao**
   - Configurar app.json (icone, splash screen, nome)
   - Criar conta no Google Play Console
   - Gerar APK/AAB com `eas build`
   - Publicar na Play Store

5. **Melhorias de UI**
   - Animacoes de transicao
   - Dark mode
   - Acessibilidade
   - Suporte a multiplos idiomas (PT/EN)

---

## Autor

Projecto desenvolvido como prototipo/demo do sistema **Denuncie Ja** para a cidade de Luanda, Angola.

**GitHub:** https://github.com/JustWebAprogrammer/denunciaJa

---

## Licensa

Este e um projecto de demonstracao. Todos os dados sao ficticios.