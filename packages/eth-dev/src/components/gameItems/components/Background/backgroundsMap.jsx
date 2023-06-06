import React from 'react'

import {
  Intro,
  CityOutskirts,
  City,
  CityChaos,
  CitySkylineInsideNight,
  DiceGame,
  NiftyShop,
  RoofSatellite,
  Workstation,
  ExchangeRed,
  ExchangeStonks,
  HackerSpaceCorner
} from './backgrounds'

const backgroundsMap = {
  Intro: <Intro />,
  CityOutskirts: <CityOutskirts />,
  City: <City />,
  CityChaos: <CityChaos />,
  CitySkylineInsideNight: <CitySkylineInsideNight />,
  DiceGame: <DiceGame />,
  NiftyShop: <NiftyShop />,
  RoofSatellite: <RoofSatellite />,
  Workstation: <Workstation />,
  ExchangeRed: <ExchangeRed />,
  ExchangeStonks: <ExchangeStonks />,
  HackerSpaceCorner: <HackerSpaceCorner />
}

const backgroundIds = {
  Intro: 'Intro',
  CityOutskirts: 'CityOutskirts',
  City: 'City',
  CityChaos: 'CityChaos',
  CitySkylineInsideNight: 'CitySkylineInsideNight',
  DiceGame: 'DiceGame',
  NiftyShop: 'NiftyShop',
  RoofSatellite: 'RoofSatellite',
  Workstation: 'Workstation',
  ExchangeRed: 'ExchangeRed',
  ExchangeStonks: 'ExchangeStonks',
  HackerSpaceCorner: 'HackerSpaceCorner' 
}

export { backgroundsMap, backgroundIds }
