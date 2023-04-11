import type { Address } from './utils'

interface WatchAssetParams {
  /** In the future, other standards will be supported */
  type: 'ERC20'
  options: {
    /** The address of the token contract */
    address: Address
    /** A ticker symbol or shorthand, up to 11 characters */
    symbol: string
    /** The number of token decimals */
    decimals: number
    /** A string url of the token logo */
    image: string
  }
}

/** @link https://eips.ethereum.org/EIPS/eip-747 */
export type EIP747 = {
  wallet_watchAsset: [[WatchAssetParams], boolean]
}

/** @link https://eips.ethereum.org/EIPS/eip-1102 */
export type EIP1102 = {
  eth_requestAccounts: [[] | undefined, string[]]
}

export interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls?: string[]
}

/** @link https://eips.ethereum.org/EIPS/eip-3085 */
export type EIP3085 = {
  wallet_addEthereumChain: [[AddEthereumChainParameter], null]
}

export interface SwitchEthereumChainParameter {
  chainId: string
}

/** @link https://eips.ethereum.org/EIPS/eip-3326 */
export type EIP3326 = {
  wallet_switchEthereumChain: [[SwitchEthereumChainParameter], null]
}
