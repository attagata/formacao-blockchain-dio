
# Criação de Token no Padrão ERC-20

## Tecnologias utilizadas:
- Solidity
- Truffle
- Ganache
- Remix IDE
- Metamask

### Passo 1

- Ganache
  - Instale o Ganache (https://archive.trufflesuite.com/ganache/)
  - Crie uma nova Workspace. Um conjunto de carteiras será criado em um ambiente emulado da blockchain.
    

- Metamask:
  - Será a ponte entre Remix e Ganache
  - Faça o download e instalação (https://metamask.io/)
  - Adicionar extensão ao Google Chrome
  - Crie sua conta (lembre-se de armazenar a Frase de Recuperação em um local seguro; ela é a única forma de recuperação da sua conta)
  - Clique em Ethereum Mainnet -> Add Network
  - Preencha os dados da rede com os dados da carteira gerada no Ganache.
  - Clique no ícone (menu) -> Import Account
  - Importe uma das contas geradas no Ganache
  - Nas extensões do Chrome, verifique que a conta não está conectada no Metamask. Faremos a conexão via Remix.
  
 
- Remix
  - Abra a aba Deploy & Run Transactions
  - Environment -> Injected Provider - Metamask
  - No pop-up, clique Connect
    
### Passo 2

Agora, vamos criar o nosso contrato

- Remix:
  - Vá na aba Projetos -> Contracts -> New File -> Nomeie o seu projeto. Ex.: "DIOCoin.sol"
  - Utilize o código disponível em "Modulo 03 Desenvolvimento com Solidity/Curso 02 Desenvolvimento de Smart Contracts/Criando a sua primeira criptomoeda da Rede Ethereum/DIOToken.sol" como base.
  - Compile o código.
  - Na aba Deploy & Run Transactions, selecione o contrato criado e clique em deploy
  - No pop-up será aberto, verfique as informações e confirme
  - No Ganache, é possível ver que a transação foi minerada e o contrato, criado.
  - Conecte a conta ao Metamask seguindo o passo 1, caso esteja usando uma conta diferente.
    




