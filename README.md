# Atividade Avaliativa 4

Dando continuidade a atividade ponderada 3, nesta atividade criamos um dashboard interativo que consome dados de uma api onde está o nosso modelo de machine learning.


## Frontend
Para o frontend utilizei next e a aplicação foi deployada em um EC2, nela está presente uma tela de login para autenticação JWT que será feita no backend e uma tela de dashboard, onde apresenta um gráfico dos dados atuais presentes no csv e vários inputs referentes as informações que seriam enviadas para o modelo.

<img width="596" alt="image" src="https://github.com/Bianca-Cassemiro/ponderada4/assets/99203402/5d1c368e-82c9-4c66-9587-4643885425e5">
<img width="595" alt="image" src="https://github.com/Bianca-Cassemiro/ponderada4/assets/99203402/9220d627-92b3-45ce-91d8-4a18a926b8ea">
<img width="593" alt="image" src="https://github.com/Bianca-Cassemiro/ponderada4/assets/99203402/61e551e8-e7b6-4d2c-9cb0-4b4dd376a86e">

## Backend
O backend foi feito utilizando fastapi e python, onde temos todas as rotas tanto para o login quanto para a predição. O backend foi deployado em um EC2 na aws, além disso foi colocado um IP elástico para facilitar a visualização.

<img width="596" alt="image" src="https://github.com/Bianca-Cassemiro/ponderada4/assets/99203402/66de0c20-5f34-42ea-b8fc-9c2868edd7cb">

## Como utilizar
Para utilizar a aplicação localmente basta clonar o repositório e utilizar os comandos padrões- "python app.py" (p/ o backend) - e para "npm run dev" (para o front)
Já na AWS será preciso instanciar duas EC2 para deste modo o conseguirmos utilizar uma para o front e outra para o backend.
```
sudo apt update
sudo apt upgrade
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT  
git clone https://github.com/Bianca-Cassemiro/ponderada4.git
```
e rodar os comandos básicos citados anteriormente!!
## Resultado
Link para o resultado:
https://drive.google.com/file/d/1NgX7j2HYT2naVlQrUU18oVILD0D1cRDl/view?usp=drive_link
