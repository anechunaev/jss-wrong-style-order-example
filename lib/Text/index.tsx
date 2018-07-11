import { withStyles } from '../../provider';
import View, { IOuterProps as IViewProps } from './view';
import styles from './style';

export { ITextProps } from './view';
export type IProps = IViewProps;

const Text = withStyles(styles)(View);
Text.displayName = 'Order.Text';

export default Text;