import React from 'react'

const LoadSpinner = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      style={{
        margin: 'auto',
        marginTop: `${window.innerHeight / 4}px`,
        background: 'rgb(60, 65, 75)',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width='120px'
      height='120px'
      auto='true'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'>
      <circle
        cx='50'
        cy='50'
        fill='none'
        stroke='#ff5860'
        strokeWidth='12'
        r='35'
        strokeDasharray='164.93361431346415 56.97787143782138'>
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='500ms'
          values='0 50 50;360 50 50'
          keyTimes='0;1'></animateTransform>
      </circle>
    </svg>
  )
}

export default LoadSpinner
