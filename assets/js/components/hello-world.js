import  Component, { hbs } from '@glimmerx/component';

export default class HelloGlimmer extends Component {
  static template = hbs`
    <h1>Hello World {{@name}}</h1>
  `;
}
