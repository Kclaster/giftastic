import React from 'react';
import { connect } from 'react-redux';
import '../stylesheet/FavoriteList.css';
import { uploadGif, getGif} from '../actions';



class FavoriteList extends React.Component {


    handleFavClick = (id) => {
        const list = this.props.gifList;
        this.props.getGif(list[id]);
    }


    renderList = (callback) => {
        let fullList = this.props.favsList.map(function(cur, index) {
            return (
            <button onClick={function() {
                callback(index);
            }} className="list-item" key={index}>{cur}</button>
            )
        });
        return fullList;
    }

    handleClick = (el) => {
        console.log(el.target);
        console.log(el.target.getAttribute("animate"));
        if (el.target.getAttribute("animate") ===  "false") {
            el.target.setAttribute("animate", "true")
            //I was unable to set the attribute to the localscope AnimateGIF, need to put AnimateGIF and Still/GIF in redux and use the store to update.


            //create an if else statement to call a different action creator going to the same switch
            //reducer is a state object which toggles between still and animated depending on if statement from here
            //only need to find out how to pass in the cur still and animated url's
        }
    }
    

    render() {

        let gifArray = this.props.gifs['[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]']

        const renderArray = (array) => {
            if (array !== undefined) {
            const mappedGifs = array.map(function(cur, index) {
                if (index < 10) {
                // this.props.storeStillGif(cur.images['fixed_width_still'].url);
                // this.props.storeAnimatedGif(cur.images['fixed_width'].url);
                return <img onClick={this.handleClick.bind(this)} animate="false" title={cur} src={null} key={index} alt="gif"/>
                };
                }.bind(this)); 
                return mappedGifs;
            }; 
        };

        renderArray(gifArray);

        return (
            <div>
                <div className="favs">
                    <h2>Favorite List</h2>
                    <ul className="unordered-list">
                        {this.renderList(this.handleFavClick)}
                    </ul>
                </div>
                <div>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);


