/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LensPeriphery, LensPeripheryInterface } from "../LensPeriphery";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILensHub",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ArrayMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "NotDispatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "contract ILensHub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "dispatcherSetProfileMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getProfileMetadataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getProfileMetadataURIByOwner",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "setProfileMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple",
          },
        ],
        internalType: "struct DataTypes.SetProfileMetadataWithSigData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "setProfileMetadataURIWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "profileIds",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "enables",
        type: "bool[]",
      },
    ],
    name: "toggleFollow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "follower",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "profileIds",
            type: "uint256[]",
          },
          {
            internalType: "bool[]",
            name: "enables",
            type: "bool[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple",
          },
        ],
        internalType: "struct DataTypes.ToggleFollowWithSigData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "toggleFollowWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161139d38038061139d83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516112ef6100ae60003960008181610138015281816101fd01528181610339015281816103c501528181610a2a0152610afa01526112ef6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a4c52b8611610066578063a4c52b8614610133578063a7698ac614610172578063aa72c1ad14610185578063efe4fd8314610198578063f990ccd7146101ab57600080fd5b80631bd7a496146100a35780633c6eac1f146100cc5780634bcd49c0146100e157806393382bce146100f4578063a3f4df7e14610107575b600080fd5b6100b66100b1366004610d37565b6101d9565b6040516100c39190610d50565b60405180910390f35b6100df6100da366004610da5565b610320565b005b6100df6100ef366004610e39565b61047b565b6100b6610102366004610e8b565b610598565b6100b66040518060400160405280600d81526020016c4c656e7350657269706865727960981b81525081565b61015a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100c3565b6100df610180366004610f03565b610650565b6100df610193366004610e39565b61065d565b6100df6101a6366004610da5565b610785565b6101cb6101b9366004610f6f565b60006020819052908152604090205481565b6040519081526020016100c3565b6040516331a9108f60e11b8152600481018290526060906000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636352211e90602401602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610f93565b6001600160a01b0381166000908152600160209081526040808320878452909152902080549192509061029a90610fb0565b80601f01602080910402602001604051908101604052809291908181526020018280546102c690610fb0565b80156103135780601f106102e857610100808354040283529160200191610313565b820191906000526020600020905b8154815290600101906020018083116102f657829003601f168201915b5050505050915050919050565b6040516331a9108f60e11b8152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610388573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ac9190610f93565b60405163540528b960e01b8152600481018690529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063540528b990602401602060405180830381865afa158015610414573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104389190610f93565b6001600160a01b0316336001600160a01b0316146104695760405163957fb99f60e01b815260040160405180910390fd5b61047581858585610796565b50505050565b61056e61054a7fd46ddae52514a1aaf8b4d709742b061f33f2deaee1b2ecc97193734aa9c6e25f60208401356104b46040860186610fe5565b6040516104c292919061102c565b6040519081900390206000806104db6020890189610f6f565b6001600160a01b03168152602081019190915260400160009081208054916105028361103c565b909155506040805160208101959095528401929092526060830152608082015260c08481013560a0830152015b60405160208183030381529060405280519060200120610811565b6105576020840184610f6f565b61056936859003850160608601611065565b610916565b61059561057e6020830183610f6f565b60208301356105906040850185610fe5565b610796565b50565b6001600160a01b038216600090815260016020908152604080832084845290915290208054606091906105ca90610fb0565b80601f01602080910402602001604051908101604052809291908181526020018280546105f690610fb0565b80156106435780601f1061061857610100808354040283529160200191610643565b820191906000526020600020905b81548152906001019060200180831161062657829003601f168201915b5050505050905092915050565b61047533858585856109fa565b61075661054a7ecfb338e2b61ce79b6e570ede2bbd4588c3973904a7c46a87b69c09dfbd520961069060208501856110e8565b6040516020016106a1929190611132565b604051602081830303815290604052805190602001208480604001906106c791906110e8565b6040516020016106d892919061116c565b604051602081830303815290604052805190602001206000808760000160208101906107049190610f6f565b6001600160a01b0316815260208082019290925260409081016000208054600181019091558151928301959095528101929092526060820152608081019190915260c08481013560a08301520161052f565b6105956107666020830183610f6f565b61077360208401846110e8565b61078060408601866110e8565b6109fa565b61079133848484610796565b505050565b6001600160a01b038416600090815260016020908152604080832086845290915290206107c4908383610c9e565b5082846001600160a01b03167f6e6b671b9abbca0960f185172a5a18ba76e295665b307615a0e1ab6cd6c06a73848442604051610803939291906111a7565b60405180910390a350505050565b6000806108d7604080518082018252600d81526c4c656e7350657269706865727960981b60209182015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f15755ebf4cd25adc855d8536ca663bff626d93da8b6f09dea8282fe714f22c4c818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b428160600151101561093b57604051630819bdcd60e01b815260040160405180910390fd5b600060018483600001518460200151856040015160405160008152602001604052604051610985949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa1580156109a7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615806109dc5750826001600160a01b0316816001600160a01b031614155b15610475576040516337e8456b60e01b815260040160405180910390fd5b828114610a1a5760405163b7c1140d60e01b815260040160405180910390fd5b8260005b81811015610c4c5760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9ec6563888885818110610a6957610a696111e0565b905060200201356040518263ffffffff1660e01b8152600401610a8e91815260200190565b602060405180830381865afa158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf9190610f93565b90506001600160a01b038116610af857604051636992d36b60e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634f558e79888885818110610b3957610b396111e0565b905060200201356040518263ffffffff1660e01b8152600401610b5e91815260200190565b602060405180830381865afa158015610b7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9f91906111f6565b610bbc5760405163677510db60e11b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b0389811660048301528216906370a0823190602401602060405180830381865afa158015610c02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c269190611213565b610c4357604051636992d36b60e11b815260040160405180910390fd5b50600101610a1e565b50856001600160a01b03167f5538c80c8d3bee397d87a7d153f7f085bb12adf2fe25a026c7cc4e83d8c5f1d78686868642604051610c8e95949392919061122c565b60405180910390a2505050505050565b828054610caa90610fb0565b90600052602060002090601f016020900481019282610ccc5760008555610d12565b82601f10610ce55782800160ff19823516178555610d12565b82800160010185558215610d12579182015b82811115610d12578235825591602001919060010190610cf7565b50610d1e929150610d22565b5090565b5b80821115610d1e5760008155600101610d23565b600060208284031215610d4957600080fd5b5035919050565b600060208083528351808285015260005b81811015610d7d57858101830151858201604001528201610d61565b81811115610d8f576000604083870101525b50601f01601f1916929092016040019392505050565b600080600060408486031215610dba57600080fd5b83359250602084013567ffffffffffffffff80821115610dd957600080fd5b818601915086601f830112610ded57600080fd5b813581811115610dfc57600080fd5b876020828501011115610e0e57600080fd5b6020830194508093505050509250925092565b600060e08284031215610e3357600080fd5b50919050565b600060208284031215610e4b57600080fd5b813567ffffffffffffffff811115610e6257600080fd5b610e6e84828501610e21565b949350505050565b6001600160a01b038116811461059557600080fd5b60008060408385031215610e9e57600080fd5b8235610ea981610e76565b946020939093013593505050565b60008083601f840112610ec957600080fd5b50813567ffffffffffffffff811115610ee157600080fd5b6020830191508360208260051b8501011115610efc57600080fd5b9250929050565b60008060008060408587031215610f1957600080fd5b843567ffffffffffffffff80821115610f3157600080fd5b610f3d88838901610eb7565b90965094506020870135915080821115610f5657600080fd5b50610f6387828801610eb7565b95989497509550505050565b600060208284031215610f8157600080fd5b8135610f8c81610e76565b9392505050565b600060208284031215610fa557600080fd5b8151610f8c81610e76565b600181811c90821680610fc457607f821691505b60208210811415610e3357634e487b7160e01b600052602260045260246000fd5b6000808335601e19843603018112610ffc57600080fd5b83018035915067ffffffffffffffff82111561101757600080fd5b602001915036819003821315610efc57600080fd5b8183823760009101908152919050565b600060001982141561105e57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006080828403121561107757600080fd5b6040516080810181811067ffffffffffffffff821117156110a857634e487b7160e01b600052604160045260246000fd5b604052823560ff811681146110bc57600080fd5b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b6000808335601e198436030181126110ff57600080fd5b83018035915067ffffffffffffffff82111561111a57600080fd5b6020019150600581901b3603821315610efc57600080fd5b60006001600160fb1b0383111561114857600080fd5b8260051b80858437600092019182525092915050565b801515811461059557600080fd5b60008184825b8581101561119c5781356111858161115e565b151583526020928301929190910190600101611172565b509095945050505050565b604081528260408201528284606083013760006060848301015260006060601f19601f8601168301019050826020830152949350505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561120857600080fd5b8151610f8c8161115e565b60006020828403121561122557600080fd5b5051919050565b6060808252810185905260006001600160fb1b0386111561124c57600080fd5b8560051b8088608085013760809083018381038201602080860191909152918101869052869160009160a0015b878310156112a257833561128c8161115e565b1515815292810192600192909201918101611279565b80945050505050826040830152969550505050505056fea26469706673582212209e8930e4fe5f4c457bf140376296098805784ea516c0b60c5f22f8a91307851764736f6c634300080a0033";

type LensPeripheryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LensPeripheryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LensPeriphery__factory extends ContractFactory {
  constructor(...args: LensPeripheryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LensPeriphery> {
    return super.deploy(hub, overrides || {}) as Promise<LensPeriphery>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): LensPeriphery {
    return super.attach(address) as LensPeriphery;
  }
  connect(signer: Signer): LensPeriphery__factory {
    return super.connect(signer) as LensPeriphery__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LensPeripheryInterface {
    return new utils.Interface(_abi) as LensPeripheryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LensPeriphery {
    return new Contract(address, _abi, signerOrProvider) as LensPeriphery;
  }
}
