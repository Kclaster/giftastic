import React from 'react';
import { connect } from 'react-redux';
import '../stylesheet/FavoriteList.css';
import { uploadGif, getGif} from '../actions';



class FavoriteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayNumber: 10
        }
    }



    handleToggleButton = () => {
            if (this.props.omdbToggle) {
            return "omdb-button";
        } else {
            return "submit-button"
        }
    }


    handleToggleCss = () => {
        if (this.props.omdbToggle) {
            return "omdb";
        } else {
            return "Giff"
        }
    }

    handleToggleBorder = (style) => {
        console.log(style);
        if (style === 'favs') {
        if (this.props.omdbToggle) {
            return "favs omdbBorder";
        } else {
            return "favs GiffBorder"
        }

    }
    else {
        if (this.props.omdbToggle) {
            return "omdbBorder";
        } else {
            return "GiffBorder"
        }
    }
    }

    handleFavClick = (id) => {
        const list = this.props.gifList;
        this.props.getGif(list[id]);
    }


    renderList = (callback) => {
        let fullList = this.props.favsList.map(function(cur, index) {
            return (
            <button onClick={function() {
                callback(index);
            }} className={this.handleToggleButton()} key={index}>{cur}</button>
            )
        }.bind(this));
        return fullList;
    }

    addMoreGifs = () => {
        let current = this.state.displayNumber;
        this.setState({displayNumber: current + 10})
    }

    handleClick = (el) => {
        let target = el.target
        if (el.target.getAttribute("animate") ===  "false") {
            el.target.setAttribute("animate", "true")
            let animateValue = target.getAttribute("animated");
            target.setAttribute("src", animateValue);
        } else {
            el.target.setAttribute("animate", "false")
            let stillValue = target.getAttribute("still");
            target.setAttribute("src", stillValue);
        }
    }
    

    render() {

        let gifArray = this.props.gifs['[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]']

        const renderArray = (array) => {
            if (array !== undefined) {
            const mappedGifs = array.map(function(cur, index) {
                if (index < this.state.displayNumber) {
                    console.log(cur);
                    let stillGif = cur.images['fixed_width_still'].url;
                    let animatedGif = cur.images['fixed_width'].url;
                     return (
                     <div className={this.handleToggleBorder()}>
                        <img still={stillGif} animated={animatedGif} onClick={this.handleClick.bind(this)} animate="false" title={cur} src={stillGif} key={index} alt="gif"/>
                        <div className={this.handleToggleCss()}>Title: {cur.title}</div>
                        <div className={this.handleToggleCss()}>Rating: {cur.rating}</div>
                    </div>
                     )};
                        }.bind(this)); 
            
                    return (
                        <div className="center">
                        {mappedGifs}
                        <button id="continue" className={this.handleToggleButton()} onClick={this.addMoreGifs}>Continue...</button>
                        </div>
                    );
            }; 
        };

        renderArray(gifArray);

        return (
            <div>
                <div className={this.handleToggleBorder('favs')}>
                    <h2 className={this.handleToggleCss()}>Favorite List</h2>
                    <ul className="unordered-list">
                        {this.renderList(this.handleFavClick)}
                    </ul>
                </div>
                <div className="gifArray">
                {renderArray(gifArray)}
                </div>
            </div>

            
        )
    }
}

const mapDispatchToProps = {
    uploadGif,
    getGif,
}

const mapStateToProps = (state) => {
    return {
    favsList: state.myFirstReduxKey,
    gifList: state.myFirstReduxKey,
    chosenGif: state.uploadGif,
    gifs: state.getGif,
    omdbToggle: state.omdbToggle,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);


