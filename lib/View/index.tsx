import { withStyles } from '../../provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

export type IProps = IViewProps;

const ViewBox = withStyles(styles)(View);
ViewBox.displayName = 'Order.ViewBox';

export default ViewBox;