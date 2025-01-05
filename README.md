# Galeria de Fotos

Esta aplicação é uma galeria de fotos construída com **React**, **TypeScript** e **TailwindCSS**, integrando-se à **Pixabay API** para exibir imagens de alta qualidade com funcionalidades de busca em tempo real.

---

## 📋 Funcionalidades

- **Cabeçalho (Header):**
  - Título centralizado "Galeria de Fotos" no topo da página.

- **Área de Exibição de Fotos:**
  - Exibição das fotos em um layout grid responsivo.
  - Nome da foto centralizado abaixo de cada imagem.
  - Efeito visual (escala ou sombra) ao passar o mouse sobre as fotos.

- **Barra de Busca:**
  - Campo de texto para digitar palavras-chave e filtrar fotos.
  - Busca em tempo real com resultados instantâneos.
  - Exibição de mensagem "Nenhuma foto encontrada" caso não haja correspondências.

- **Rodapé (Footer):**
  - Texto configurável para informações como copyright.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - React com TypeScript.
  - Estilização com TailwindCSS.

- **Backend:**
  - Integração com Pixabay API para exibir fotos dinâmicas.

---

## 🛠️ Instalação e Execução

### 1. Clonar o Repositório
```bash
git clone https://github.com/Elencio/frontend-desafio.git
cd frontend-desafio
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar a API da Pixabay
Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:
```env
VITE_PIXABAY_API_KEY=your_pixabay_api_key
```
Substitua `your_pixabay_api_key` pela sua chave obtida no [Pixabay API](https://pixabay.com/api/docs/).

### 4. Executar a Aplicação
```bash
npm run dev
```

Acesse no navegador: `http://localhost:3000`.

---

## 📤 Funcionalidades Detalhadas

### **Visualizar Fotos**
- As fotos são carregadas da API Pixabay e exibidas em um layout grid responsivo.
- O nome de cada foto aparece centralizado abaixo da imagem.

### **Buscar Fotos**
- Digite palavras-chave na barra de busca para filtrar fotos pelo título.
- A busca ocorre em tempo real, exibindo os resultados instantaneamente.
- Caso não haja correspondências, é exibida a mensagem "Nenhuma foto encontrada".

### **Responsividade**
- Todos os elementos (cabeçalho, grid de fotos, rodapé) ajustam-se perfeitamente a diferentes tamanhos de tela.
