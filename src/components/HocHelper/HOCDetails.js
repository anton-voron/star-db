import React, { Component } from 'react';

const HOCDetails = (View) => {
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
      if(!this.props.itemId) {
        return;
      }

      this.props.getData(this.props.itemId)
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
      return <View {...this.props} item={item} image={image} itemId={this.props.itemId}/>;
    }
  }
}

export default HOCDetails;