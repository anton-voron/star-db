import React, { Component } from 'react';

const HOCDetails = (View, itemId, getData, getImageUrl) => {
  return class extends Component {
      state = { 
      item: null,
      image: null
    };

    componentDidMount () {
      this.updateItem();
    }

    componentDidUpdate (prevProps) {
      if(this.props.itemId !== prevProps.itemId) {
        this.updatePerson();
      }
    }

    updateItem () {
      if(!itemId) {
        return;
      }

      getData(itemId)
        .then((item) => {
            this.setState({ 
              item,
              image: getImageUrl(item)
           });
        });
    }
  
    render() {
      const {item, image} = this.state;
      
      if(!this.state.item) {
        return <span> Select a item a list </span>
      }
      return <View {...this.props} item={item} image={image}/>;
    }
  }
}

export default HOCDetails;