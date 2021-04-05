import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about'>
            <h3 className='subnav_links'>About</h3>
          </Link>
          <Link to='/about/history'>
            <h3 className='subnav_links'>History</h3>
          </Link>
          <Link to='about/contact'>
            <h3 className='subnav_links'>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History} />
            <Route path='/about/contact' component={Contact} />
            <Route path='/about'
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti et reiciendis nam dolore quas ducimus reprehenderit veniam vel! Cupiditate praesentium culpa itaque, sed minima repudiandae reprehenderit optio vitae incidunt?
                    Perferendis consequuntur recusandae asperiores ipsum! Non ducimus corrupti nostrum illo harum. Non inventore repellat a dolorum, fugit magnam et temporibus amet iste nulla esse, vitae aliquam dicta. Accusantium, dolorem maiores?
                    Praesentium quos totam modi tempora magnam corporis aspernatur? Quis in cupiditate quod quo accusantium, inventore culpa animi similique optio reprehenderit natus dicta accusamus magnam officia beatae placeat fuga esse omnis.
                </p>
                </div>
              )} />
          </Switch>
        </div>
      </div>
    )
  }
}