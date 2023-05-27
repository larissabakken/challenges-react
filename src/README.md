# Challenges to Learn React

This repository contains a collection of challenges designed to help you learn and practice React.

## Installation

To run the projects, make sure you have the following tools/packages installed:

- [Node.js](https://nodejs.org/en/) >= 16.17.0
- [npm](https://www.npmjs.com/) >= 9.0.0

## Getting Started

Follow these steps to run the project:

1. Clone this repository to your local machine.
2. Install the project dependencies by running the following command:

   ```bash
   npm install
   ```

3. Start the development server by running the following command:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate

## Challenges

### Challenge 1: useCallback (English)

Create a task list page that allows users to add tasks, mark tasks as completed, and remove tasks from the list.

Requirements:

1. Create a `TaskForm` component that includes a text input field and an "Add" button. Users should be able to enter a new task in the input field and add it to the list when the "Add" button is clicked.
2. Create a `TaskItem` component that represents a single task in the list. Each `TaskItem` should include a checkbox to mark the task as completed and a button to remove it from the list.
3. Create a `TaskList` component that renders the list of tasks. The `TaskList` component should receive a `tasks` prop, which is an array of task objects containing the following properties: `id` (unique identifier of the task) and `text` (task content).
4. Use the `useState` hook to store the list of tasks in the parent component.
5. Use the `useCallback` hook to create a callback function that adds a new task to the list. This function should be passed as a prop to the `TaskForm` component.
6. Use the `useCallback` hook to create a callback function that marks a task as completed. This function should be passed as a prop to the `TaskItem` component.
7. Use the `useCallback` hook to create a callback function that removes a task from the list. This function should be passed as a prop to the `TaskItem` component.

Tips:
- The state of the task list can be an array of objects. Each object represents a task with a unique ID and the task content.
- When adding a new task, you can use the `setTasks` function to update the state of the task list.
- When marking a task as completed or removing it from the list, you'll need to modify the state of the task list accordingly.

##### Challenge yourself to implement this task list using the `useCallback` hook to optimize the performance of the components. Good luck!

---
### Challenge 2: Calculating Average using useMemo

Create a React component that allows users to calculate the average of a set of numbers. The component should automatically update the result whenever the numbers are changed.

Requirements:

1. Create a `NumberList` component that allows users to add, remove, and edit numbers.
2. Create an `Average` component that calculates and displays the average of the numbers in the list.
3. Use the `useState` hook to store the list of numbers in the `NumberList` component.
4. Use the `useMemo` hook to calculate the average of the numbers and update the result only when the list of numbers changes.
5. Implement functions to add, remove, and edit numbers in the list.
6. Display the list of numbers, allowing users to add, remove, and edit the values.
7. Display the result of the average of the numbers in the list.

Tips:
- When adding, removing, or editing a number, you'll need to update the list of numbers using the `setNumberList` function.
- Use the `map` function to iterate over the list of numbers and display them in the `NumberList` component.
- When calculating the average, use the `reduce` function to sum all the numbers and divide by the size of the list.

Challenge yourself to implement the calculation of the average using the `useMemo` hook to optimize the component's performance. Have fun!

##### Challenge yourself to implement the calculation of the average using the `useMemo` hook to optimize the component's performance. Have fun!]()
---

# Desafios para Aprender React
Este repositório contém uma coleção de desafios projetados para ajudar você a aprender e praticar o React.

## Instalação

Para executar os projetos, certifique-se de ter as seguintes ferramentas/pacotes instalados:

- [Node.js](https://nodejs.org/pt-br/) >= 16.17.0
- [npm](https://www.npmjs.com/) >= 9.0.0

## Como Iniciar

Siga estes passos para executar o projeto:

1. Clone este repositório em sua máquina local.
2. Instale as dependências do projeto executando o seguinte comando:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento executando o seguinte comando:

   ```bash
   npm run dev
   ```

## Desafios
### Desafio 1: useCallback

Crie uma página de lista de tarefas que permita aos usuários adicionar tarefas, marcar tarefas como concluídas e remover tarefas da lista.

Requisitos:

1. Crie um componente `TaskForm` que inclua um campo de entrada de texto e um botão "Adicionar". Os usuários devem ser capazes de inserir uma nova tarefa no campo de entrada e adicioná-la à lista ao clicar no botão "Adicionar".
2. Crie um componente `TaskItem` que represente uma única tarefa na lista. Cada `TaskItem` deve incluir uma caixa de seleção para marcar a tarefa como concluída e um botão para removê-la da lista.
3. Crie um componente `TaskList` que renderize a lista de tarefas. O componente `TaskList` deve receber uma propriedade `tasks`, que é um array de objetos de tarefas contendo as seguintes propriedades: `id` (identificador único da tarefa) e `text` (conteúdo da tarefa).
4. Use o hook `useState` para armazenar a lista de tarefas no componente pai.
5. Use o hook `useCallback` para criar uma função de retorno de chamada que adiciona uma nova tarefa à lista. Essa função deve ser passada como prop para o componente `TaskForm`.
6. Use o hook `useCallback` para criar uma função de retorno de chamada que marca uma tarefa como concluída. Essa função deve ser passada como prop para o componente `TaskItem`.
7. Use o hook `useCallback` para criar uma função de retorno de chamada que remove uma tarefa da lista. Essa função deve ser passada como prop para o componente `TaskItem`.

Dicas:
- O estado da lista de tarefas pode ser um array de objetos. Cada objeto representa uma tarefa com um ID único e o conteúdo da t

arefa.
- Ao adicionar uma nova tarefa, você pode usar a função `setTasks` para atualizar o estado da lista de tarefas.
- Ao marcar uma tarefa como concluída ou removê-la da lista, você precisará modificar o estado da lista de tarefas adequadamente.

##### Desafie-se a implementar esta lista de tarefas usando o hook `useCallback` para otimizar o desempenho dos componentes. Boa sorte!

----------

### Desafio 2: Cálculo de Média usando useMemo

Crie um componente React que permita aos usuários calcular a média de um conjunto de números. O componente deve atualizar automaticamente o resultado sempre que os números forem alterados.

Requisitos:

1. Crie um componente `NumberList` que permita aos usuários adicionar, remover e editar números.
2. Crie um componente `Average` que calcule e exiba a média dos números da lista.
3. Use o hook `useState` para armazenar a lista de números no componente `NumberList`.
4. Use o hook `useMemo` para calcular a média dos números e atualizar o resultado apenas quando a lista de números for alterada.
5. Implemente funções para adicionar, remover e editar números na lista.
6. Exiba a lista de números, permitindo que os usuários adicionem, removam e editem os valores.
7. Exiba o resultado da média dos números da lista.

Dicas:
- Ao adicionar, remover ou editar um número, você precisará atualizar a lista de números usando a função `setNumberList`.
- Use a função `map` para percorrer a lista de números e exibi-los no componente `NumberList`.
- Ao calcular a média, utilize a função `reduce` para somar todos os números e divida pelo tamanho da lista.

##### Desafie-se a implementar o cálculo da média usando o hook `useMemo` para otimizar o desempenho do componente. Divirta-se!

