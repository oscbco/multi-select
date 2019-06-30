import React, { PureComponent } from 'react';

import MultiSelect from '../MultiSelect/MultiSelect';
import './_App.scss';

import { programmingLanguages } from './data';

export default class App extends PureComponent {
  render () {
    return (
      <React.Fragment>
        <h1>MultiSelect</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie, orci sit amet facilisis bibendum, nisl nisl fringilla leo, id mollis libero lorem non nunc. Curabitur luctus sapien nisi, iaculis commodo felis rutrum at. Donec semper justo eu lorem egestas placerat. Etiam interdum tempus tincidunt. Pellentesque lobortis arcu dolor, eu lacinia mauris rhoncus id. Donec a congue tortor. Vivamus mollis mauris a tortor pharetra placerat. Vestibulum sodales scelerisque lectus, eu condimentum ex tempor sit amet. Nullam sit amet tortor bibendum, ultrices elit ac, iaculis dui.<br />
        <MultiSelect items={programmingLanguages} width='200px' />
        Pellentesque sit amet rhoncus nisl. Cras a leo dignissim, condimentum tellus interdum, posuere libero. In ultrices mauris venenatis sollicitudin congue. Cras ornare sit amet erat vehicula porta. Nunc mollis lacinia convallis. Vivamus finibus iaculis diam quis vulputate. Fusce ac nisl eu urna aliquam bibendum. Praesent rutrum erat suscipit lacus interdum, eget rhoncus elit pharetra. In ultrices tortor neque, in aliquam justo varius tincidunt. Curabitur nec faucibus lorem. Sed et lectus quam. Mauris non porta ipsum, ut accumsan diam. Curabitur tellus arcu, congue a sagittis a, tempus a enim. Nunc ut urna hendrerit, vulputate velit vitae, faucibus mi. Curabitur non porta lorem.<br />
        <div style={{ width: '300px' }}>
          <MultiSelect items={programmingLanguages} width='100%' />
        </div>
        Mauris efficitur, justo vitae convallis hendrerit, dolor mauris volutpat mauris, vitae viverra lorem velit vel urna. Nullam aliquet quis velit eget sagittis. Suspendisse non tincidunt justo, sed volutpat purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eget lacus condimentum lectus varius viverra non id magna. Morbi ac nisi dictum elit pellentesque lobortis. In viverra nisi non odio vestibulum consequat.<br />
        Duis porttitor bibendum dolor id viverra. Integer interdum ante diam, quis hendrerit sem hendrerit ut. Vestibulum in purus eu nisl dictum dignissim. Aenean cursus cursus porta. Donec neque turpis, mattis id mauris id, gravida aliquam mauris. Morbi nibh odio, auctor eget ullamcorper at, fringilla ut nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi non posuere lorem. Aliquam erat volutpat. Praesent ligula enim, accumsan ut nunc id, fermentum sollicitudin dui. Proin sagittis odio rhoncus leo fringilla commodo. Pellentesque dapibus molestie tellus quis convallis.<br />
        In nec bibendum ipsum. Morbi vitae ipsum aliquet, euismod sapien eget, eleifend leo. Quisque et eros nisl. Donec quam lectus, tincidunt a lobortis et, aliquam ut odio. Aenean eu commodo urna. Quisque a congue libero. Phasellus iaculis vel metus nec imperdiet.<br />
      </React.Fragment>
    );
  }
}
