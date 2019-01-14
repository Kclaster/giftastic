import React from 'react';
import { addFav } from '../actions';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import '../stylesheet/SearchBar.css'


class SearchBar extends React.Component {

    handleClick = (e) => {
        let value = this.props.formInput.form.input.values.addedFavorite;
        e.preventDefault();
        this.props.reset();
        console.log(this.props);
//Jose, there are several ways to call dispatch. But this is the only one that I understand. However, according to Dan Abramov I should use the other ways. https://blog.bam.tech/developper-news/4-ways-to-dispatch-actions-with-redux
        this.props.dispatch(addFav(value));

    }

//Jose, I wrote renderInput like this, because this is how https://redux-form.com/6.2.0/docs/api/field.md/ says to write it. But I don't understand line 18, specifically the curly brackets.

    renderInput = (field) => {
        return (
            <div>
                <input {...field.input} />
            </div>
        )
    }

    render() {
        return (
        <form className="form">
            <Field label="Add New Favorite" name="addedFavorite" component={this.renderInput} />
            <button onClick={this.handleClick} className="submit-button">Submit</button>
        </form>
        );
    }
}

const mapDispatchToProps = {
    addFav,
};

const mapStateToProps = (state) => {
    return {
        formInput: state,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'input'
})(SearchBar));


// I am doing something wrong here. mapDispatchToProps should make the dispatch go to the actioncreator and not the component...

//TODO 1.When client types into form and hits enter console log results.
//2. Add that to state.

