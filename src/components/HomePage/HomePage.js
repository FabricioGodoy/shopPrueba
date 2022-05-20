import React from 'react'
import { FlexBody } from '../FlexBody/FlexBody';
import { FlexEnvios } from '../FlexEnvios/FlexEnvios';
import { BannerBody } from '../BannerBody/BannerBody';
import { GridBody } from '../GridBody/GridBody';
import { Slider } from '../Slider/Slider';

export const HomePage = () => {
  return (
    <>
        <Slider/>
        <FlexEnvios/>
        <FlexBody/>
        <BannerBody/>
        <GridBody/>
    </>
  )
}
