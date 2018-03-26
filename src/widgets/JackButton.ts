import WidgetBase from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';

export default class JackButton extends WidgetBase {
	render() {
		return v('button', [ 'jack button' ]);
	}
}
