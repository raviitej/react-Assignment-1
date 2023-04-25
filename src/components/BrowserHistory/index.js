import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const {historyList} = this.props
let searchResults

class BrowserHistory extends Component {
  state = {datalist: '', initialist: historyList}

  showHistory = event => {
    this.setState({datalist: event.target.value})
  }

  getDelete = unique => {
    searchResults = historyList.filter(each => each.id !== unique)
    this.setState({initialist: historyList})
  }

  render() {
    const {datalist, initialist} = this.state

    searchResults = initialist.filter(each =>
      each.title.toLowerCase().includes(datalist.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="historylogo"
            alt="app logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            className="searchlogo"
            alt="search"
          />
          <input
            type="search"
            placeholder="Search History"
            onChange={this.showHistory}
            value={datalist}
            className="input"
          />
        </div>
        <ul className="history-container">
          {searchResults.map(each => (
            <HistoryItem
              suggestionDetails={each}
              key={each.id}
              getDelete={this.getDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
