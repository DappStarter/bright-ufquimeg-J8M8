require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rival oil concert harvest hen flush giggle'; 
let testAccounts = [
"0x1149b2372b363909b48e60d43e3ef7742bba515b8b035f32fdf908fa71893c5c",
"0xb76aca0df709703139182be215a6f2568f39719520d4e2e20e978a8eade72131",
"0xd52899f1db8d06c2b9e49cb8365f76963e84f0022060fae45d00253643d4a27e",
"0x6380730aad5c13e7c4d3ff814c10920f2b245ca0ac428a5927272f26282ef358",
"0xc8867f3bdc383df2fbfd6f0f36088aa16222b4c9fabf3b3fa617cce7c9bef7a9",
"0xef371374849a184b8f6ab9dd1f9806d331116ec3661f042b16dd72cdffaa5f12",
"0x54a5f2f80cdbc6617c1b0822e4cc5a63c0a495fb6dc9ff2b435c6abe9a6a2815",
"0xa62ea721c8de4816967cf4a54c7f916ca683aced3b6fa2ff778f0c1e8ec859d3",
"0xd596185247230253f79ffcd254e49f7c1c6ea4848bd83355f6863598a930935c",
"0x7931e9f22c7645e143a3686a4a8b30b334085b204c65cf10dd8e8e6b5eb93ff1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

