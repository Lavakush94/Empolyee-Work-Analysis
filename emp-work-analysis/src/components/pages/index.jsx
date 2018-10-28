import React from 'react';

export default class Main extends React.Component{
    render(){
        return (<>
            <header>
                <i 
                    class="fa fa-briefcase" 
                    aria-hidden="true" 
                    style = {{marginRight : '10px'}}
                />
                Employee Work Analysis
            </header>
            <br/>
            <div className = "card container">
                <div className = "nav-section">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Daily</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Weekly</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Monthly</a>
                        </li>
                    </ul>
                    <br />
                    <div>
                            
                    </div>
                    <div align = "center">
                        <i 
                            class="fa fa-chevron-left icon" 
                            aria-hidden="true"  
                            style = {{marginRight : "20px", cursor : 'pointer', color : 'purple'}}/>

                        <i 
                            class="fa fa-chevron-right icon" 
                            aria-hidden="true" 
                            style = {{marginLeft : "20px", cursor : 'pointer', color : 'purple'}}
                        />
                    </div>
                </div>
            </div> 
            <div class="container bottom">
                <div class="row">
                    <div class="col-sm icon">
                        <button className = "btn btn-outline-secondary">
                            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="col-lg">
                        <input
                            placeholder = "jump to"
                            type = "text"
                            className = "jumpTo"
                        />
                    </div>
                    <div class="col-sm icon">
                        <button className = "btn btn-outline-secondary">
                            <i class="fa fa-chevron-circle-right" aria-hidden="true" />
                        </button>
                        
                    </div>
                </div>
            </div>

            
        </>)
    }
}