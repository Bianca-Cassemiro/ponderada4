const csv = require('csvtojson');
const fs = require('fs');

// Caminho para o arquivo CSV de entrada e o arquivo JSON de saída
const csvFilePath = './Mall_Customers.csv';
const jsonFilePath = './Mall_Customers.json';

// Função para realizar a conversão
const convertCSVtoJSON = async () => {
  try {
    const jsonArray = await csv().fromFile(csvFilePath);
    const jsonData = JSON.stringify(jsonArray, null, 2);

    fs.writeFileSync(jsonFilePath, jsonData);
    console.log(`Conversão concluída. Os dados JSON foram salvos em ${jsonFilePath}`);
  } catch (error) {
    console.error('Erro ao converter CSV para JSON:', error);
  }
};

// Chame a função para iniciar a conversão
convertCSVtoJSON();