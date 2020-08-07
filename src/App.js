import React, { Component } from 'react';
import './App.css';
import { Font, Gap, Box } from 'themeor';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			jobs: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=react')
			.then(res => res.json())
			.then(jobs => this.setState({
				jobs
			}));
	}

	handleChange = (e) => {
		this.setState({
			searchField: e.target.value
		})
	}

	render() {
		const {jobs, searchField} = this.state;
		const filteredJobs = jobs.filter(job => job.company.toLowerCase().includes(searchField.toLowerCase()));
		return(
			<Box fill="--demo-var">
				<Gap top="md">
					<Font fill="base" align="center" size="lg" >Jobs App</Font>
				</Gap>
				<SearchBox handleChange={this.handleChange}/>
				<CardList jobs={filteredJobs}/>
			</Box>
		)
	}
}

export default App;
