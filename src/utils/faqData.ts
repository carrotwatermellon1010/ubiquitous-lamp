import faqDataType from "../types/faqDataType";
import theme from "./theme";

const faqData: faqDataType = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "What is wallet validation?",
      content:
        "Wallet validation is the process of verifying the authenticity and integrity of a blockchain wallet. It ensures that the wallet address is valid, belongs to the intended user, and is properly configured for secure transactions.",
    },
    {
      title: "Why is wallet validation important in blockchain transactions?",
      content:
        "Wallet validation is crucial in blockchain transactions to prevent errors, mitigate risks, and enhance security. It helps avoid sending funds to incorrect or compromised addresses, ensuring that transactions are executed accurately and safely.",
    },
    {
      title: "How does your platform simplify wallet validation processes?",
      content:
        "Our platform offers user-friendly tools and streamlined workflows specifically designed to simplify wallet validation. We provide intuitive interfaces, automated validation checks, and real-time feedback to guide users through the process efficiently.",
    },
    {
      title:
        "What are the benefits of using your platform for blockchain management?",
      content:
        "By using our platform, you can experience enhanced efficiency, increased security, and improved accuracy in managing blockchain-related tasks. Our tools and resources empower users to navigate the complexities of blockchain with ease, saving time and effort.",
    },
    {
      title: "Can I use your platform for different types of cryptocurrencies?",
      content:
        "Yes, our platform supports multiple cryptocurrencies. You can utilize our services for wallet validation and blockchain management across various popular cryptocurrencies, ensuring broad compatibility and flexibility.",
    },
    {
      title:
        "Is my personal information and wallet data secure on your platform?",
      content:
        "We prioritize the security and privacy of our users. Our platform implements robust encryption measures, strict data protection protocols, and industry-standard security practices to safeguard personal information and wallet data.",
    },
    {
      title:
        "What happens if there is an issue with wallet validation on your platform?",
      content:
        "In the event of any issues with wallet validation, our platform provides comprehensive support channels to assist users. You can reach out to our dedicated customer support team, who will promptly address and resolve any validation-related concerns.",
    },
    {
      title:
        "Can your platform help with recovering lost or inaccessible wallets?",
      content:
        "While our primary focus is on wallet validation and blockchain management, we understand the challenges of lost or inaccessible wallets. We recommend reaching out to the respective blockchain's official support channels or consulting with experts specializing in wallet recovery for assistance.",
    },
  ],
};

export const faqStyles = {
  bgColor: theme.colors.bg,
  titleTextColor: theme.colors.white,
  rowTitleColor: theme.colors.white,
  rowContentColor: theme.colors.white,
  arrowColor: theme.colors.primary,
  rowContentPaddingBottom: "1rem",
  rowContentPaddingLeft: "1rem",
  rowContentPaddingRight: "1rem",
};

export const faqConfig = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default faqData;
