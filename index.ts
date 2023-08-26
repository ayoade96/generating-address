// import * as ethers from 'ethers';
// const mnemonic: string =
//   'injury manage trade drama violin wrist rack eyebrow patient fiscal stuff clerk';

// const wallet = ethers.Wallet.fromPhrase(mnemonic);
// console.log(wallet);


import { ethers } from 'ethers';

// Mnemonic phrase
const mnemonic = "Injury manage trade drama violin wrist rack eyebrow patient fiscal stuff clerk";

// Generate wallet from mnemonic
const wallet = ethers.Wallet.fromPhrase(mnemonic);

// Generate 5 Ethereum addresses
(async () => {
  for (let i = 0; i < 5; i++) {
    const path = `m/44'/60'/0'/0/${i}`;
    const derivedWallet = wallet.derivePath(path);

    const address = await derivedWallet.getAddress();

    console.log(`Address ${i + 1}: ${address}`);
  }
})();
