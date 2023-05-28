const tokenData: {
  label: string;
  value: string;
  img: string;
  tags: string[];
}[] = [
  {
    label: "Trust",
    img: "https://trustwallet.com/assets/images/media/assets/trust_platform.svg",
    tags: ["secure", "recover"],
    value: "trust",
  },
  {
    label: "Phantom",
    img: "https://cdn-icons-png.flaticon.com/512/119/119690.png",
    tags: ["recover", "migrate"],
    value: "phantom",
  },
  {
    label: "Metamask",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
    tags: ["migrate", "recover", "secure"],
    value: "metamask",
  },
  {
    label: "Solana",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    tags: ["secure", "recover"],
    value: "solana",
  },
  {
    label: "Hashpack",
    img: "https://assets-global.website-files.com/614c99cf4f23700c8aa3752a/6323b696c42eaa1be5f8152a_public.png",
    tags: ["recover", "secure", "migrate"],
    value: "hashpack",
  },
  {
    label: "Stargazer",
    img: "https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/e6/6f/96/e66f9601-1310-bb90-d23f-094f744c4c29/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    tags: ["secure", "migrate", "recover"],
    value: "stargazer",
  },
  {
    label: "Crypto.com",
    img: "https://ctatus-prod.s3.eu-west-2.amazonaws.com/ta41aqhc96bir7v9k6inu8l32ak9",
    tags: ["recover", "secure"],
    value: "crypto.com",
  },
  {
    label: "Trezor",
    img: "https://s3.cointelegraph.com/storage/uploads/view/2f472818f0469284a59a8a7731adfb66.png",
    tags: ["migrate", "secure", "recover"],
    value: "trezor",
  },
  {
    label: "Terra",
    img: "https://logowik.com/content/uploads/images/terrausd-ust7979.jpg",
    tags: ["secure", "transfer", "recover"],
    value: "terra",
  },
  {
    label: "Safepal",
    img: "https://stakingcrypto.info/static/assets/coins/safepal-logo.png",
    tags: ["secure", "migrate", "transfer"],
    value: "safepal",
  },
  {
    label: "Coinbase",
    img: "https://logos-world.net/wp-content/uploads/2022/05/Coinbase-Symbol.png",
    tags: ["secure", "transfer", "migrate"],
    value: "coinbase",
  },
  {
    label: "Ledger",
    img: "data:image/png;base64,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",
    tags: ["secure"],
    value: "ledger",
  },
  {
    label: "Tron",
    img: "data:image/png;base64,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",
    tags: ["secure", "transfer", "migrate"],
    value: "tron",
  },
  {
    label: "Sollet",
    img: "https://l2beat.com/icons/sollet.png",
    tags: ["swap", "connect", "transfer"],
    value: "sollet",
  },
  {
    label: "Solflare",
    img: "data:image/png;base64,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",
    tags: ["secure", "transfer", "migrate"],
    value: "solflare",
  },
  {
    label: "Wallet Connect",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQMM9oHOb9zNtFB6T5EbpYJ8cJF5Xv_W5Y2yfSzxHqiiZUGaqrftuYiVWDk0zxSbQUds&usqp=CAU",
    tags: ["secure", "transfer", "migrate"],
    value: "walletConnect",
  },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
  //   {
  //     label: "",
  //     img: "",
  //     tags: ["secure", "transfer", "migrate"],
  //     value: "",
  //   },
];

export default tokenData;
