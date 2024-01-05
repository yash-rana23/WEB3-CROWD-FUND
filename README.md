# Web3 Crowdfunding

This project is a decentralized crowdfunding application built using Vite, React.js, Hardhat, and ThirdWeb. It leverages the power of Web3 technology to enable trustless and transparent fundraising campaigns on the Ethereum blockchain.

Live Website - https://sweet-maamoul-0cd768.netlify.app/

## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#Demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Web3 Crowdfunding is a platform that allows users to create and participate in crowdfunding campaigns using cryptocurrency. It eliminates the need for intermediaries, such as banks or payment processors, by leveraging smart contracts deployed on the Ethereum blockchain. With this application, campaign creators can set funding goals and deadlines, while contributors can send their contributions directly to the smart contract. Once a campaign reaches its funding goal within the specified deadline, the funds are released to the creator.

## Demo


- All campaigns

![Screenshot from 2023-07-17 00-34-38](https://github.com/TomarJatin/web3-crowdfunding/assets/91650461/6e375573-785d-4657-9995-9e676ebf414f)

- Create a new campaign

![Screenshot from 2023-07-17 00-34-56](https://github.com/TomarJatin/web3-crowdfunding/assets/91650461/60ead235-f3f3-4378-9db4-e87dc533f318)

- Campaign Stats

![Screenshot from 2023-07-17 00-35-00](https://github.com/TomarJatin/web3-crowdfunding/assets/91650461/bf163bd5-a4ea-4e15-b0d8-97521543004d)

- All Your campaigns

![Screenshot from 2023-07-17 00-35-06](https://github.com/TomarJatin/web3-crowdfunding/assets/91650461/a24b13c8-a3c8-4acc-98dd-17638dbdc3aa)

-  Fund a campaign

![Screenshot from 2023-07-17 00-35-28](https://github.com/TomarJatin/web3-crowdfunding/assets/91650461/62fd6f35-934f-401d-8356-36169adf7973)


## Features

- Create and manage crowdfunding campaigns.
- Contribute to campaigns using Ethereum or compatible tokens.
- Track the progress of campaigns in real-time.
- Automatic fund release when the funding goal is reached.
- Refund contributors if the campaign fails to reach its goal within the deadline.

## Technologies Used

- Vite: Fast, opinionated web application build tool for React.js.
- React.js: A JavaScript library for building user interfaces.
- Hardhat: A development environment for Ethereum that allows writing, testing, and deploying smart contracts.
- ThirdWeb: A library that simplifies the interaction with smart contracts using Web3.js and ethers.js.
- Solidity: A contract-oriented programming language for writing smart contracts on the Ethereum platform.

## Getting Started

To set up the project locally, please follow the steps below:

1. Clone the repository:

`git clone https://github.com/your-username/web3-crowdfunding.git`


2. Install the dependencies:

`cd web3-crowdfunding`
`npm install`


3. Configure your Ethereum network settings by creating a `.env` file in the root directory. You can use the `.env.example` file as a template.

4. Configure the deployment parameters for the smart contracts in the `hardhat.config.js` file.

5. Customize the application by modifying the React components in the `src` directory.

## Running the Application

To start the development server, run the following command:

`npm run dev`


This will start the Vite server, and the application will be accessible at `http://localhost:3000`.

## Running Tests

To run the smart contract tests, use the following command:

`npx hardhat test`


## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request to this repository.

Before contributing, please familiarize yourself with the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of this license.
