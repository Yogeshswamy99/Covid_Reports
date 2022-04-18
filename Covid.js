import {  } from '@testing-library/user-event/dist/tab'
import React, { Component } from 'react'
import "./Covid.css"


class CovidData extends Component {
    state = {
        table:[]
    }

    componentDidMount(){
        let url = 'https://disease.sh/v3/covid-19/countries'
        fetch(url).then((response) =>{
            return response.json()
        }).then((data) => {
            this.setState({
                table:data
            })
        })
    }
    handleSortByName = () => {
        let {table} = this.state;
        let obj = table.sort((a,b) => {
            if(a.country>b.country){
                return 1
            }if(b.country>a.country){
                return -1
            }else{
                return 0
            }
        })
        this.setState({
            table:obj
        })
    } 
    handleSortByRecovered = () => {
        let {table} = this.state;
        let obj = table.sort((a,b) => a.recovered-b.recovered)
        this.setState({
            table:obj
        })
    }
    handleSortByCritical = () => {
        let {table} = this.state;
        let obj = table.sort((a,b) => a.critical-b.critical)
        this.setState({
            table:obj
        })
    }
    handleSortBytodaysdeath = () =>{
        let {table} =this.state;
        let obj  = table.sort((a,b) => a.todayDeaths-b.todayDeaths)
        this.setState({
            table:obj
        })
    }
    handleSortByDeath = () =>{
        let {table} = this.state;
        let obj = table.sort((a,b) => a.deaths-b.deaths)
        this.setState({
            table:obj
        })
    }
    handleonChange(e){
        this.setState({
            filter:e.target.value
        })
    }

  render() {
    let {filter,table} = this.state;
    let Datasearch = table.filter(item => {
        return Object.keys(item).some(key => 
          String(item[key]).toLowerCase().includes((filter || "").toLowerCase())) 
    })
    return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
      <a class="navbar-brand" href="www.gmail.com">Gmail</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search"  value={filter} placeholder=" Country Name..." aria-label="Search"  onChange={(e) => this.handleonChange(e)}/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
         </div>
       </div>
   </nav>
   <h1><i class="fa-solid fa-virus-covid"></i>Covid Reports</h1>
          <table>
              <thead>
                  <tr>
                      <th>Sr No</th>
                      <th onClick={() => this.handleSortByName()}>Country Name</th>
                      <th onClick={() => this.handleSortByRecovered()}>Recovered Cases</th>
                      <th onClick={() => this.handleSortByCritical()}>Critical Cases</th>
                      <th onClick={() => this.handleSortBytodaysdeath()}>Today's Death Cases</th>
                      <th onClick={() => this.handleSortByDeath()}>Total Death Cases</th>
                  </tr>
              </thead>
              <tbody>
                  {Datasearch.map((item,index) => <tr key={item.id}>
                    <td>{index+1}</td>
                    <td >{item.country}</td>
                    <td>{item.recovered}</td>
                    <td>{item.critical}</td>
                    <td>{item.todayDeaths}</td>
                    <td>{item.deaths}</td>
                  </tr>)}
              </tbody>
              </table>
      </div>
    )
  }
}

export default CovidData