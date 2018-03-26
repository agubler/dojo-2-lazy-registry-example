import WidgetBase from '@dojo/widget-core/WidgetBase';
import { w } from '@dojo/widget-core/d';
import { Constructor } from '@dojo/widget-core/interfaces';
import DefaultButton from './DefaultButton';

export interface PageRenderProperties {
	CustomButton?: Constructor<WidgetBase>;
}

export default class PageRender extends WidgetBase<PageRenderProperties> {
	protected render() {
		const { CustomButton } = this.properties;
		if (CustomButton) {
			return w(CustomButton, {});
		}
		return w(DefaultButton, {});
	}
}
