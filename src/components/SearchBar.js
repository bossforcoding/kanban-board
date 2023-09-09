import { React } from 'react'
import '../styles/SearchBar.css'


const SearchBar = (props) => {
    const { filteredType, setFilteredType, filteredText, setFilteredText } = props

    const handleSearch = (event) => {
        const searchTerm = event.target.value
        setFilteredText(searchTerm)
    }

    return (
        <div className="search-menu">
            <input type="text" placeholder="Search by title" value={filteredText} onChange={handleSearch} />
            <select value={filteredType} onChange={e => setFilteredType(e.target.value)}>
                <option value="all">Filter by Type</option>
                <option value="TASK">TASK</option>
                <option value="BUG">BUG</option>
                <option value="USER_STORY">USER STORY</option>1
            </select>
        </div>
    )
}

export default SearchBar;