require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hover enroll other venture stone dash remind proof grace sister army gesture'; 
let testAccounts = [
"0x42b2db841cec2ec038cef652487b701cbe5919da63f4f1ec6eb0a433a803655a",
"0x3d40c76ed304ae70bbc7a0487449092f56fe29da315756d02fc9fb20b8cfa9ba",
"0x3a8ed19fbb92c20edde840e2b7a4902d159d944629cb97594b4406c01809b01e",
"0xaeaacb8cc4a8033a207c5a47e60ace61af7b700c688a6ea3120dc03d978b1dd8",
"0xf9cc5d89249114972c29cad3e7ba5ac8151a700ae6c1df3105dc8714e16f9783",
"0x5fb11ef67a005eb1c8117d20f4bcb13d948868259d4c1691582d3ed7c71bdf9b",
"0x8271f19178fef71f674d8e02e302abd3a4586c0e13dc4c674e1a43e7895aa89d",
"0xf2607721a246c9e54e29a907646238fbf2f5b45193830acbc89fb8496318cd5f",
"0x210d4c5c172ff87883a3b2136d7ae7d63d63b387767889a868a7a97978f5680e",
"0x8b37581271054f945eb7b1e700d2ba403333b7d62e1f05ca1d8522789b8e9c1c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


