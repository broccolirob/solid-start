require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");
require("hardhat-gas-reporter");
require("hardhat-deploy");
require("solidity-coverage");
require("./tasks/accounts");
require("./tasks/balance");
require("./tasks/block-number");
require("./tasks/tenderly-verify");

require("dotenv").config();

const {
  INFURA_ID,
  MNEMONIC,
  ALCHEMY_KEY,
  FORK_BLOCK,
  ETHERSCAN_KEY,
  REPORT_GAS,
  TENDERLY_PROJECT,
  TENDERLY_USERNAME,
  NETWORK,
} = process.env;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: NETWORK,
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
        blockNumber: parseInt(FORK_BLOCK),
      },
    },
    localhost: {
      url: "http://localhost:8545",
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    polygonMainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    arbitrumMainnet: {
      url: `https://arbitrum-mainnet.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    optimismMainnet: {
      url: `https://optimism-mainnet.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${INFURA_ID}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    bob: {
      default: 1,
    },
    alice: {
      default: 2,
    },
  },
  gasReporter: {
    enabled: REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  tenderly: {
    project: TENDERLY_PROJECT,
    username: TENDERLY_USERNAME,
  },
  mocha: {
    timeout: 100000,
  },
};
