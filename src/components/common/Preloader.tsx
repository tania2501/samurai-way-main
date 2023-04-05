import React from 'react';
import s from './Preloader.module.css'

type PreloaderType = {
  isFetching: boolean
}
export const Preloader = (props: PreloaderType) => {
  return (
    <div className={props.isFetching ? s.loader : ''}></div>
  )
}