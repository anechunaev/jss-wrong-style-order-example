import { withStyles } from '../../provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

export type IProps = IViewProps;

const Panel = withStyles(styles)(View);
Panel.displayName = 'Order.Panel';

export default Panel;