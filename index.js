"use strict";
// import * as ethers from 'ethers';
// const mnemonic: string =
//   'injury manage trade drama violin wrist rack eyebrow patient fiscal stuff clerk';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const wallet = ethers.Wallet.fromPhrase(mnemonic);
// console.log(wallet);
const ethers_1 = require("ethers");
// Mnemonic phrase
const mnemonic = "Injury manage trade drama violin wrist rack eyebrow patient fiscal stuff clerk";
// Generate wallet from mnemonic
const wallet = ethers_1.ethers.Wallet.fromPhrase(mnemonic);
// Generate 5 Ethereum addresses
(() => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < 5; i++) {
        const path = `m/44'/60'/0'/0/${i}`;
        const derivedWallet = wallet.derivePath(path);
        const address = yield derivedWallet.getAddress();
        console.log(`Address ${i + 1}: ${address}`);
    }
}))();
