import React from 'react'

const GalleryVideo = ({ url }) => {
  return (
    <iframe
      src={`${url}?color=f7b300&title=0&byline=0&portrait=0`}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      }}
      title="Crooners Video"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  )
}

export default GalleryVideo
