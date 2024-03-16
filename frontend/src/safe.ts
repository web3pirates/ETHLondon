import {
  ENTRYPOINT_ADDRESS_V06,
  createSmartAccountClient,
  bundlerActions,
} from "permissionless";
import { signerToSafeSmartAccount } from "permissionless/accounts";
import { pimlicoBundlerActions } from "permissionless/actions/pimlico";
import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import {
  createClient,
  createPublicClient,
  getContract,
  http,
  parseEther,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

// const ENTRYPOINT_ADDRESS_V06 = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const PLIMLICO_ENDPOINT = `https://api.pimlico.io/v2/84532/rpc?apikey=${process.env.PIMLICO_API_KEY}`;

export const publicClient = createPublicClient({
  transport: http("https://rpc.notadegen.com/base/sepolia"),
});

export const paymasterClient = createPimlicoPaymasterClient({
  transport: http(PLIMLICO_ENDPOINT),
  entryPoint: ENTRYPOINT_ADDRESS_V06,
});

export const bundlerClient = createPimlicoBundlerClient({
  transport: http(PLIMLICO_ENDPOINT),
  entryPoint: ENTRYPOINT_ADDRESS_V06,
});

export async function sponsorGasFees() {
  const signer = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

  const safeAccount = await signerToSafeSmartAccount(publicClient, {
    entryPoint: ENTRYPOINT_ADDRESS_V06,
    signer: signer,
    safeVersion: "1.4.1",
    address: "0x285d1575491c598ED99d9a18708eDaCB35EeB087",
  });

  const pimlicoBundlerClient = createClient({
    chain: baseSepolia,
    transport: http(PLIMLICO_ENDPOINT),
  })
    .extend(bundlerActions(ENTRYPOINT_ADDRESS_V06))
    .extend(pimlicoBundlerActions(ENTRYPOINT_ADDRESS_V06));

  console.log(process.env.PIMLICO_API_KEY);

  const smartAccountClient = createSmartAccountClient({
    account: safeAccount,
    entryPoint: ENTRYPOINT_ADDRESS_V06,
    chain: baseSepolia,
    bundlerTransport: http(PLIMLICO_ENDPOINT),
    middleware: {
      gasPrice: async () =>
        (await pimlicoBundlerClient.getUserOperationGasPrice()).fast, // use pimlico bundler to get gas prices
      sponsorUserOperation: paymasterClient.sponsorUserOperation, // optional
    },
  });

  const gasPrices = await bundlerClient.getUserOperationGasPrice();

  const txHash = await smartAccountClient.sendTransaction({
    to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    value: parseEther("0.1"),
    maxFeePerGas: gasPrices.fast.maxFeePerGas,
    maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas,
  });

  console.log(txHash);
}
