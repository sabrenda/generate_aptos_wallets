const { AptosAccount } = require('aptos');
const bip39 = require('bip39')

// amount for wallets
const WALLETS_AMOUNT = 10;

// Generate wallets
for (let i = 0; i < WALLETS_AMOUNT; i++) {
  const path = "m/44'/637'/0'/0'/0'";
  const mnemonics = bip39.generateMnemonic();
  const account = AptosAccount.fromDerivePath(path, mnemonics);
  const walletInfo = {
    mnemonics: mnemonics,
    ...account.toPrivateKeyObject()
  }

  console.log({
    id: i + 1,
    mnemonic: walletInfo.mnemonics,
    address: walletInfo.address,
    privateKey: walletInfo.privateKeyHex,
  });
}
