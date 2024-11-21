import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Harsh Bhatt",
  initials: "HB",
  url: "https://dillion.io",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/london",
  description:
    "Blockchain Developer & Researcher at NEST",
  summary:
    "Blockchain Developer with expertise in designing and implementing DeFi solutions, including liquidity protocols, token swaps, and cross-chain asset bridging. Skilled in protocols such as Uniswap, with a strong background in solidity and move smart contract development. Experienced in building decentralized applications that support complex financial transactions and enhance interoperability within EVM-based blockchain ecosystems.",
  avatarUrl: "/image.png",
  skills: [
    "Solidity",
    "Move",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "Rust",
    "Postgres",
    "SQL",
    "NoSQL"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "harshbhatt0151@gmail.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/harshbhatt01/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:harshbhatt0151@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "NEST",
      href: "https://nes.tech",
      badges: [],
      location: "Remote",
      title: "Associate Blockchain Developer",
      logoUrl: "/nest.png",
      start: "Jan 2023",
      end: "Present",
      description:
        "I have developed and deployed Move smart contracts on the SUI blockchain, focusing on secure asset management and interoperability. I designed complex smart contracts (e.g., ERC2222, ERC4626), optimized contract efficiency using advanced techniques, and built custom SDKs for multiple EVM-based blockchains. Additionally, I developed decentralized oracles, backend APIs, and integrated cross-chain mechanisms like Hyperlane and Wormhole, driving increased transactions and security through rigorous audits.",
    },
    {
      company: "NEST",
      badges: [],
      href: "https://nes.tech",
      location: "Remote",
      title: "Jr. Blockchain Developer",
      logoUrl: "/nest.png",
      start: "June 2022",
      end: "Dec 2022",
      description:
        "I developed backend APIs using Node.js and integrated NoSQL and PostgreSQL databases for efficient blockchain data management. I also implemented EVM SDKs in frontend frameworks like React and Angular, enhancing user interactions. I engineered a foundational soulbound smart contract, pivotal in three major projects, and led the development of a blockchain explorer with integrated APIs for transaction tracking, price updates, and block analysis, improving transparency in the blockchain ecosystem.",
    },
    {
      company: "NEST",
      href: "https://nes.tech",
      badges: [],
      location: "Remote",
      title: "Blockchain Developer & Researcher Intern",
      logoUrl: "/nest.png",
      start: "January 2022",
      end: "May 2022",
      description:
        "I researched and implemented ERC smart contract standards, developing over 15 complex contracts tailored to specific project goals. I successfully deployed and integrated these contracts into 5 major blockchains, showcasing advanced proficiency in blockchain technology and smart contract development.",
    }
  ],
  education: [
    {
      school: "Aston University",
      href: "https://buildspace.so",
      degree: "MSc Business Analytics",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2025",
    },
    {
      school: "RK University",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2019",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "Central Multisig - a hirarchial multisig for smart contracts",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "I developed a smart contract for a central multisig that interacts with multiple multisig contracts. It allows the parent multisig to withdraw funds from all linked contracts with a single transaction. This solution streamlines fund management and improves security. The design ensures efficient and controlled access across multiple multisig wallets.",
      technologies: [
        "Solidity",
        "Typescript",
        "Node.js",
        "MongoDB"
      ],
      image: "",
      video:
        "",
    },
    {
      title: "SDK - Explorer Transactions monitoring for frontend",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "The SDK for Explorer Transactions Monitoring provides a robust solution for frontend applications to seamlessly track and analyze blockchain transactions. It offers real-time monitoring of transactions, blocks, and contract interactions, allowing users to verify and visualize transaction history efficiently. The SDK integrates easily with various blockchain networks, offering detailed insights and notifications for transaction statuses. With built-in features for filtering and sorting, it ensures a smooth user experience while interacting with decentralized applications and smart contracts.",
      technologies: [
        "Solidity",
        "Typescript",
        "Node.js",
        "MongoDB"
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Staked Tokens: NFT Yield Leasing",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "“Staked Tokens: NFT Yield Leasing” refers to a system where users stake their tokens and, in return, receive an NFT. This NFT can be used or leased, and once the staking rewards are generated, the NFT is returned to the smart contract. It combines token staking with NFT leasing, enabling users to earn rewards while utilizing NFTs within a decentralized ecosystem. This concept provides both staking yields and the flexibility of NFT usage in a secure and automated process.",
      technologies: [
        "Solidity",
        "Typescript",
        "Node.js",
        "MongoDB"
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Smart Contract & Transaction Auditor",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "“Smart Contract & Transaction Auditor” is a service or tool designed to analyze and verify the integrity of smart contracts and blockchain transactions. It automatically checks for vulnerabilities, ensures compliance with standards, and monitors transactions for anomalies or suspicious activity. This auditor helps developers and users ensure that contracts are secure, efficient, and functioning as intended, while also providing a transparent view of transaction histories and contract interactions on the blockchain. It is an essential tool for maintaining the security and reliability of decentralized applications.",
      technologies: [
        "Solidity",
        "Typescript",
        "Node.js",
        "MongoDB"
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Multi-Standard Contract Suite",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "“Multi-Standard Contract Suite” is a platform that provides ready-to-use contract templates for various blockchain standards such as ERC-721, ERC-1155, ERC-20, Soulbound, and other ERC standards. Users can select their desired contract standard and leverage both advanced and default features with ease. This suite streamlines the deployment of smart contracts by offering pre-configured templates that simplify the process while maintaining flexibility for customization. It is designed for developers and businesses looking to integrate multiple token standards without the need for complex coding or implementation.",
      technologies: [
        "Solidity",
        "Typescript",
        "Node.js",
        "MongoDB"
      ],
      image: "",
      video:
        "",
    },
    {
      title: "DID: Decentralized Identity Transaction Guard",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "“DID: Decentralized Identity Transaction Guard” is a service that monitors and verifies transactions involving decentralized identities (DIDs). It ensures that every transaction conducted using a DID is authenticated, secure, and compliant with identity standards. The system provides real-time monitoring and validation, offering users confidence that their digital identity is being properly handled throughout various blockchain interactions. This service helps prevent fraud and enhances the security of decentralized identity ecosystems by ensuring only verified transactions are processed.",
      technologies: [
        "Solidity",
        "Typescript",
        "Node.js",
        "MongoDB"
      ],
      image: "",
      video:
        "",
    }
  ]
} as const;
