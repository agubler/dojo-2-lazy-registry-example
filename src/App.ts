import WidgetBase from '@dojo/widget-core/WidgetBase';
import { w } from '@dojo/widget-core/d';
import registry from '@dojo/widget-core/decorators/registry';
import PageRender from './widgets/PageRender';

export interface AppProperties {
	name: string;
}

@registry('jack-button', () => import('./widgets/JackButton'))
@registry('john-button', () => import('./widgets/JohnButton'))
export default class App extends WidgetBase<AppProperties> {

	protected render() {
		const { name } = this.properties;

		let CustomButton: any;
		if (name === 'jack') {
			CustomButton = this.registry.get('jack-button');
		} else if (name === 'john') {
			CustomButton = this.registry.get('john-button');
		}
		return w(PageRender, { CustomButton });
	}
}
