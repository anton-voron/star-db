import React, { Component } from 'react';

const HOCDetails = (View, itemId) => {
  return class extends Component {
      state = { 
      item: null,
      image: null
    };

    componentDidMount () {
      this.updateItem();
    }

    componentDidUpdate (prevProps) {
      if(this.props.itemId !== prevProps.itemId || 
         this.props.getData !== prevProps.getData ||
         this.props.getImageUrl !== prevProps.getImageUrl) {
        this.updateItem();
      }
    }

    updateItem () {
      if(!itemId) {
        return;
      }

      this.props.getData(itemId)
        .then((item) => {
            this.setState({ 
              item,
              image: this.props.getImageUrl(item)
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