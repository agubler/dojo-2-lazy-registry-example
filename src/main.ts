import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import App from './App';

const Projector = ProjectorMixin(App);
const projector = new Projector();

setTimeout(() => {
	projector.setProperties({ name: 'john' });
}, 2000);

setTimeout(() => {
	projector.setProperties({ name: 'jack' });
}, 4000);

projector.append();
