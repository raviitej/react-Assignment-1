import './index.css'

const HistoryItem = props => {
  const {suggestionDetails, getDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = suggestionDetails

  const deleteItem = () => {
    getDelete(id)
  }
  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="logo-title-container">
        <img src={logoUrl} className="logoimg" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
      </div>
      <button
        className="btn"
        type="button"
        onClick={deleteItem}
        data-testid=" delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="deletelogo"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
