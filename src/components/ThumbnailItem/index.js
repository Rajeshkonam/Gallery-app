import './index.css'

const ThumbnailItem = props => {
  const {details, updateThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = details
  const xxx = isActive ? 'aaa' : 'bbb'
  const btn = () => {
    updateThumbnailId(id)
  }

  return (
    <li className="li">
      <button type="button" className="btn1">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={btn}
          className={`${xxx}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
