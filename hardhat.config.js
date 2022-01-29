require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("hardhat-deploy");
require("hardhat-deploy-tenderly");
require("solidity-coverage");
require("hardhat-docgen");
require("./tasks/accounts");
require("./tasks/balance");
require("./tasks/block-number");

require("dotenv").config();

const {
  NETWORK,
  MNEMONIC,
  MAINNET_KEY,
  RINKEBY_KEY,
  GOERLI_KEY,
  KOVAN_KEY,
  ROPSTEN_KEY,
  POLYGON_MAINNET_KEY,
  POLYGON_MUMBAI_KEY,
  ARBITRUM_MAINNET_KEY,
  ARBITRUM_RINKEBY_KEY,
  OPTIMISM_MAINNET_KEY,
  OPTIMISM_KOVAN_KEY,
  ETHERSCAN_KEY,
  COINMARKETCAP_KEY,
  REPORT_GAS,
  TENDERLY_PROJECT,
  TENDERLY_USERNAME,
} = process.env;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.11",
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
        url: `https://eth-mainnet.alchemyapi.io/v2/${MAINNET_KEY}`,
      },
    },
    localhost: {
      url: "http://localhost:8545",
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${MAINNET_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 1,
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ROPSTEN_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 3,
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 4,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${GOERLI_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 5,
    },
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${KOVAN_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 42,
    },
    polygonMainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${POLYGON_MAINNET_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 137,
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${POLYGON_MUMBAI_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 80001,
    },
    arbitrumMainnet: {
      url: `https://arb-mainnet.g.alchemy.com/v2/${ARBITRUM_MAINNET_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 42161,
    },
    arbitrumRinkeby: {
      url: `https://arb-rinkeby.g.alchemy.com/v2/${ARBITRUM_RINKEBY_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 421611,
    },
    optimismMainnet: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${OPTIMISM_MAINNET_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 10,
    },
    optimismKovan: {
      url: `https://opt-kovan.g.alchemy.com/v2/${OPTIMISM_KOVAN_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: 69,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    alice: {
      default: 1, // generic participant 'a'
    },
    bob: {
      default: 2, // generic participant 'b'
    },
    chad: {
      default: 3, // generic participant 'c'
    },
    dan: {
      default: 4, // generic participant 'd'
    },
    frank: {
      default: 4, // generic participant 'f'
    },
    eve: {
      default: 5, // passive attacker
    },
    mallory: {
      default: 6, // malicious attacker
    },
    oscar: {
      default: 7, // malicious/passive attacker
    },
    dao: {
      default: 8, // decentralized organization account
    },
  },
  gasReporter: {
    enabled: REPORT_GAS !== undefined,
    coinmarketcap: COINMARKETCAP_KEY,
    currency: "USD",
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  tenderly: {
    project: TENDERLY_PROJECT,
    username: TENDERLY_USERNAME,
  },
  docgen: {
    path: "./docs",
    clear: true,
    except: [],
  },
  mocha: {
    timeout: 100000,
  },
};
