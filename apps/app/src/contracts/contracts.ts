import { Address, createPublicClient, createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import abi from './ABI.json';

export const ALCHEMY_KEY = 'PZYto3ONWzPMqPW6AV70bOzbofx11rQf';

export const ALCHEMY_URL = `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`;

export const PUBLIC_PROVIDER = createPublicClient({
  chain: sepolia,
  transport: http(ALCHEMY_URL),
}) as any;

export const WALLET_PROVIDER = createWalletClient({
  chain: sepolia,
  transport: http(ALCHEMY_URL),
});

export const CONTRACT_ADDRESS_SEPOLIA =
  '0x41d4869725D52af42bC237D59d7CD36EC9B121D5';

export const CONTRACT = {
  address: CONTRACT_ADDRESS_SEPOLIA as Address,
  abi,
};
