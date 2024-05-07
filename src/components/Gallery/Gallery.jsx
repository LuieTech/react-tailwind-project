import PropTypes from 'prop-types'

function Gallery({images=[]}) {

  return (
    <section className='flex w-full h-[600px]'>
    {images.map((image, index) => (
      <img key={index} src={image.url} alt={image?.name} className='w-0 flex-grow object-cover opacity-80 duration-500 ease-linear hover:w-40 hover:opacity-100 hover:contrast-[120%]'/>
    ))}
    </section>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

// Gallery.defaultProps = { "this feature will be removed in future versions of react"
//   images : []
// }

export default Gallery