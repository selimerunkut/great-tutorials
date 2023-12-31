# 🏗 Great Tutorials

> a gamified experience that takes users through tutorials to learn Ethereum and EVM based services and software development

[Check out the App](https://tutorial-gamification-eth-dev.vercel.app/)

![image](packages/eth-dev/public/assets/Screenshot.png)

## Installing

after cloning the repo
```bash
cd tutorial-gamification
yarn install
```

## Start the game locally

```bash
# 1. Terminal
# start eth.dev app
yarn start

# OPTIONAL
# 2. Terminal
# start local chain
yarn chain
```

## Create a new level

The different game levels are located at `packages/eth-dev-src/components/levels/`.

To add a new level duplicate one of the level folders.

Then do a find+replace using the folder name of the level you copied and replace all occurances with your new level name.
It is important that you respect upper and lower cases!

📽 [Watch Soren demonstrate level building](https://www.youtube.com/watch?v=31jb97uxEQ8&t=99s)

Check out the ExempleLevel(http://localhost:3000/examplelevel) for a quickstart on the basic eth.dev functionality!

## Build & surge

After creating a `build` you need to do a small hack to get `react-router` routes to work.
Take a look the instructions [here](https://barcelonacodeschool.com/how-to-make-react-router-work-on-surge).
Simply make a copy of the `index.html` file in the build folder and name the copy `200.html`.

## Special Thanks 

Build with https://github.com/scaffold-eth 

[Sören Steiger](https://github.com/ssteiger) for letting us to use code and images from his project [eth.dev](https://github.com/scaffold-eth/scaffold-eth-examples/tree/eth-dev)