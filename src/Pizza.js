import React from "react";

class Pizza extends React.Component {
  render() {
    console.log('dop we have props topping?', this.props.toppings);

    return (

      <>
        <article>
          <h2>{this.props.pie}</h2>
          <h3>{this.props.toppings}</h3>
          <h4>{this.props.crust}</h4>
          <p>Is this your favorite pizza</p>
        </article>
        {/* <article>
          <h3>Chicago</h3>
          <p>Is this your favorite pizza</p>
        </article>
        <article>
          <h3>{this.props.pie}</h3>
          <p>Is this your favorite pizza</p>
        </article>
        <article>
          <h3>{this.props.pie}</h3>
          <p>Is this your favorite pizza</p>
        </article>
        <article>
          <h3>{this.props.pie}</h3>
          <p>Is this your favorite pizza</p>
        </article> */}
      </>
    );
  }
}

export default Pizza;