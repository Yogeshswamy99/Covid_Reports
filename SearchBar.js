import React, { Component } from 'react'


 class SearchBar extends Component {
    constructor() {
      super()
    
      this.state = {
          filter:"",
          data: [
              
            {stateName :"Andhra Pradesh",Capital:"Amaravati"},
            {stateName:"Arunachal Pradesh" ,Capital:"Itanagar"},
            {stateName:"Assam" ,Capital:"Dispur"},
            {stateName:"Bihar" ,Capital:"Patna"},
            {stateName:"Chhattisgarh" ,Capital:"Raipur"},
            {stateName:"Goa",Capital:"Panaji"},
            {stateName:"Gujarat" ,Capital:"Gandhinagar"},
            {stateName:"Haryana" ,Capital:"Chandigarh"},
            {stateName:"Himachal Pradesh" ,Capital:"Shimla"},
            {stateName:"Jharkhand" ,Capital:"Ranchi"},
            {stateName:"Karnataka" ,Capital:"Bengaluru"},
            {stateName:"Kerala" ,Capital:"Thiruvananthapuram"},
            {stateName:"Madhya_Pradesh" ,Capital:"Bhopal"},
            {stateName:"Maharashtra",Capital:"Mumbai"},
            {stateName:"Manipur",Capital:"Imphal"},
            {stateName:"Meghalaya",Capital:"Shillong"},
            {stateName:"Mizoram",Capital:"Aizawl"},
            {stateName:"Nagaland",Capital:"Kohima"},
            {stateName:"Odisha",Capital:"Bhubaneswar"},
            {stateName:"Punjab",Capital:"Chandigarh"},
            {stateName:"Rajasthan",Capital:"Jaipur"},
            {stateName:"Sikkim",Capital:"Gangtok"},
            {stateName:"Tamil Nadu",Capital:"Chennai"},
            {stateName:"Telangana",Capital:"Hyderabad"},
            {stateName:"Tripura",Capital:"Agartala"},
            {stateName:"Uttar Pradesh",Capital:"Lucknow"},
            {stateName:"Uttarakhand",Capital:"Dehradun,Gairsain"}, 
            {stateName:"West Bengal",Capital:"Kolkata"}
              
        ]
    }
    }
  handleonChange(e){
      this.setState({
          filter:e.target.value
      })
  }
  render() {
    let {filter,data} = this.state;
    let Datasearch = data.filter(item => {
        return Object.keys(item).some(key => 
            item[key].toLowerCase().includes(filter.toLowerCase()))
    })

    return (
        <div>
         Search:<input type="text" value={filter} placeholder={"Search StateName or Capital Name"} onChange={ this.handleonChange.bind(this)}/>
        <table border = "1">
            <thead>
            <tr>
                <th>State Name</th>
                <th>Capital</th>
                <th>Trial</th>
            </tr>
            </thead>
            <tbody>
            {
                Datasearch.map(item =>
                    {
                    return (
                    <tr>
                        <td>
                            {item.stateName}
                        </td>
                        <td>
                            {item.Capital}
                        </td>
                        <td>
                            {item.Trail}
                            </td>
                    </tr>
                )
                })
            }
            </tbody>
        </table>
        
      </div>
    )
  }
}

export default SearchBar