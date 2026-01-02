import { Config, Line } from '@/lib/types'
import { MapboxOptions } from 'mapbox-gl'
import { Metadata } from 'next'

export const BEG_THRESHOLD = 0.5

export const LINES: {
  [name: string]: Line
} = {
  HSLTrainA: {
    name: 'A',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 2,
  },
  HSLTrainE: {
    name: 'E',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 3,
  },
  HSLTrainU: {
    name: 'U',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 4,
  },
  HSLTrainY: {
    name: 'Y',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 5,
  },
  HSLTrainL: {
    name: 'L',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 6,
  },
  HSLTrainI: {
    name: 'I',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 7,
  },
  HSLTrainP: {
    name: 'P',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 8,
  },
  HSLTrainK: {
    name: 'K',
    color: '#9f3f8f',
    backgroundColor: '#66285c',
    textColor: '#6b2a60',
    order: 9,
  },
  HSLMetroM1: {
    name: 'M1',
    color: '#f04822',
    backgroundColor: '#a83218',
    textColor: '#d43f1d',
    order: 0,
  },
  HSLMetroM2: {
    name: 'M2',
    color: '#f04822',
    backgroundColor: '#a83218',
    textColor: '#d43f1d',
    order: 1,
  },
  HSLTrainH: {
    name: 'H',
    color: '#62BA27',
    backgroundColor: '#2f5a12',
    textColor: '#43801a',
    order: 10,
  },
  HSLTrainD: {
    name: 'D',
    color: '#62BA27',
    backgroundColor: '#2f5a12',
    textColor: '#43801a',
    order: 11,
  },
  HSLTrainR: {
    name: 'R',
    color: '#62BA27',
    backgroundColor: '#2f5a12',
    textColor: '#43801a',
    order: 12,
  },
  HSLTrainZ: {
    name: 'Z',
    color: '#62BA27',
    backgroundColor: '#2f5a12',
    textColor: '#43801a',
    order: 13,
  },
  HSLTrainT: {
    name: 'T',
    color: '#62BA27',
    backgroundColor: '#2f5a12',
    textColor: '#43801a',
    order: 14,
  },
  HSLLightRail15: {
    name: '15',
    color: '#00969F',
    backgroundColor: '#005e63',
    textColor: '#007b81',
    order: 15,
  }
}

export const METADATA: Metadata = {
  title: 'Julkisen liikenteen muistipeli',
  description: 'Montako pääkaupunkiseudun (ja vähän sen ulkopuoleltakin) pikaratikka-, metro- ja lähijuna-asemia osaat nimetä?',
  openGraph: {
    title: 'Julkisen liikenteen muistipeli',
    description:
      'Montako pääkaupunkiseudun (ja vähän sen ulkopuoleltakin) pikaratikka-, metro- ja lähijuna-asemia osaat nimetä?',
    type: 'website',
    locale: 'fi_FI',
    url: 'https://metro-memory.com/helsinki',
  },
}

export const MAP_CONFIG: MapboxOptions = {
  container: 'map',
  style: 'mapbox://styles/benjamintd/clq43c36701xd01pj25i277ad',
  minZoom: 6,
  fadeDuration: 50
}

export const STRIPE_LINK = 'https://buy.stripe.com/cN2aFb0nI1rI9bi5km'

export const CITY_NAME = 'helsinki'

export const LOCALE = 'fi'

export const MAP_FROM_DATA = true

const config: Config = {
  GAUGE_COLORS: 'inverted',
  MAP_FROM_DATA,
  LOCALE,
  STRIPE_LINK,
  CITY_NAME,
  MAP_CONFIG,
  METADATA,
  LINES,
  BEG_THRESHOLD,
}

export default config
