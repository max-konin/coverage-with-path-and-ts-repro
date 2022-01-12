import Component from '@glimmer/component';

interface MyAwesomeComponentArgs {}

export default class MyAwesomeComponent extends Component<MyAwesomeComponentArgs> {
  get value() {
    return "testValue";
  }
}
