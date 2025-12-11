🎬 CineWeb - Gestão de Cinema
Projeto Acadêmico | Disciplina: Desenvolvimento Web Frontend

O CineWeb é uma Single Page Application (SPA) robusta, projetada para modernizar a administração de complexos de cinema. O sistema centraliza o gerenciamento de catálogo, infraestrutura de salas, grade de horários e operações de bilheteria em uma interface fluida e responsiva.

🚀 Tecnologias e Ferramentas
O projeto foi construído com uma stack moderna, priorizando tipagem estática e performance:

Core: React.js + Vite (Ambiente de alta performance)

Linguagem: TypeScript (Segurança e escalabilidade de código)

Navegação: React Router DOM (Gestão de rotas SPA)

UI/UX: Bootstrap 5 + Bootstrap Icons (Layout responsivo e componentes visuais)

Data Integrity: Zod (Validação rigorosa de formulários e esquemas)

Backend Simulation: Json-Server (Mock API RESTful)

Conectividade: Axios (Cliente HTTP otimizado)

🛠️ Funcionalidades do Sistema
1. 🎞️ Gestão de Catálogo (Filmes)
Controle completo sobre os títulos em exibição:

Visualização: Listagem intuitiva em formato de cards.

CRUD Completo: Adição e edição de metadados (Título, Sinopse, Classificação Indicativa, Duração, Gênero e Datas de Exibição).

Manutenção: Remoção de filmes fora de cartaz.

2. 🚪 Infraestrutura (Salas)
Gerenciamento físico do cinema:

Cadastro e controle de salas.

Definição de numeração e capacidade máxima de público.

3. 📅 Grade de Horários (Sessões)
Um módulo inteligente para organizar a programação:

Agendamento Cruzado: Vincula filmes disponíveis às salas cadastradas.

Listagem Enriquecida: Exibe dados populados (nomes reais de filmes e salas) ao invés de apenas IDs.

Validação de Segurança: O sistema bloqueia automaticamente a criação de sessões em datas retroativas.

4. 🎟️ Bilheteria (Ingressos)
Simulador de Vendas: Interface para registro de venda de ingressos (modalidades Inteira e Meia) vinculados diretamente às sessões ativas.

📦 Instalação e Execução
Siga os passos abaixo para rodar o projeto localmente.

Pré-requisitos: Certifique-se de ter o Node.js instalado (v16+).

Passo 1: Obter o Código
Bash

git clone <SEU_LINK_DO_GITHUB_AQUI>
cd cineweb-sessions
Passo 2: Instalar Dependências
Bash

npm install
Passo 3: Inicializar a API (Backend Mock)
O frontend depende desta API para carregar os dados. Mantenha este terminal aberto.

Bash

npm run server
Output esperado: Resources: http://localhost:3000/filmes ...

Passo 4: Inicializar a Aplicação (Frontend)
Abra um novo terminal (dentro da pasta do projeto) e execute:

Bash

npm run dev
Passo 5: Acessar
O projeto estará disponível no seu navegador, geralmente em: 👉 http://localhost:5173

📂 Arquitetura do Projeto
A estrutura de pastas foi organizada para facilitar a manutenção e escalabilidade:

Plaintext

/
├── public/           # Assets estáticos e base de dados inicial (db.json)
├── src/
│   ├── components/   # UI Kits reutilizáveis (Navbar, Forms, Cards)
│   ├── pages/        # Views principais da aplicação (Rotas)
│   ├── schemas/      # Regras de validação (Zod)
│   ├── services/     # Camada de integração com API (Axios)
│   └── types/        # Definições de tipagem TypeScript
├── db.json           # Banco de dados simulado (Json-Server)
└── ...arquivos de configuração
