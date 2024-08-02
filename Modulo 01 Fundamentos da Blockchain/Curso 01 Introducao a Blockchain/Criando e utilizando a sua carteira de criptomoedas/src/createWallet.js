// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Configuração de rede (mainnet ou testnet)
const isTestnet = true;
const network = isTestnet ? bitcoin.networks.testnet : bitcoin.networks.bitcoin;

// Derivação de carteiras HD
const path = `m/49'/1'/0'/0`;

// Gerando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic();

// Validando o mnemonic
if (!bip39.validateMnemonic(mnemonic)) {
    throw new Error("Mnemonic inválido. Por favor, gere novamente.");
}

const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

// Criando uma conta - par pvt-pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

// Gerando o endereço BTC
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

// Exibindo as informações da carteira
console.log("Carteira gerada");
console.log("Endereço:", btcAddress);
console.log("Chave privada (WIF):", node.toWIF());
console.log("Seed:", mnemonic);

// Função para selecionar a rede (mainnet ou testnet)
function selectNetwork(isTestnet) {
    return isTestnet ? bitcoin.networks.testnet : bitcoin.networks.bitcoin;
}

// Função para derivar o caminho
function derivePath(root, path) {
    return root.derivePath(path);
}

// Função para gerar endereço BTC
function generateBTCAddress(node, network) {
    return bitcoin.payments.p2pkh({
        pubkey: node.publicKey,
        network: network,
    }).address;
}

// Função para validar mnemonic
function validateMnemonic(mnemonic) {
    if (!bip39.validateMnemonic(mnemonic)) {
        throw new Error("Mnemonic inválido. Por favor, gere novamente.");
    }
    return bip39.mnemonicToSeedSync(mnemonic);
}
